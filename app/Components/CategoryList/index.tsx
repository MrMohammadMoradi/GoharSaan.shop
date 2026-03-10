import CategoryCard from '../CategoryCard';

const CategoryList = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10 px-5">
      <h3 className="font-bold text-4xl text-Lapis">دسته‌بندی محصولات</h3>
      <p className="text-Gold font-bold pb-5">
        مجموعه‌های منحصر به فرد گوهرسان
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
        <CategoryCard
          title="فلزکاری"
          productCount={62}
          image="test.png"
          href="/fa/shop/metal"
        />
      </div>
    </div>
  );
};

export default CategoryList;
