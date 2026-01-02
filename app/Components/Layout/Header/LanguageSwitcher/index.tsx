'use client';

import { useUIStore } from '@/store/ui.store';

export default function LanguageSwitcher() {
  const { lang, setLang } = useUIStore();

  return (
    <div className="flex items-center border border-Gold rounded-xl p-1 gap-1">
      <button
        onClick={() => setLang('fa')}
        className={`hover:cursor-pointer px-2 py-1 rounded-lg text-sm transition
          ${lang === 'fa' ? 'bg-Lapis text-white' : 'text-lapis'}
        `}
      >
        FA
      </button>
      <span className="text-Gold">|</span>
      <button
        onClick={() => setLang('en')}
        className={`hover:cursor-pointer px-2 py-1 rounded-lg text-sm transition
          ${lang === 'en' ? 'bg-Lapis text-white' : 'text-lapis'}
        `}
      >
        EN
      </button>
    </div>
  );
}
