import type { SectionId } from '../sections';

export type Lang = 'pt-BR' | 'en-US';

export interface Role {
  company: string;
  role: string;
  period: string;
  highlight?: boolean;
  bullets: string[];
}

export interface Fact {
  label: string;
  value: string;
}

export interface Locale {
  nav: Record<SectionId, string>;
  hero: { eyebrow: string; subtitle: string; resume: string; meta: string[] };
  about: { label: string; title: string; text: string; facts: Fact[] };
  skills: {
    label: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  experience: { label: string; title: string; roles: Role[] };
  project: {
    label: string;
    title: string;
    lead: string;
    name: string;
    description: string;
    stack: string[];
    link: string;
  };
  contact: { label: string; title: string; email: string; linkedin: string; note: string };
  footer: { switcher: string };
}

export const translations: Record<Lang, Locale> = {
  'pt-BR': {
    nav: { sobre: 'Sobre', skills: 'Skills', experiencia: 'Experiência', projeto: 'Projeto', contato: 'Contato' },
    hero: {
      eyebrow: 'Analista DevOps / SRE / Engenharia de Plataforma',
      subtitle: 'Eu construo e mantenho a parte do sistema que ninguém percebe até ela parar.',
      resume: 'Baixar currículo',
      meta: ['Pomerode, SC', 'Quick Soft Tecnologia'],
    },
    about: {
      label: 'Sobre',
      title: 'Da tela ao pipeline.',
      text: 'Comecei escrevendo tela. Hoje escrevo pipeline. O que mudou foi o alcance, não o vício: ver o negócio rodar sem ninguém apertando botão. Passei por C#, .NET, Vue e React até chegar em containers, Terraform e observabilidade, e ali encontrei o trabalho que faço de olho fechado: transformar processo manual em fluxo confiável, documentado o suficiente para o próximo não sofrer.',
      facts: [
        { label: 'Base', value: 'Pomerode, SC' },
        { label: 'Hoje', value: 'Analista DevOps na Quick Soft' },
        { label: 'Desde', value: '2022 em software' },
      ],
    },
    skills: {
      label: 'Skills',
      title: 'O que eu coloco em produção.',
      groups: [
        { title: 'Cloud & Containers', items: ['Oracle Cloud Infrastructure (OCI)', 'Kubernetes', 'Docker'] },
        { title: 'IaC & Entrega', items: ['Terraform', 'Azure DevOps (Boards, Repos, Pipelines, Artifacts)', 'CI/CD', 'GMUDs'] },
        { title: 'Observabilidade', items: ['Prometheus', 'Grafana', 'Zabbix', 'PRTG', 'ElasticSearch'] },
        { title: 'Base de desenvolvimento', items: ['C# / .NET / ASP.NET MVC', 'TypeScript / React / Vue.js', 'SQL / Oracle', 'React Native'] },
      ],
    },
    experience: {
      label: 'Experiência',
      title: 'O caminho até aqui.',
      roles: [
        {
          company: 'Quick Soft Tecnologia',
          role: 'Analista de DevOps Júnior',
          period: 'mar 2026 -> atual',
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
          period: 'nov 2025 -> mar 2026',
          bullets: [
            'Full-stack com C#, .NET, ASP.NET MVC, JavaScript, Vue.js, ReactJS e SQL/Oracle',
            'Integrações bancárias: arquivos de remessa/retorno e conciliação financeira',
            'Code review e ferramentas internas para otimizar o workflow do time',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Desenvolvedor de Software Júnior',
          period: 'jan 2023 -> nov 2025',
          bullets: [
            'Desenvolvimento full-stack de sistemas internos e integrações bancárias',
            'Integração de sistemas para automatizar fluxos de dados',
            'GMUDs e melhoria contínua de performance e integridade de dados',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Aprendiz de Desenvolvedor de Software',
          period: 'jun 2022 -> jan 2023',
          bullets: [
            'Primeira experiência profissional: ferramentas internas e produtos para clientes',
            'APIs, OOP, Design Patterns e Scrum com Git e Azure DevOps',
          ],
        },
        {
          company: 'JMA Tecnologia LTDA',
          role: 'Desenvolvedor Mobile (Freelancer)',
          period: 'jul 2025 -> nov 2025',
          bullets: [
            'Manutenção e evolução de dois apps mobile em React Native',
            'Correção de bugs, novas features e melhoria de UI/UX, 100% remoto',
          ],
        },
      ],
    },
    project: {
      label: 'Projeto',
      title: 'Um projeto, sem vitrine.',
      lead: 'Prefiro mostrar um do que listar dez.',
      name: 'Este site',
      description:
        'Meu laboratório público: React 19, TypeScript e teimosia com performance. Sem template, sem page builder, sem framework de UI.',
      stack: ['React 19', 'TypeScript', 'Vite', 'Cloudflare Pages'],
      link: 'Ver o código',
    },
    contact: {
      label: 'Contato',
      title: 'Tem um processo manual para matar?',
      email: 'Email',
      linkedin: 'LinkedIn',
      note: 'Respondo em português e inglês.',
    },
    footer: { switcher: 'Idioma' },
  },
  'en-US': {
    nav: { sobre: 'About', skills: 'Skills', experiencia: 'Experience', projeto: 'Project', contato: 'Contact' },
    hero: {
      eyebrow: 'DevOps Analyst / SRE / Platform Engineering',
      subtitle: 'I build and keep alive the part of the system nobody notices until it stops.',
      resume: 'Download resume',
      meta: ['Pomerode, Brazil', 'Quick Soft Tecnologia'],
    },
    about: {
      label: 'About',
      title: 'From screens to pipelines.',
      text: 'I started out writing screens. Today I write pipelines. What changed was the reach, not the itch: watching the business run without anyone pressing a button. I went through C#, .NET, Vue and React until I landed on containers, Terraform and observability, and there I found the work I do with my eyes closed: turning manual processes into reliable flows, documented well enough that the next person does not suffer.',
      facts: [
        { label: 'Base', value: 'Pomerode, Brazil' },
        { label: 'Now', value: 'DevOps Analyst at Quick Soft' },
        { label: 'Since', value: '2022 in software' },
      ],
    },
    skills: {
      label: 'Skills',
      title: 'What I put into production.',
      groups: [
        { title: 'Cloud & Containers', items: ['Oracle Cloud Infrastructure (OCI)', 'Kubernetes', 'Docker'] },
        { title: 'IaC & Delivery', items: ['Terraform', 'Azure DevOps (Boards, Repos, Pipelines, Artifacts)', 'CI/CD', 'GMUDs'] },
        { title: 'Observability', items: ['Prometheus', 'Grafana', 'Zabbix', 'PRTG', 'ElasticSearch'] },
        { title: 'Development background', items: ['C# / .NET / ASP.NET MVC', 'TypeScript / React / Vue.js', 'SQL / Oracle', 'React Native'] },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'The road so far.',
      roles: [
        {
          company: 'Quick Soft Tecnologia',
          role: 'Junior DevOps Analyst',
          period: 'Mar 2026 -> Present',
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
          period: 'Nov 2025 -> Mar 2026',
          bullets: [
            'Full-stack with C#, .NET, ASP.NET MVC, JavaScript, Vue.js, ReactJS and SQL/Oracle',
            'Banking integrations: remittance/return files and financial reconciliation',
            'Code review and internal tools to optimize team workflow',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Junior Software Developer',
          period: 'Jan 2023 -> Nov 2025',
          bullets: [
            'Full-stack development of internal systems and banking integrations',
            'System integration to automate data flows',
            'Change requests (GMUDs) and continuous improvement of performance and data integrity',
          ],
        },
        {
          company: 'Quick Soft Tecnologia',
          role: 'Software Developer Intern',
          period: 'Jun 2022 -> Jan 2023',
          bullets: [
            'First professional experience: internal tools and client-facing products',
            'APIs, OOP, Design Patterns and Scrum with Git and Azure DevOps',
          ],
        },
        {
          company: 'JMA Tecnologia LTDA',
          role: 'Mobile Developer (Freelancer)',
          period: 'Jul 2025 -> Nov 2025',
          bullets: [
            'Maintenance and evolution of two mobile apps in React Native',
            'Bug fixes, new features and UI/UX improvements, 100% remote',
          ],
        },
      ],
    },
    project: {
      label: 'Project',
      title: 'One project, no showroom.',
      lead: 'I would rather show one than list ten.',
      name: 'This site',
      description:
        'My public lab: React 19, TypeScript and stubbornness about performance. No template, no page builder, no UI framework.',
      stack: ['React 19', 'TypeScript', 'Vite', 'Cloudflare Pages'],
      link: 'Read the code',
    },
    contact: {
      label: 'Contact',
      title: 'Got a manual process to kill?',
      email: 'Email',
      linkedin: 'LinkedIn',
      note: 'I reply in Portuguese and English.',
    },
    footer: { switcher: 'Language' },
  },
};

export type Translations = Locale;
