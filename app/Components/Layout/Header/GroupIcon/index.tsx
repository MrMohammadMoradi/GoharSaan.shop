import { Heart, ShoppingBag, UserRound } from 'lucide-react';
import Link from 'next/link';

const GroupIcon = () => {
  return (
    <div className="flex items-center gap-1 pe-2">
      <Link href={'/login'} className="">
        <UserRound
          className="size-5 text-Lapis hover:text-Gold transition-colors"
          size={26}
          strokeWidth={2.25}
          absoluteStrokeWidth
        />
      </Link>
      <Link href={''} className="">
        <Heart
          className="size-5 text-Lapis hover:text-Persian-Red transition-colors"
          size={24}
          strokeWidth={2.25}
          absoluteStrokeWidth
        />
      </Link>
      <Link href={''} className="">
        <ShoppingBag
          className="size-5 text-Lapis hover:text-Gold transition-colors"
          size={24}
          strokeWidth={2.25}
          absoluteStrokeWidth
        />
      </Link>
    </div>
  );
};

export default GroupIcon;
