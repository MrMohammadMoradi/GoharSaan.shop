import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  dir: 'rtl' | 'ltr';
  title: string;
  description: string;
  offerPercent: number;
  image: string;
  link: string;
}

const Banner = ({
  dir,
  title,
  description,
  offerPercent,
  image,
  link,
}: BannerProps) => {
  return (
    <div
      dir={dir}
      className="bg-dark_Lapis w-full text-Gold flex flex-col-reverse lg:flex-row justify-around items-center py-10 px-5"
    >
      <div className="flex flex-col gap-10 text-center max-w-1/2 py-10 px-5">
        <div className="">
          <h4 className="text-3xl font-bold py-5">{title}</h4>
          <p className="">{description}</p>
        </div>
        <Link href={link} className="">
          <Button className="bg-Turquoise hover:bg-Lapis cursor-pointer font-bold text-dark_Lapis hover:text-Gold">
            مشاهده محصولات بیشتر
          </Button>
        </Link>
      </div>
      <div className="relative">
        <div className="relative lg:w-[550px] lg:h-[400px] w-[400px] h-80 z-10">
          <Image className="rounded-xl" src={image} fill alt={title} />
        </div>
        {offerPercent > 0 && (
          <div className="absolute lg:-bottom-5 -bottom-1/12 right-1/3 z-20 lg:-right-1/12 rounded-xl bg-chart-1 text-center text-dark_Lapis font-bold p-5">
            <div>تخفیف ویژه تا</div>
            <div className="text-3xl ">{offerPercent}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
