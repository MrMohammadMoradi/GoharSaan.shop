import { InstagramIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import InstagramPostCard from './InstagramPostCard';

const Instagram = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-full py-10 px-5 bg-Cream my-10 text-center">
      <Link
        href={''}
        className="flex w-60 gap-5 px-5 py-2 rounded-3xl bg-dark_Lapis text-Gold hover:bg-Gold hover:text-Lapis"
      >
        <InstagramIcon />
        <span className="">@GoharSaan_offitial</span>
      </Link>
      <div className="">
        <h3 className="font-bold text-3xl text-dark_Lapis">
          ما را در اینستاگرام دنبال کنید
        </h3>
        <p className="text-lg text-dark_Lapis/75 py-5">
          آخرین محصولات و الهام‌بخشی‌های طراحی
        </p>
      </div>
      <div className="w-full flex justify-evenly items-center gap-5 flex-col lg:flex-row ">
        <InstagramPostCard
          postLink="/"
          imageUrl="/test.png"
          caption="hi to everyone"
          likes={560}
          comments={25}
        />
        <InstagramPostCard
          postLink="/"
          imageUrl="/test.png"
          caption="hi to everyone"
          likes={560}
          comments={25}
        />
        <InstagramPostCard
          postLink="/"
          imageUrl="/test.png"
          caption="hi to everyone"
          likes={560}
          comments={25}
        />
      </div>
    </div>
  );
};

export default Instagram;
