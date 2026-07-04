'use client';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from 'lucide-react';

interface AddToCartProps {
  text?: string | null;
  product_name: string;
}
const AddToCart = ({ product_name, text }: AddToCartProps) => {
  const handleAddToCart = () => {
    console.log(product_name);
  };
  return (
    <Button
      onClick={handleAddToCart}
      className="bg-dark_Lapis hover:bg-Turquoise cursor-pointer transform-fill duration-300"
    >
      <ShoppingCartIcon size={28} />
      {text && <span className="">{text}</span>}
    </Button>
  );
};

export default AddToCart;
