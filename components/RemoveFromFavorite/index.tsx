'use client';
import { HeartOffIcon } from 'lucide-react';

interface RemoveFromFavoriteProps {
  product_id: string;
  user_id: number;
}

const RemoveFromFavorite = ({
  product_id,
  user_id,
}: RemoveFromFavoriteProps) => {
  const handleRemoveProductFromFavoriteList = () => {
    console.log(product_id, user_id);
  };
  return (
    <button
      onClick={handleRemoveProductFromFavoriteList}
      className="flex justify-center items-center rounded-full size-10 border"
    >
      <HeartOffIcon className=" cursor-pointer size-10 text-Persian-Red hover:text-black transform-fill duration-300" />
    </button>
  );
};

export default RemoveFromFavorite;
