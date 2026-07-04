'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

interface LogoutProps {
  userId: number;
}

const Logout = ({ userId }: LogoutProps) => {
  const router = useRouter();

  const handleLogout = () => {
    alert('logout:' + userId);
    router.push('/');
  };

  return (
    <Button
      className="px-10 py-2 w-60 hover:shadow-xl rounded-2xl cursor-pointer transition-shadow duration-200 hover:text-white hover:bg-Persian-Red shadow"
      onClick={handleLogout}
    >
      خروج از حساب کاربری
    </Button>
  );
};

export default Logout;
