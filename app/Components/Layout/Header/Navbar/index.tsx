'use client';
import { messages } from '@/lib/i18n';
import { useUIStore } from '@/store/ui.store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const { lang } = useUIStore();
  const t = messages[lang];

  const pathname = usePathname();

  return (
    <nav className="">
      <ul className="flex gap-4">
        <li className="text-Turquoise hover:text-Gold transition duration-200">
          <Link
            href={'/'}
            className={`${pathname === '/' ? 'pb-0.5 text-Lapis border-b-2 border-Turquoise font-bold' : ''}`}
          >
            {t.Header.home}
          </Link>
        </li>
        <li className="text-Turquoise hover:text-Gold transition duration-200">
          <Link
            href={'/shop'}
            className={`${pathname === '/shop' ? 'pb-0.5 text-Lapis border-b-2 border-Turquoise font-bold' : ''}`}
          >
            {t.Header.shop}
          </Link>
        </li>
        <li className="text-Turquoise hover:text-Gold transition duration-200">
          <Link
            href={'/about-us'}
            className={`${pathname === '/about-us' ? 'pb-0.5 text-Lapis border-b-2 border-Turquoise font-bold' : ''}`}
          >
            {t.Header.about}
          </Link>
        </li>
        <li className="text-Turquoise hover:text-Gold transition duration-200">
          <Link
            href={'/blog'}
            className={`${pathname === '/blog' ? 'pb-0.5 text-Lapis border-b-2 border-Turquoise font-bold' : ''}`}
          >
            {t.Header.blog}
          </Link>
        </li>
        <li className="text-Turquoise hover:text-Gold transition duration-200">
          <Link
            href={'/contact-us'}
            className={`${pathname === '/contact-us' ? 'pb-0.5 text-Lapis border-b-2 border-Turquoise font-bold' : ''}`}
          >
            {t.Header.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
