'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ProductsSpecialCard from '../ProductsSpecialCard';

const ProductsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft <= 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth + 10);
    }
  };

  useEffect(() => {
    checkScroll();
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // width of card + gap
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft + scrollAmount
          : scrollContainerRef.current.scrollLeft - scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="w-full bg-Cream py-8">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-3xl font-bold text-Lapis">محصولات ویژه</h3>
            <p className="text-dark_Lapis/75 text-sm mt-2">
              برگزیده های این هفته
            </p>
          </div>
          <Link href={'/'} className="">
            <span className="flex gap-2 text-sm font-medium text-dark_Lapis hover:text-Turquoise transition-colors">
              مشاهده همه
              <span className="transition-transform hover:-translate-x-1">
                ←
              </span>
            </span>
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative h-full">
          {/* Left Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all ${
              !canScrollRight
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:scale-110'
            }`}
            aria-label="اسکرول به چپ"
          >
            <svg
              className="w-6 h-6 text-Lapis"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollLeft}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all ${
              !canScrollLeft
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:scale-110'
            }`}
            aria-label="اسکرول به راست"
          >
            <svg
              className="w-6 h-6 text-Lapis"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Products Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex py-5 gap-5 overflow-x-scroll px-12 hide-scrollbar"
          >
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={2000000}
              image={'/test.png'}
              isFavorite={true}
              href={'/blog'}
            />
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={null}
              image={'/test.png'}
              isFavorite={false}
              href={'/blog'}
            />
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={null}
              image={'/test.png'}
              isFavorite={true}
              href={'/blog'}
            />
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={null}
              image={'/test.png'}
              isFavorite={true}
              href={'/blog'}
            />
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={null}
              image={'/test.png'}
              isFavorite={true}
              href={'/blog'}
            />
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={null}
              image={'/test.png'}
              isFavorite={true}
              href={'/blog'}
            />
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={null}
              image={'/test.png'}
              isFavorite={true}
              href={'/blog'}
            />
            <ProductsSpecialCard
              title={'بشقاب مسی قلمزنی'}
              summery={'بشقاب دست‌ساز با'}
              offerPercent={20}
              productPrice={2500000}
              productOfferPrice={null}
              image={'/test.png'}
              isFavorite={true}
              href={'/blog'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;
