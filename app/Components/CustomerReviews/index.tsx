import React from 'react';
import ReviewsCard from './ReviewsCard';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

const CustomerReviews = () => {
  return (
    <div className="w-full py-10 px-5 text-center">
      <h3 className="text-3xl font-bold text-Lapis">
        Customer Reviews Component
      </h3>
      <p className="py-5">تجربه مشتریان ما از خرید در گوهرسان</p>
      <div className="flex flex-wrap py-10 justify-center gap-10">
        <ReviewsCard
          avatar="/test.png"
          customer="Mohammad Moradi"
          reviewText="خدمات پس از فروش عالی و ارسال سریع. بشقاب مسی که سفارش دادم دقیقاً همان چیزی بود که می‌خواستم. قطعاً دوباره خرید خواهم کرد."
          date="1404/09/21"
        />
        <ReviewsCard
          avatar="/test.png"
          customer="Mohammad Moradi"
          reviewText="خدمات پس از فروش عالی و ارسال سریع. بشقاب مسی که سفارش دادم دقیقاً همان چیزی بود که می‌خواستم. قطعاً دوباره خرید خواهم کرد."
          date="1404/09/21"
        />
        <ReviewsCard
          avatar="/test.png"
          customer="Mohammad Moradi"
          reviewText="خدمات پس از فروش عالی و ارسال سریع. بشقاب مسی که سفارش دادم دقیقاً همان چیزی بود که می‌خواستم. قطعاً دوباره خرید خواهم کرد."
          date="1404/09/21"
        />
      </div>
      <Link
        href={'/reviews-page'}
        className="flex justify-center items-center gap-1 text-Lapis hover:text-Gold"
      >
        مشاهده همه نظرات
        <ArrowLeftIcon size={18} />
      </Link>
    </div>
  );
};

export default CustomerReviews;
