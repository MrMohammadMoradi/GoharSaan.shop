import React from 'react';
import FavoriteProductsCard from './favorite_products_card';

const FavoriteProducts = () => {
  return (
    <div className="flex flex-col p-5 gap-5 w-full ">
      <h3 className="font-bold text-3xl text-Gold">FavoriteProducts</h3>
      <div className="container overflow-y-auto h-[520px] flex flex-wrap border-t border-Turquoise pt-5 w-full gap-5">
        <FavoriteProductsCard
          product_id={'12'}
          product_image="/test.png"
          product_title=" terme "
          product_price={2500}
          user_id={1234}
        />
      </div>
    </div>
  );
};

export default FavoriteProducts;
