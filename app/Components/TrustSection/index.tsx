import {
  HeadsetIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  TruckElectricIcon,
} from 'lucide-react';

const TrustSection = () => {
  return (
    <div className="flex flex-wrap justify-center pt-5 pb-10 basis-1/4 gap-10 text-center">
      <div className="flex flex-col min-w-72 items-center justify-center gap-5">
        <div className="py-5 bg-Gold/20 text-Gold rounded-full size-20 flex justify-center items-center">
          <ShieldCheckIcon size={36} />
        </div>
        <div className="">
          <p className="text-xl text-dark_Lapis font-bold">ضمانت اصالت کالا</p>
          <p className="text-sm text-dark_Lapis/75">
            تمامی محصولات دست‌ساز و اصیل می‌باشند.
          </p>
        </div>
      </div>
      <div className="flex flex-col  min-w-72 items-center justify-center gap-5">
        <div className="py-5 bg-Lapis/20 text-Lapis rounded-full size-20 flex justify-center items-center">
          <TruckElectricIcon size={36} />
        </div>
        <div className="">
          <p className="text-xl text-dark_Lapis font-bold">ضمانت اصالت کالا</p>
          <p className="text-sm text-dark_Lapis/75">
            تمامی محصولات دست‌ساز و اصیل می‌باشند.
          </p>
        </div>
      </div>
      <div className="flex flex-col  min-w-72 items-center justify-center gap-5">
        <div className="py-5 bg-Turquoise/20 text-Turquoise rounded-full size-20 flex justify-center items-center">
          <RotateCcwIcon size={36} />
        </div>
        <div className="">
          <p className="text-xl text-dark_Lapis font-bold">ضمانت اصالت کالا</p>
          <p className="text-sm text-dark_Lapis/75">
            تمامی محصولات دست‌ساز و اصیل می‌باشند.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-w-72 gap-5">
        <div className="py-5 bg-Persian-Red/20 text-Persian-Red rounded-full size-20 flex justify-center items-center">
          <HeadsetIcon size={36} />
        </div>
        <div className="">
          <p className="text-xl text-dark_Lapis font-bold">ضمانت اصالت کالا</p>
          <p className="text-sm text-dark_Lapis/75">
            تمامی محصو1لات دست‌ساز و اصیل می‌باشند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
