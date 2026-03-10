import AddToCart from '@/components/AddToCart';
import Image from 'next/image';
import Link from 'next/link';

interface Best_sellingProductCardProps {
  product_image: string;
  product_link: string;
  product_name: string;
  product_description: string;
  product_price: number;
}

const Best_sellingProductCard = ({
  product_image,
  product_link,
  product_name,
  product_description,
  product_price,
}: Best_sellingProductCardProps) => {
  return (
    <div className="flex gap-2 w-96 bg-Cream rounded-xl hover:shadow-xl duration-300">
      <Image
        className="rounded-s-xl"
        src={product_image}
        width={150}
        height={150}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <Link href={product_link}>
          <h4 className="pt-5 text-2xl font-bold text-Lapis">{product_name}</h4>
        </Link>
        <p className="font-bold text-sm text-Lapis/80">{product_description}</p>
        <div className="flex items-center px-5 gap-5">
          <div className="">
            <span className="">{product_price}</span>
            <span className="">تومان</span>
          </div>
          <AddToCart text={null} product_name={product_name} />
        </div>
      </div>
    </div>
  );
};

export default Best_sellingProductCard;
