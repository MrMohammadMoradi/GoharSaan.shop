import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface OrderCardProps {
  order_id: number;
  order_date: string;
  tracking_order_code: number;
  order_price: number;
  product_order_image: string[] | StaticImageData[];
}

const OrderCard = ({
  order_id,
  order_date,
  tracking_order_code,
  order_price,
  product_order_image,
}: OrderCardProps) => {
  return (
    <Link
      href={'/dashboard/orders/' + order_id.toString()}
      className="flex flex-col w-full gap-5"
    >
      <div className="flex p-5 gap-2">
        <span className="">order date :{order_date}</span>-
        <span className="">order tr code :{tracking_order_code}</span>-
        <span className="">price :{order_price}</span>
      </div>
      <div className="py-2 px-5 flex gap-5 border-y">
        {product_order_image.map((url, index) => (
          <div className="relative size-36" key={index}>
            <Image src={url} fill alt={'image for order : ' + order_id} />
          </div>
        ))}
      </div>
      <Link
        href={'/about-us'}
        className="z-10 px-8 py-2 text-Turquoise border-b"
      >
        see factor
      </Link>
    </Link>
  );
};

export default OrderCard;
