import type { Lang } from './i18n/translations';

export const site = {
  name: 'João Vinícius Hinkeldey Mota',
  email: 'joaovhmota@gmail.com',
  linkedin: 'linkedin.com/in/joaovhmota',
  linkedinUrl: 'https://www.linkedin.com/in/joaovhmota',
  location: 'Pomerode, SC',
  resume: {
    'pt-BR': 'https://storage.joaovhmota.dev/Curr%C3%ADculo%20-%20Jo%C3%A3o%20V.%20H.%20Mota%20-%20Vers%C3%A3o%20portuguesa.pdf',
    'en-US': 'https://storage.joaovhmota.dev/Curriculum%20-%20Jo%C3%A3o%20V.%20H.%20Mota%20-%20English%20version.pdf',
  } satisfies Record<Lang, string>,
} as const;