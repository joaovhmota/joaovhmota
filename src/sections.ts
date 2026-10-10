export const SECTION_ID = {
  about: 'sobre',
  skills: 'skills',
  experience: 'experiencia',
  contact: 'contato',
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];