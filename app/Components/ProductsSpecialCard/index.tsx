import AddToCart from '@/components/AddToCart';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductsSpecialCardProps {
  title: string;
  summery: string;
  offerPercent: number | null;
  productPrice: number;
  productOfferPrice: number | null;
  image: string;
  isFavorite: boolean;
  href: string;
}

const ProductsSpecialCard = ({
  title,
  summery,
  offerPercent,
  productPrice,
  productOfferPrice,
  image,
  isFavorite,
  href,
}: ProductsSpecialCardProps) => {
  const handleAddFavorite = () => {
    console.log(title);
  };
  return (
    <div className="relative">
      <Link
        href={href}
        className="flex flex-col py-5 min-w-[320px] w-[320px] bg-white rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full h-48">
            <Image src={image} fill className="object-cover" alt={title} />
          </div>
          {offerPercent && (
            <span className="absolute top-3 right-3 bg-Gold text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              %{offerPercent} تخفیف
            </span>
          )}
        </div>

        {/* Content Container */}
        <div className="p-5 flex flex-col gap-3 grow">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl text-Lapis font-bold">{title}</h4>
            <p className="text-sm text-dark_Lapis/75">{summery} ...</p>
          </div>

          {/* Price Section */}
          <div className="flex flex-col gap-2 mt-auto">
            <div className="flex items-center gap-3">
              <span
                className={`font-bold text-lg ${
                  productOfferPrice
                    ? 'text-dark_Lapis/50 line-through text-base'
                    : 'text-Lapis'
                }`}
              >
                {productPrice.toLocaleString()} تومان
              </span>
            </div>
            <div className="h-10">
              {productOfferPrice && (
                <span className="font-bold text-xl text-Lapis">
                  {productOfferPrice.toLocaleString()} تومان
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="w-full absolute bottom-0 right-1/4 z-10">
        <AddToCart product_name={title} text={'افزودن به سبد خرید'} />
      </div>
      <button
        className={`absolute cursor-pointer top-3 left-3 ${!isFavorite ? 'text-Persian-Red hover:text-Cream' : 'text-Cream hover:text-Persian-Red'}`}
        onClick={handleAddFavorite}
      >
        <HeartIcon
          size={28}
          className={`${!isFavorite ? 'fill-Persian-Red hover:fill-Cream' : 'fill-Cream hover:fill-Persian-Red'}`}
        />
      </button>
    </div>
  );
};

export default ProductsSpecialCard;
