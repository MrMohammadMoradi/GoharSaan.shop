import { CarouselPlugin } from './Components/Carousel';
import CategoryList from './Components/CategoryList';
import ProductsCarousel from './Components/ProductsCarousel';
import Banner from './Components/Banner';
import Best_sellingProducts from './Components/Best_sellingProducts';
import IntroductionBanner from './Components/IntroductionBanner';
import CustomerReviews from './Components/CustomerReviews';
import Instagram from './Components/Instagram';
import TrustSection from './Components/TrustSection';
import LatestBlogPosts from './Components/LatestBlogPosts';
import NewsLatter from './Components/NewsLatter';

export default function Home() {
  return (
    <main className="flex flex-col gap-0.5 items-center justify-center bg-white px-5">
      <CarouselPlugin />
      <CategoryList />
      <ProductsCarousel />
      <Banner
        dir="rtl"
        title="Banner Text"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit dicta optio est quas consequuntur voluptatibus ipsum esse vitae tenetur, iure enim excepturi."
        image="/test.png"
        link="/shop"
        offerPercent={20}
      />
      <Best_sellingProducts />
      <IntroductionBanner />
      <CustomerReviews />
      <Instagram />
      <TrustSection />
      <LatestBlogPosts />
      <NewsLatter />
    </main>
  );
}
