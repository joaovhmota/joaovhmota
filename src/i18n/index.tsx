import { useCallback, useEffect, useMemo, useState } from 'react';
import { translations, type Lang } from './translations';
import { I18nContext } from './context';
import type { ReactNode } from 'react';

const STORAGE_KEY = 'lang';

function getInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt-BR' || stored === 'en-US') return stored;
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}