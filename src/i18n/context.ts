import { createContext } from 'react';
import type { Lang, Translations } from './translations';

export interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextValue | null>(null);