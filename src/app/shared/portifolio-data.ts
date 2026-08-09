import { ContactInfo, NavLink, Project, SocialLink, TechItem } from './portfolio.models';

export const SITE_NAME = 'Leticia Cardoso';
export const SITE_ROLE = 'Analista de Suporte & QA | Desenvolvedor Fullstack';

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
    'Apaixonado por tecnologia e soluções que fazem a diferença. Atuo com suporte técnico, QA e desenvolvimento de aplicações web modernas e escaláveis.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/LeticiaCardos0', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/leticia-aparecida-cardoso/', icon: 'linkedin' },
];

export const ABOUT = {
  title: 'Sobre Mim',
  text: 'Desenvolvedor Fullstack com foco em criar experiências digitais modernas, acessíveis e de alto desempenho. Gosto de transformar ideias em soluções práticas e eficientes.',
};

export const STATUS = {
  title: 'Status',
  label: 'Aprendendo Java Fullstack',
  progress: 60,
  badge: 'Front-end concluído',
};

export const LOCATION = {
  title: 'Localização',
  text: 'Brasil',
};

export const EXPERIENCE = {
  title: 'Experiência',
  chip: 'Suporte Técnico + QA',
  extra: 'Desenvolvimento Front-end',
};

export const PROJECTS: Project[] = [
  {
    id: 'futnerds',
    title: 'FUTNERDS',
    description:
      'A comunidade definitiva para jogadores de FIFA. Análises, notícias, estratégias e muito mais para elevar seu jogo.',
    image: 'assets/images/futnerds.png',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://projeto-futnerds-ng.leticiaapc06.workers.dev/',
    codeUrl: 'https://github.com/LeticiaCardos0/projeto-futnerds-ng',
  },
  {
    id: 'modular-locadora',
    title: 'MODULAR LOCADORA',
    description: 'Sistema de locadora de veículos com reservas, gestão de frota e clientes.',
    image: 'assets/images/modular-locadora.png',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://projeto-locadora-ng.leticiaapc06.workers.dev/',
    codeUrl: 'https://github.com/LeticiaCardos0/projeto-locadora-ng',
  },
];

export const TECH_FRONTEND: TechItem[] = [
  { name: 'Angular', icon: 'angular' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'Tailwind', icon: 'tailwind' },
  { name: 'PrimeNG', icon: 'primeng' },
];

export const TECH_BACKEND: TechItem[] = [
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Java', icon: 'java', inProgress: true },
  { name: 'Postman', icon: 'postman' },
];

export const CONTACT: ContactInfo = {
  email: 'leticia06@gmail,com',
  linkedin: 'https://www.linkedin.com/in/leticia-aparecida-cardoso/',
  linkedinLabel: 'linkedin.com/in/leticia-aparecida-cardoso/',
  github: 'https://github.com/LeticiaCardos0',
  githubLabel: 'github.com/LeticiaCardos0',
};

export const FOOTER_TEXT = `© ${new Date().getFullYear()} ${SITE_NAME}. Todos os direitos reservados.`;
