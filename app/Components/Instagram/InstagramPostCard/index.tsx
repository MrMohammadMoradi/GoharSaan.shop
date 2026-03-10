import { HeartIcon, MessageCircleIcon } from 'lucide-react';
import Link from 'next/link';

interface InstagramPostCardProps {
  postLink: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

const InstagramPostCard = ({
  postLink,
  imageUrl,
  caption,
  likes,
  comments,
}: InstagramPostCardProps) => {
  return (
    <Link
      href={postLink}
      className="relative size-80  border border-Gold rounded-xl overflow-hidden group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-dark_Lapis/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute hidden group-hover:flex flex-col justify-center top-5 left-2.5 w-72 duration-300 z-20 text-white">
        <p className="text-3xl py-10">{caption}</p>
        <div className="flex justify-evenly">
          <div className="">
            <span>{likes}</span>
            <HeartIcon />
          </div>
          <div className="">
            <span>{comments}</span>
            <MessageCircleIcon />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InstagramPostCard;
