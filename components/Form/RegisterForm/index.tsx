'use client';

import { LogInIcon } from 'lucide-react';
import Link from 'next/link';

const RegisterForm = () => {
  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] flex flex-col gap-10 px-5 py-10 border-2 border-Turquoise rounded-xl bg-Cream text-dark_Lapis z-10"
    >
      <div className="flex flex-col gap-2 py-8">
        <LogInIcon className="mx-auto" />
        <h2 className="font-bold text-3xl text-Lapis">
          Register your account :
        </h2>
      </div>
      <div className="flex flex-col justify-start gap-2">
        <label>number or email : </label>
        <input
          type="text"
          name="email"
          className=" px-5 py-2 outline-1 outline-Lapis bg-white rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <label> password : </label>
        <input
          type="password"
          name="password"
          className=" px-5 py-2 outline-1 outline-Lapis bg-white rounded-md"
        />
      </div>
      <button className="bg-Lapis text-Cream cursor-pointer px-5 py-2 hover:text-Gold ">
        submit
      </button>
      <div className="flex justify-between">
        <Link href={'/'} className="hover:text-Gold">
          forget your password ??
        </Link>
        <Link href={'/login'} className="hover:text-Gold">
          You have account?/login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
