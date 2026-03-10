'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product_id: string;
  product_name: string;
  product_image_url: string;
  product_description: string;
  product_price: number;
  product_category: string;
  product_offer_percent: number;
  product_popularity: number;
  product_adding_date: string;
}

const ProductCard = ({
  product_id,
  product_name,
  product_image_url,
  product_description,
  product_price,
  product_category,
  product_offer_percent,
  product_popularity,
  product_adding_date,
}: ProductCardProps) => {
  const handleAddProductToCart = () => {
    console.log(
      product_id,
      product_name,
      product_category,
      product_adding_date,
      product_popularity,
    );
  };

  return (
    <div className="flex flex-col gap-5 w-60 lg:w-80 h-96 border-2 border-Gold bg-Cream rounded-xl text-dark_Lapis">
      <div className="relative w-full h-60">
        <Image src={product_image_url} className="rounded-t-xl" fill alt="" />
      </div>
      <Link
        href={'product/' + product_id.toString()}
        className="flex flex-col px-5"
      >
        <h4 className="font-bold">{product_name}</h4>
        <p className="text-sm">{product_description}</p>
        <div className="flex py-2 justify-evenly">
          <span className="">price :</span>
          <span className="">{product_price}</span>
        </div>
      </Link>
      <Button
        className="bg-dark_Lapis hover:bg-Turquoise text-Gold hover:text-dark_Lapis cursor-pointer"
        onClick={handleAddProductToCart}
      >
        by the product
      </Button>
    </div>
  );
};

export default ProductCard;
