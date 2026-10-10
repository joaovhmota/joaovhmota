import type { SectionId } from '../sections';

export type Lang = 'pt-BR' | 'en-US';

export interface Role {
  company: string;
  role: string;
  period: string;
  highlight?: boolean;
  bullets: string[];
}

export interface Locale {
  nav: Record<SectionId, string>;
  hero: { subtitle: string; resume: string };
  about: { label: string; title: string; text: string };
  skills: {
    label: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  experience: { label: string; title: string; roles: Role[] };
  contact: { label: string; title: string; email: string; linkedin: string };
  footer: { switcher: string };
}

export const translations: Record<Lang, Locale> = {
  'pt-BR': {
    nav: { sobre: 'Sobre', skills: 'Skills', experiencia: 'Experiência', contato: 'Contato' },
    hero: { subtitle: 'DevOps Analyst | SRE & Engenharia de Plataforma', resume: 'Baixar currículo' },
    about: {
      label: 'Sobre',
      title: 'Da aplicação à plataforma.',
      text: 'Comecei minha carreira como desenvolvedor full-stack, trabalhando com C#, .NET, ASP.NET MVC, JavaScript, Vue.js, React e SQL com Oracle. Construí sistemas internos e integrações bancárias, e foi nesse caminho que me apaixonei por automação e infraestrutura. Hoje atuo com DevOps: containers com Docker e Kubernetes, pipelines de CI/CD no Azure DevOps, monitoramento com Prometheus, Grafana, PRTG e ElasticSearch, e cloud na Oracle Cloud Infrastructure (OCI). O que mais gosto é transformar processos manuais em fluxos confiáveis.',
    },
    skills: {
      label: 'Skills',
      title: 'Stack',
      groups: [
        { title: 'Cloud & Containers', items: ['Oracle Cloud Infrastructure (OCI)', 'Kubernetes', 'Docker'] },
        { title: 'IaC & Entrega', items: ['Terraform', 'Azure DevOps (Boards, Repos, Pipelines, Artifacts)', 'CI/CD', 'GMUDs'] },
        { title: 'Observabilidade', items: ['Prometheus', 'Grafana', 'Zabbix', 'PRTG', 'ElasticSearch'] },
        { title: 'Base de desenvolvimento', items: ['C# / .NET / ASP.NET MVC', 'TypeScript / React / Vue.js', 'SQL / Oracle', 'React Native'] },
      ],
    },
    experience: {
      label: 'Experiência',
      title: 'Trajetória',
      roles: [
        {
          company: 'Quick Soft Tecnologia',
          role: 'Analista de DevOps Júnior',
          period: 'mar 2026 · Atual',
          highlight: true,
          bullets: [
            'Containerização e orquestração com Docker e Kubernetes',
            'Automação de pipelines CI/CD no Azure DevOps',
            'Observabilidade com Prometheus, Grafana, PRTG e Zabbix',
            'Gestão de infraestrutura em Oracle Cloud Infrastructure (OCI)',
            'Apoio a times de desenvolvimento no troubleshooting de infra e pipelines',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Desenvolvedor de Software Pleno',
          period: 'nov 2025 · mar 2026',
          bullets: [
            'Full-stack com C#, .NET, ASP.NET MVC, JavaScript, Vue.js, ReactJS e SQL/Oracle',
            'Integrações bancárias: arquivos de remessa/retorno e conciliação financeira',
            'Code review e ferramentas internas para otimizar o workflow do time',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Desenvolvedor de Software Júnior',
          period: 'jan 2023 · nov 2025',
          bullets: [
            'Desenvolvimento full-stack de sistemas internos e integrações bancárias',
            'Integração de sistemas para automatizar fluxos de dados',
            'GMUDs e melhoria contínua de performance e integridade de dados',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Aprendiz de Desenvolvedor de Software',
          period: 'jun 2022 · jan 2023',
          bullets: [
            'Primeira experiência profissional: ferramentas internas e produtos para clientes',
            'APIs, OOP, Design Patterns e Scrum com Git e Azure DevOps',
          ],
        },
        {
          company: 'JMA Tecnologia LTDA',
          role: 'Desenvolvedor Mobile (Freelancer)',
          period: 'jul 2025 · nov 2025',
          bullets: [
            'Manutenção e evolução de dois apps mobile em React Native',
            'Correção de bugs, novas features e melhoria de UI/UX, 100% remoto',
          ],
        },
      ],
    },
    contact: {
      label: 'Contato',
      title: 'Vamos conversar.',
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    footer: { switcher: 'Idioma' },
  },
  'en-US': {
    nav: { sobre: 'About', skills: 'Skills', experiencia: 'Experience', contato: 'Contact' },
    hero: { subtitle: 'DevOps Analyst | SRE & Platform Engineering', resume: 'Download resume' },
    about: {
      label: 'About',
      title: 'From application to platform.',
      text: 'I started my career as a full-stack developer, working with C#, .NET, ASP.NET MVC, JavaScript, Vue.js, React and SQL with Oracle. I built internal systems and banking integrations, and along the way I fell in love with automation and infrastructure. Today I work with DevOps: containers with Docker and Kubernetes, CI/CD pipelines on Azure DevOps, monitoring with Prometheus, Grafana, PRTG and ElasticSearch, and cloud on Oracle Cloud Infrastructure (OCI). What I enjoy most is turning manual processes into reliable workflows.',
    },
    skills: {
      label: 'Skills',
      title: 'Stack',
      groups: [
        { title: 'Cloud & Containers', items: ['Oracle Cloud Infrastructure (OCI)', 'Kubernetes', 'Docker'] },
        { title: 'IaC & Delivery', items: ['Terraform', 'Azure DevOps (Boards, Repos, Pipelines, Artifacts)', 'CI/CD', 'GMUDs'] },
        { title: 'Observability', items: ['Prometheus', 'Grafana', 'Zabbix', 'PRTG', 'ElasticSearch'] },
        { title: 'Development background', items: ['C# / .NET / ASP.NET MVC', 'TypeScript / React / Vue.js', 'SQL / Oracle', 'React Native'] },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Journey',
      roles: [
        {
          company: 'Quick Soft Tecnologia',
          role: 'Junior DevOps Analyst',
          period: 'Mar 2026 · Present',
          highlight: true,
          bullets: [
            'Containerization and orchestration with Docker and Kubernetes',
            'CI/CD pipeline automation with Azure DevOps',
            'Observability with Prometheus, Grafana, PRTG and Zabbix',
            'Infrastructure management on Oracle Cloud Infrastructure (OCI)',
            'Supporting dev teams with infrastructure and pipeline troubleshooting',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Mid-level Software Developer',
          period: 'Nov 2025 · Mar 2026',
          bullets: [
            'Full-stack with C#, .NET, ASP.NET MVC, JavaScript, Vue.js, ReactJS and SQL/Oracle',
            'Banking integrations: remittance/return files and financial reconciliation',
            'Code review and internal tools to optimize team workflow',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Junior Software Developer',
          period: 'Jan 2023 · Nov 2025',
          bullets: [
            'Full-stack development of internal systems and banking integrations',
            'System integration to automate data flows',
            'Change requests (GMUDs) and continuous improvement of performance and data integrity',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Software Developer Intern',
          period: 'Jun 2022 · Jan 2023',
          bullets: [
            'First professional experience: internal tools and client-facing products',
            'APIs, OOP, Design Patterns and Scrum with Git and Azure DevOps',
          ],
        },
        {
          company: 'JMA Tecnologia LTDA',
          role: 'Mobile Developer (Freelancer)',
          period: 'Jul 2025 · Nov 2025',
          bullets: [
            'Maintenance and evolution of two mobile apps in React Native',
            'Bug fixes, new features and UI/UX improvements, 100% remote',
          ],
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's talk.",
      email: 'Email',
      linkedin: 'LinkedIn',
    },
    footer: { switcher: 'Language' },
  },
};

export type Translations = Locale;