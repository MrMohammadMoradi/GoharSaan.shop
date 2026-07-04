'use client';

import Link from 'next/link';

interface LoginFormProps {
  text: string;
}

const LoginForm = () => {
  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] flex flex-col gap-10 px-5 py-10 border-2 border-Turquoise rounded-xl bg-Cream text-dark_Lapis z-10"
    >
      <h2 className="font-bold text-3xl text-Lapis py-8">
        Login to your account :
      </h2>
      <div className="flex flex-col justify-start gap-2">
        <label>number or email : </label>
        <input
          type="text"
          name="email"
          className=" px-5 py-2 outline-1 outline-Lapis bg-white rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start gap-2 active:bg-Persian-Red">
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
        <Link href={''} className="hover:text-Gold">
          forget your password ??
        </Link>
        <Link href={'/register'} className="hover:text-Gold">
          You have not account?/signin
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
