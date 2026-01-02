import Link from 'next/link';
import { TopBar } from './Topbar/page';
import { useUIStore } from '@/store/ui.store';
import { messages } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { NavBar } from './Navbar';
import GroupIcon from './GroupIcon';

export const Header = () => {
  const { lang } = useUIStore();
  const t = messages[lang];

  const Titer = t.Header.brand.split(' ');

  return (
    <header className="flex flex-col items-center justify-center w-full sticky top-0 z-50 bg-zinc-100 shadow-md">
      <TopBar />
      <main className="container h-15 px-5 flex justify-between items-center">
        <div className="">
          <Link className="flex text-3xl" href={'/'}>
            <span className="text-Gold">{Titer[0]}</span>
            <span className="text-Turquoise">{Titer[1]}</span>
          </Link>
        </div>
        <NavBar />
        <div className="flex justify-evenly w-40">
          <GroupIcon />
          <LanguageSwitcher />
        </div>
      </main>
    </header>
  );
};
