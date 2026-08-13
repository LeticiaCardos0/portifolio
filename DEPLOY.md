# Deploy — cardoszo.com

Guia dos passos manuais para colocar este projeto em produção. Os arquivos de build
(`Dockerfile`, `nginx.conf`, `.dockerignore`, `docker-compose.yml`) já estão prontos no
repositório — o que falta é infraestrutura (VM) e configuração de painéis externos
(Cloudflare), que não pode ser feito por aqui.

## 1. Provisionar a VM

Crie uma VM Linux (Hetzner, DigitalOcean, Oracle Cloud, etc.) com Ubuntu 22.04 ou 24.04.
Depois de acessar via SSH, instale o Docker:

```bash
curl -fsSL https://get.docker.com | sh
```

## 2. Subir o projeto na VM

**Opção A — clonando o repositório direto na VM:**

```bash
git clone https://github.com/<seu-usuario>/<seu-repositorio>.git
cd <seu-repositorio>
docker compose up -d --build
```

**Opção B — usando uma imagem já publicada em um registry** (necessário se o pipeline de
CI/CD do item 5 do `Dockerfile` for configurado):

```bash
docker compose pull
docker compose up -d
```

Depois de subir, confirme que está respondendo localmente na VM:

```bash
curl -I http://localhost:80
```

## 3. Configurar o domínio cardoszo.com na Cloudflare

Duas opções — **recomendamos a opção (b), Cloudflare Tunnel**, porque evita expor
qualquer porta publicamente na VM (reduz superfície de ataque, sem precisar liberar regras
de firewall para tráfego de entrada).

### (a) Registro A direto para o IP da VM

No painel Cloudflare → DNS → Records, adicione:

| Tipo | Nome | Conteúdo         | Proxy         |
|------|------|------------------|---------------|
| A    | @    | `<IP da VM>`     | Com proxy (🟠) |
| A    | www  | `<IP da VM>`     | Com proxy (🟠) |

### (b) Cloudflare Tunnel (recomendado)

Na VM, instale o `cloudflared` e autentique com sua conta Cloudflare, depois crie um túnel
apontando para o container local:

```bash
cloudflared tunnel login
cloudflared tunnel create portifolio
cloudflared tunnel route dns portifolio cardoszo.com
cloudflared tunnel route dns portifolio www.cardoszo.com
```

No arquivo de configuração do túnel (`~/.cloudflared/config.yml`), aponte o hostname
público para o container, que escuta em `localhost:80`:

```yaml
tunnel: portifolio
credentials-file: /root/.cloudflared/<TUNNEL-ID>.json

ingress:
  - hostname: cardoszo.com
    service: http://localhost:80
  - hostname: www.cardoszo.com
    service: http://localhost:80
  - service: http_status:404
```

Rode o túnel como serviço:

```bash
cloudflared service install
systemctl enable --now cloudflared
```

Com o Tunnel, **nenhuma porta precisa ficar exposta publicamente** na VM — todo o tráfego
entra através da conexão de saída que o `cloudflared` mantém com a Cloudflare.

### SSL/TLS

No painel Cloudflare → SSL/TLS → Overview, defina o modo como **"Full"**. O Nginx da VM não
tem certificado próprio (só serve HTTP na porta 80), então "Full (strict)" não se aplica
aqui — "Full" já garante HTTPS entre o visitante e a Cloudflare, com conexão de saída
válida até a origem (seja via IP direto, seja via Tunnel).

## 4. Checklist de verificação pós-deploy

- [ ] `https://cardoszo.com` carrega o site
- [ ] `https://www.cardoszo.com` carrega o site
- [ ] Dar F5 (reload) numa seção específica, ex: `https://cardoszo.com/#projetos`, não
      quebra (o fallback SPA do Nginx serve `index.html` normalmente)
- [ ] Cadeado de SSL válido no navegador (certificado emitido automaticamente pela
      Cloudflare, sem ação manual necessária)
- [ ] Tempo de resposta aceitável (`curl -o /dev/null -s -w "%{time_total}\n" https://cardoszo.com`)
