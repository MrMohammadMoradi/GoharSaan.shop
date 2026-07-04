import Logout from '@/components/Logout';
import Link from 'next/link';

const CustomerDashboard = () => {
  return (
    <div className="flex h-[680px]">
      <aside className="w-80 h-full py-10 px-5">
        <nav className="flex h-full justify-start items-center flex-col py-5 bg-Cream w-full rounded-xl gap-5">
          <Link
            className="px-10 py-2 w-60 text-center hover:shadow-xl rounded-2xl cursor-pointer transition-shadow duration-200 hover:text-Turquoise hover:bg-dark_Lapis shadow"
            href={'/dashboard'}
          >
            پنل کاربری
          </Link>
          <Link
            className="px-10 py-2 w-60 text-center hover:shadow-xl rounded-2xl cursor-pointer transition-shadow duration-200 hover:text-Turquoise hover:bg-dark_Lapis shadow"
            href={'/dashboard/orders'}
          >
            سفارشات
          </Link>
          <Link
            className="px-10 py-2 w-60 text-center hover:shadow-xl rounded-2xl cursor-pointer transition-shadow duration-200 hover:text-Turquoise hover:bg-dark_Lapis shadow"
            href={'/dashboard/favorite_products'}
          >
            مورد علاقه
          </Link>
          <Link
            className="px-10 py-2 w-60 text-center hover:shadow-xl rounded-2xl cursor-pointer transition-shadow duration-200 hover:text-Turquoise hover:bg-dark_Lapis shadow"
            href={'/dashboard/reviews_comments'}
          >
            دیدگاه ها و پرسش ها
          </Link>
          <Link
            className="px-10 py-2 w-60 text-center hover:shadow-xl rounded-2xl cursor-pointer transition-shadow duration-200 hover:text-Turquoise hover:bg-dark_Lapis shadow"
            href={'/dashboard/address'}
          >
            آدرس ها
          </Link>
          <Link
            className="px-10 py-2 w-60 text-center hover:shadow-xl rounded-2xl cursor-pointer transition-shadow duration-200 hover:text-Turquoise hover:bg-dark_Lapis shadow"
            href={'/dashboard/account_info'}
          >
            اطلاعات حساب
          </Link>
          <Logout userId={1} />
        </nav>
      </aside>
    </div>
  );
};

export default CustomerDashboard;
