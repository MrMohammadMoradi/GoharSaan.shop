import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Lang = 'fa' | 'en';

type UIState = {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  setLang: (lang: Lang) => void;
};

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      lang: 'fa',
      dir: 'rtl',
      setLang: (lang) =>
        set({
          lang,
          dir: lang === 'fa' ? 'rtl' : 'ltr',
        }),
    }),
    {
      name: 'goharsaan-ui',
    },
  ),
);
