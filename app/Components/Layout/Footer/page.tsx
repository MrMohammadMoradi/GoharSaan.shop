import { AtSignIcon, MapPinnedIcon, PhoneCallIcon } from 'lucide-react';
import Link from 'next/link';
import SocialNetworkIcons from '../../SocialNetworkIcons';

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-Cream min-h-40 w-full pb-5 px-5">
      <div className="flex flex-wrap gap-5 justify-evenly py-10 border-b-2 border-Turquoise/75">
        <div className="flex-col p-5 lg:max-w-1/4 min-w-96 w-full">
          <div className="flex">گوهرسان</div>
          <p className="w-full">
            برند معتبر صنایع دستی و دکوراسیون لوکس ایرانی با بیش از ۱۵ سال تجربه
          </p>
          <SocialNetworkIcons />
        </div>
        <div className="flex flex-col basis-1/5 min-w-52 gap-3">
          <h3 className="font-bold text-xl text-dark_Lapis">دسترسی سریع</h3>
          <div className="flex flex-col gap-2">
            <span className="">
              <Link
                href={'/'}
                className="hover:underline py-1 text-Turquoise hover:text-Gold "
              >
                صفحه اصلی
              </Link>
            </span>
            <span className="">
              <Link
                href={'/'}
                className="hover:underline py-1 text-Turquoise hover:text-Gold "
              >
                فروشگاه
              </Link>
            </span>
            <span className="">
              <Link
                href={'/'}
                className="hover:underline py-1 text-Turquoise hover:text-Gold "
              >
                هنرمندان
              </Link>
            </span>
            <span className="">
              <Link
                href={'/'}
                className="hover:underline py-1 text-Turquoise hover:text-Gold "
              >
                بلاگ
              </Link>
            </span>
            <span className="">
              <Link
                href={'/'}
                className="hover:underline py-1 text-Turquoise hover:text-Gold "
              >
                تخفیف‌ها
              </Link>
            </span>
          </div>
        </div>
        <div className="flex-col basis-1/5 min-w-52 gap-3">
          <h3 className="font-bold text-xl text-dark_Lapis pb-2">
            خدمات مشتریان
          </h3>
          <div className="flex flex-col gap-2 text-dark_Lapis ">
            <span className="hover:text-Gold hover:underline">
              <Link href={'/'} className="">
                راهنمای خرید
              </Link>
            </span>
            <span className="hover:text-Gold hover:underline">
              <Link href={'/'} className="">
                شیوه پرداخت
              </Link>
            </span>
            <span className="hover:text-Gold hover:underline">
              <Link href={'/'} className="">
                ارسال و تحویل
              </Link>
            </span>
            <span className="hover:text-Gold hover:underline">
              <Link href={'/'} className="">
                قوانین و مقررات
              </Link>
            </span>
            <span className="hover:text-Gold hover:underline">
              <Link href={'/'} className="">
                سوالات متداول
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-row basis-1/5 w-full justify-between lg:min-w-60 lg:gap-3 lg:flex-col gap-10">
          <div className="flex flex-col w-full justify-center items-center">
            <h3 className="font-bold text-xl text-dark_Lapis">تماس با ما</h3>
            <div className="flex flex-col gap-2">
              <span className="">
                <Link href={'/'} className="flex gap-2 text-dark_Lapis/75">
                  <MapPinnedIcon className="text-Gold hover:text-dark_Lapis" />
                  <span className="">تهران، خیابان ولیعصر، پلاک ۱۲۳۴</span>
                </Link>
              </span>
              <span className="">
                <Link href={'/'} className="flex gap-2 text-dark_Lapis/75">
                  <PhoneCallIcon className="text-Gold hover:text-dark_Lapis" />
                  <span className="">۰۲۱-۱۲۳۴۵۶۷۸</span>
                </Link>
              </span>
              <span className="">
                <Link href={'/'} className="flex gap-2 text-dark_Lapis/75">
                  <AtSignIcon className="text-Gold hover:text-dark_Lapis" />
                  <span className="">info@goharsaan.com</span>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-col basis-1/5 justify-evenly items-center min-w-52 gap-3">
            <h4 className="font-bold">nemad ha</h4>
            <div className="">Enemad</div>
          </div>
        </div>
      </div>
      <div className=" pt-5">© ۱۴۰۲ گوهرسان. تمامی حقوق محفوظ است.</div>
    </footer>
  );
};
