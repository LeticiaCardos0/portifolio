import { ContactInfo, NavLink, Project, SocialLink, TechItem } from './portfolio.models';

export const SITE_NAME = 'Leticia Cardoso';
export const SITE_ROLE = 'Analista de Suporte & QA | Desenvolvimento Front-end';

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
];

export const HERO = {
  title: SITE_NAME,
  subtitle: SITE_ROLE,
  photo: 'assets/foto-perfil.jpeg',
  description:
    'Profissional de tecnologia com experiência em Suporte, QA e desenvolvimento Front-end, unindo análise, resolução de problemas e criação de soluções Web.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/LeticiaCardos0', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/leticia-aparecida-cardoso/', icon: 'linkedin' },
];

export const ABOUT = {
  title: 'Sobre Mim',
  text: 'Desenvolvedora apaixonada por tecnologia, com foco em Front-end e interesse em Full Stack. Transformo desafios em soluções modernas e funcionais, sempre buscando evoluir.',
};

export const STATUS = {
  title: 'Status',
  label: 'Aprendendo Java Fullstack',
  progress: 60,
  badge: 'Front-end concluído',
};

export const LOCATION = {
  title: 'Localização',
  text: 'Brasil, SC',
};

export const EXPERIENCE = {
  title: 'Experiência',
  chip: 'Suporte Técnico + QA',
  chip2: 'Desenvolvimento Front-end',
};

export const PROJECTS: Project[] = [
  {
    id: 'futnerds',
    title: 'FUTNERDS',
    description:
      'A comunidade definitiva para jogadores de FIFA. Análises, notícias, estratégias e muito mais para elevar seu jogo.',
    image: 'assets/projeto-futnerd.png',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://projeto-futnerds-ng.leticiaapc06.workers.dev/',
    codeUrl: 'https://github.com/LeticiaCardos0/projeto-futnerds-ng',
  },
  {
    id: 'modular-locadora',
    title: 'MODULAR LOCADORA',
    description: 'Sistema de locadora de veículos com reservas, gestão de frota e clientes.',
    image: 'assets/projeto-locadora.png',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://projeto-locadora-ng.leticiaapc06.workers.dev/',
    codeUrl: 'https://github.com/LeticiaCardos0/projeto-locadora-ng',
  },
];

export const TECH_FRONTEND: TechItem[] = [
  { name: 'Angular', iconPath: 'assets/icons/angular.webp' },
  { name: 'TypeScript', iconPath: 'assets/icons/ts.png' },
  { name: 'JavaScript', iconPath: 'assets/icons/js.png' },
  { name: 'HTML', iconPath: 'assets/icons/html.png' },
  { name: 'CSS', iconPath: 'assets/icons/css.png' },
  { name: 'Tailwind', iconPath: 'assets/icons/tailwind.webp' },
  { name: 'PrimeNG', iconPath: 'assets/icons/primeng.webp' },
];

export const TECH_BACKEND: TechItem[] = [
  { name: 'Git', iconPath: 'assets/icons/git.webp' },
  { name: 'GitHub', iconPath: 'assets/icons/github.png' },
  { name: 'Postgre', iconPath: 'assets/icons/postgre.png', inProgress: true  },
  { name: 'Java', iconPath: 'assets/icons/java.png', inProgress: true },
  { name: 'Postman', iconPath: 'assets/icons/postman.webp' },
];

export const CONTACT: ContactInfo = {
  email: 'leticia06@gmail,com',
  linkedin: 'https://www.linkedin.com/in/leticia-aparecida-cardoso/',
  linkedinLabel: 'linkedin.com/in/leticia-aparecida-cardoso/',
  github: 'https://github.com/LeticiaCardos0',
  githubLabel: 'github.com/LeticiaCardos0',
};

export const FOOTER_TEXT = `© ${new Date().getFullYear()} ${SITE_NAME}. Todos os direitos reservados.`;