import RegisterForm from '@/components/Form/RegisterForm';
import Image from 'next/image';

const RegisterPage = () => {
  return (
    <div className="w-full relative mx-auto p-10 flex flex-col justify-end gap-10 lg:flex-row">
      <RegisterForm />
      <Image src={'/test.png'} fill alt="" className="rounded-sm" />
    </div>
  );
};

export default RegisterPage;
