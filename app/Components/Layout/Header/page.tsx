import Link from 'next/link';
import { TopBar } from './Topbar/page';
import { useUIStore } from '@/store/ui.store';
import { messages } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { NavBar } from './Navbar';
import GroupIcon from './GroupIcon';
import { ShoppingBasketIcon } from 'lucide-react';

export const Header = () => {
  const { lang } = useUIStore();
  const t = messages[lang];
  const Titer = t.Header.brand.split(' ');

  return (
    <header className="flex flex-col items-center justify-center w-full sticky top-0 z-50 bg-zinc-100 shadow-md">
      <TopBar />
      <main className="container py-2 px-5 hidden lg:flex  justify-between items-center">
        <Link className="flex flex-col  text-3xl" href={'/'}>
          <div className="flex">
            <span className="text-Gold">{Titer[0]}</span>
            <span className="text-Turquoise">{Titer[1]}</span>
          </div>
          <span className="text-lg font-bold text-Lapis mx-auto">
            {lang === 'fa' ? 'GoharSaan' : 'گوهرسان'}
          </span>
        </Link>
        <NavBar />
        <div className="flex justify-evenly w-40">
          <GroupIcon />
          <LanguageSwitcher />
        </div>
      </main>
      {/* {header for mobile} */}
      <main className="flex lg:hidden w-full top-0 z-50 px-10 py-2 justify-between items-center bg-zinc-100 shadow-md">
        <div className="w-32">#</div>
        <Link className="flex flex-col  text-3xl" href={'/'}>
          <div className="flex">
            <span className="text-Gold">{Titer[0]}</span>
            <span className="text-Turquoise">{Titer[1]}</span>
          </div>
          <span className="text-lg font-bold text-Lapis mx-auto">
            {lang === 'fa' ? 'GoharSaan' : 'گوهرسان'}
          </span>
        </Link>
        <div className="flex gap-5 items-center w-32">
          <LanguageSwitcher />
          <ShoppingBasketIcon />
        </div>
      </main>
    </header>
  );
};
