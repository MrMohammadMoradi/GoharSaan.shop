'use client';
import { MailIcon, SendIcon } from 'lucide-react';
import { useState } from 'react';

const NewsLatter = () => {
  const [mail, setMail] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGetMail = (e: any) => {
    setMail(e.target.value);
  };
  const handleSetMail = () => {
    console.log(mail);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full text-Gold bg-dark_Lapis text-center px-5 py-10">
      <MailIcon size={80} className="text-Gold" />
      <h4 className="text-4xl font-bold">عضویت در خبر نامه</h4>
      <p className="text-xl">
        از جدیدترین محصولات، تخفیفات ویژه و مطالب آموزشی مطلع شوید.
      </p>
      <div className="flex flex-col lg:flex-row  gap-3">
        <input
          placeholder="example@mail.com"
          type="email"
          required
          name="email"
          id="email"
          value={mail}
          className="px-10 py-5 bg-Cream rounded-xl text-Lapis"
          onChange={handleGetMail}
        />
        <button
          className="flex justify-center py-2 items-center text-dark_Lapis bg-Turquoise hover:bg-Gold hover:text-white rounded-xl duration-200 px-5 cursor-pointer"
          onClick={handleSetMail}
        >
          <span>عضویت</span>
          <SendIcon />
        </button>
      </div>
      <p className="text-sm text-Gold/85">
        با عضویت در خبرنامه، شما شرایط و قوانین را می‌پذیرید
      </p>
    </div>
  );
};

export default NewsLatter;
