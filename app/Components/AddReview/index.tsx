'use client';

import { Button } from '@/components/ui/button';

const AddReview = () => {
  return (
    <form
      className="flex flex-col justify-around items-center gap-5"
      action={''}
    >
      <label className="">
        متن نظر خودتان در باره این محصول را در کادر زیر بنویسید:
      </label>
      <textarea
        className="border w-full p-5 rounded-xl"
        name="text-review"
        id="text-review"
        rows={5}
      ></textarea>
      <Button
        className="bg-dark_Lapis hover:bg-Lapis cursor-pointer"
        type="submit"
      >
        Add Review
      </Button>
    </form>
  );
};

export default AddReview;
