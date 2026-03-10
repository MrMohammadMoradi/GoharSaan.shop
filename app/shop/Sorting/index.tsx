'use client';

import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const SortingProducts = () => {
  // const pathname = usePathname()
  // console.log(pathname);

  const [selectItem, setSelectItem] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectItem = async (e: any) => {
    setSelectItem(e.target.value);

    console.log(selectItem);
  };

  return (
    <div className="w-full flex items-center">
      {/* <div className=" hidden md:flex gap-5 items-center">
            <Button
                className={`${pathname === '/shop' ? 'text-dark_Lapis bg-Gold' : ''}`}
            >
                ارزان ترین
            </Button>
        </div> */}
      <h5>مرتب سازی محصولات بر اساس :</h5>
      <select
        className="text-Lapis px-5 py-2 outline-0 animate-accordion-down duration-300"
        onChange={handleSelectItem}
      >
        <option value="cheapToExpensive" selected>
          از ارزانترین به گران
        </option>
        <option value="expensiveToCheap" className=" selection:text-Gold">
          از گرانترین به ارزان
        </option>
      </select>
    </div>
  );
};

export default SortingProducts;
