import { Button } from '@/components/ui/button';
import OrderCard from './order_card';

const Orders = () => {
  return (
    <div className="flex flex-col gap-8 items-center p-5 border rounded-xl">
      <div className="flex w-full justify-between items-center px-5">
        <div className="">
          <h4 className="font-bold text-3xl text-Lapis py-5">
            list of your Orders
          </h4>
        </div>
        <div className="">search</div>
      </div>
      <table className="flex flex-col w-full h-[450px]">
        <thead className="flex gap-5 border-b p-5  items-center">
          <Button className="">جاری</Button>
          <Button className="">تحویل شده</Button>
          <Button className="">مرجوعی</Button>
          <Button className="">کنسل شده</Button>
        </thead>
        <tbody className=" overflow-y-scroll hide-scrollbar">
          {/* map on order-card */}
          <OrderCard
            order_id={1254}
            order_date="1404/12/01"
            order_price={211000}
            tracking_order_code={1254684}
            product_order_image={[
              '/test.png',
              '/test.png',
              '/test.png',
              '/test.png',
            ]}
          />
          <OrderCard
            order_id={1254}
            order_date="1404/12/01"
            order_price={211000}
            tracking_order_code={1254684}
            product_order_image={[
              '/test.png',
              '/test.png',
              '/test.png',
              '/test.png',
            ]}
          />
          <OrderCard
            order_id={1254}
            order_date="1404/12/01"
            order_price={211000}
            tracking_order_code={1254684}
            product_order_image={[
              '/test.png',
              '/test.png',
              '/test.png',
              '/test.png',
            ]}
          />
          <OrderCard
            order_id={1254}
            order_date="1404/12/01"
            order_price={211000}
            tracking_order_code={1254684}
            product_order_image={[
              '/test.png',
              '/test.png',
              '/test.png',
              '/test.png',
            ]}
          />
        </tbody>
        <tfoot className="">footer of table</tfoot>
      </table>
    </div>
  );
};

export default Orders;
