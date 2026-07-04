import Image from 'next/image';
import Link from 'next/link';

const IntroductionBanner = () => {
  return (
    <div className="w-full text-center flex flex-col-reverse lg:flex-row gap-5 justify-evenly items-center my-5 py-10 px-5 bg-Cream lg:text-start">
      <div className="relative w-96 h-72 lg:w-[500px] lg:h-[400px] z-10 overflow-hidden">
        <Image
          src={'/test.png'}
          fill
          alt=""
          className="rounded-xl scale-100 hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col gap-5 w-full lg:w-1/2">
        <div className="">
          <span className="text-Turquoise px-5 py-2 bg-Turquoise/20 rounded-2xl">
            درباره گوهرسان
          </span>
        </div>
        <div className="flex font-bold flex-col sm:flex-row justify-center lg:justify-start text-3xl text-Lapis">
          <h5 className="pe-1">هنر ایرانی رابه جهان</h5>
          <h5 className="text-Gold">معرفی می‌کنیم</h5>
        </div>
        <div className="text-sm text-dark_Lapis/75">
          <p className="">
            گوهرسان با بیش از ۱۵ سال تجربه در زمینه تولید و عرضه صنایع دستی
            ایرانی، به عنوان یکی از معتبرترین برندهای این حوزه شناخته می‌شود. ما
            با همکاری بیش از ۱۰۰ هنرمند و صنعتگر ماهر در سراسر ایران، محصولاتی
            با کیفیت و اصالت بی‌نظیر ارائه می‌دهیم.
          </p>
          <p className="">
            هر محصول گوهرسان داستانی از هنر، فرهنگ و تاریخ ایران زمین را روایت
            می‌کند. ما متعهد به حفظ و ترویج میراث فرهنگی ایران و معرفی آن به
            نسل‌های آینده هستیم.
          </p>
        </div>
        <div className="flex font-bold w-full justify-evenly gap-10 text-center py-5">
          <div className="">
            <p className="text-3xl text-Turquoise">+۵۰۰</p>
            <p className="text-Gold">محصول</p>
          </div>
          <div className="">
            <p className="text-3xl text-Turquoise">+۱۰۰</p>
            <p className="text-Gold">هنرمند</p>
          </div>
          <div className="">
            <p className="text-3xl text-Turquoise">+۲۰۰۰</p>
            <p className="text-Gold">مشتری</p>
          </div>
        </div>
        <Link
          href={'/about-us'}
          className="mx-auto bg-dark_Lapis px-5 py-2 w-40 text-center rounded-xl text-Gold hover:text-Turquoise "
        >
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
};

export default IntroductionBanner;
