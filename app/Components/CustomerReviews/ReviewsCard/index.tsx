import Image from 'next/image';

interface ReviewsCardProps {
  avatar: string;
  customer: string;
  reviewText: string;
  date: string;
}

const ReviewsCard = ({
  avatar,
  customer,
  reviewText,
  date,
}: ReviewsCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[400px] p-5 rounded-xl gap-2 bg-Cream text-center">
      <Image
        src={avatar}
        width={120}
        height={120}
        className="rounded-full"
        alt={customer}
      />
      <h5 className="font-bold py-2">{customer}</h5>
      <p className="text-dark_Lapis/80">{reviewText}</p>

      <p className="text-dark_Lapis/50">{date}</p>
    </div>
  );
};

export default ReviewsCard;
