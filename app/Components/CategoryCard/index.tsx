import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  productCount: number;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  productCount,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-80 w-64 overflow-hidden rounded-2xl bg-size-[100%] bg-center hover:bg-size-[115%] transition-[background-size] duration-300"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-dark_Lapis via-dark_Lapis/70 to-transparent transition-opacity " />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white text-right">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-1 text-sm opacity-80">{productCount} محصول</p>

        <span className="mt-4 flex gap-2 text-sm font-medium text-Gold hover:text-Turquoise">
          مشاهده همه
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
        </span>
      </div>
    </Link>
  );
}
