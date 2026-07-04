import LoginForm from '@/components/Form/LoginForm';
import Image from 'next/image';

const LoginPage = () => {
  {
    true ? 'dashboard' : 'loginpage';
  }
  return (
    <div className="w-full relative mx-auto p-10 flex flex-col justify-start gap-10 lg:flex-row">
      <LoginForm />
      <Image src={'/test.png'} fill alt="" className="rounded-sm" />
    </div>
  );
};

export default LoginPage;
