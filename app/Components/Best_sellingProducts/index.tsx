import Link from 'next/link';
import Best_sellingProductCard from './ProductCard';

const Best_sellingProducts = () => {
  return (
    <div className="flex flex-col py-10 px-5 gap-5 w-full justify-evenly text-center">
      <div className="">
        <h3 className="font-bold text-3xl text-Lapis">پرفروش‌ترین محصولات</h3>
        <p className="text-dark_Lapis/70 py-5">محبوب‌ترین انتخاب مشتریان</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <Best_sellingProductCard
          product_name="قالیچه دستبافت1"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="قالیچه دستبافت2"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="قالیچه دستبافت3"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="قالیچه دستبافت4"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="5قالیچه دستبافت"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="قالیچه دستبافت6"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="قالیچه دستبافت7"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="قالیچه دستبافت8"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
        <Best_sellingProductCard
          product_name="قالیچه دستبافت9"
          product_description="طرح سنتی ایرانی"
          product_image="/test.png"
          product_link="/"
          product_price={520000}
        />
      </div>
      <div className="pt-5">
        <Link
          href="/shop"
          className="cursor-pointer rounded-xl px-5 py-3 bg-dark_Lapis hover:bg-Turquoise text-Gold hover:text-dark_Lapis duration-200"
        >
          مشاهده همه موارد
        </Link>
      </div>
    </div>
  );
};

export default Best_sellingProducts;
