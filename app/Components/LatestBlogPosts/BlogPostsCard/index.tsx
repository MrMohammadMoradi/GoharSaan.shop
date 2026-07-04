import { ArrowLeftIcon, CalendarIcon, UserRoundIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostsCardProps {
  imageUrl: string;
  title: string;
  excerpt: string;
  postUrl: string;
  writtenBy: string;
  publishedDate: string;
}

const BlogPostsCard = ({
  imageUrl,
  excerpt,
  postUrl,
  publishedDate,
  title,
  writtenBy,
}: BlogPostsCardProps) => {
  return (
    <div className="bg-white shadow-sm hover:shadow-xl duration-300 rounded-xl text-dark_Lapis/65">
      <div className="relative w-96 h-60 overflow-hidden">
        <Image
          src={imageUrl}
          fill
          alt={title}
          className="object-cover rounded-t-lg scale-100 hover:scale-105 duration-300"
        />
      </div>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex text-sm gap-5 border-b-2 border-b-Gold">
          <div className="flex">
            <CalendarIcon size={16} />
            <p className="">{publishedDate}</p>
          </div>
          <div className="flex">
            <UserRoundIcon size={16} />
            <p className="">{writtenBy}</p>
          </div>
        </div>
        <div className="">
          <Link href={postUrl}>
            <h4 className="py-2 text-3xl text-dark_Lapis hover:text-Turquoise duration-300">
              {title}
            </h4>
          </Link>
          <p className="">{excerpt}</p>
        </div>

        <Link
          href={postUrl}
          className="flex items-center gap-0.5 text-Lapis hover:text-Gold"
        >
          read more
          <ArrowLeftIcon size={18} />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostsCard;
