import AddToCart from '@/components/AddToCart';
import RemoveFromFavorite from '@/components/RemoveFromFavorite';
import { HeartOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FavoriteProductsCardProps {
  product_id: string;
  product_image: string;
  product_title: string;
  product_price: number;
  user_id: number;
}

const FavoriteProductsCard = ({
  product_id,
  product_image,
  product_title,
  product_price,
  user_id,
}: FavoriteProductsCardProps) => {
  return (
    <div className="flex border h-[242px] rounded-xl hover:shadow-xl">
      <Link
        href={`/product/${product_id}`}
        className="relative w-44 h-60 cursor-pointer"
      >
        <Image
          className="rounded-s-xl"
          src={product_image}
          fill
          alt={product_title}
        />
      </Link>
      <div className="w-40 h-60 py-5 flex flex-col gap-5 items-center justify-between">
        <Link href={`/product/${product_id}`} className="cursor-pointer">
          <h4 className="">{product_title}</h4>
          <p className="">{product_price}</p>
        </Link>
        <div className="flex w-full items-center justify-evenly">
          <AddToCart text={''} product_name={product_id} />
          <RemoveFromFavorite product_id={product_id} user_id={user_id} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProductsCard;
