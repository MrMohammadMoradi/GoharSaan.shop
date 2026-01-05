import Telegram from '@/public/Icons/Telegram';
import { InstagramIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SocialNetworkIcons = () => {
  return (
    <div className="flex flex-row w-full justify-center pt-10 gap-5">
      <Link
        href={''}
        className="bg-dark_Lapis flex justify-center items-center rounded-full text-Gold size-10"
      >
        <InstagramIcon size={34} />
      </Link>
      <Link
        href={''}
        className=" flex justify-center items-center rounded-full text-Gold size-10"
      >
        <Telegram />
      </Link>
      <Link
        href={''}
        className="bg-dark_Lapis flex justify-center items-center rounded-full text-Gold size-10"
      >
        <InstagramIcon size={34} />
      </Link>
      <Link
        href={''}
        className="bg-dark_Lapis flex justify-center items-center rounded-full text-Gold size-10"
      >
        <InstagramIcon size={34} />
      </Link>
    </div>
  );
};

export default SocialNetworkIcons;
