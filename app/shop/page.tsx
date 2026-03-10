import ProductCard from '../Components/Products';
import FilterProducts from './Filter';
import SortingProducts from './Sorting';

const Shop = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="container flex gap-5 px-5 py-5 mx-auto ">
        <FilterProducts />
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-5 w-full py-2 px-5 border-b-2 border-dark_Lapis">
            {/* <span className="">
              مرتب سازی براساس : 
            </span> */}
            <SortingProducts />
          </div>
          <div className="w-full flex flex-col justify-center md:flex-row gap-5 flex-wrap p-5">
            <ProductCard
              product_id="01"
              product_name="product name"
              product_description="description for product"
              product_image_url="/test.png"
              product_price={25000000}
              product_category="carpet"
              product_popularity={4.5}
              product_offer_percent={20}
              product_adding_date={'1404.05.12'}
            />
            <ProductCard
              product_id="02"
              product_name="product name"
              product_description="description for product"
              product_image_url="/test.png"
              product_price={25000000}
              product_category="carpet"
              product_popularity={4.6}
              product_offer_percent={20}
              product_adding_date={'1404.05.12'}
            />
            <ProductCard
              product_id="03"
              product_name="product name"
              product_description="description for product"
              product_image_url="/test.png"
              product_price={25000000}
              product_category="stone"
              product_popularity={4.8}
              product_offer_percent={20}
              product_adding_date={'1404.05.12'}
            />
            <ProductCard
              product_id="04"
              product_name="product name"
              product_description="description for product"
              product_image_url="/test.png"
              product_price={25000000}
              product_category="carpet"
              product_popularity={4}
              product_offer_percent={20}
              product_adding_date={'1404.05.12'}
            />
            <ProductCard
              product_id="05"
              product_name="product name"
              product_description="description for product"
              product_image_url="/test.png"
              product_price={25000000}
              product_category="metal"
              product_popularity={5}
              product_offer_percent={20}
              product_adding_date={'1404.05.12'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
