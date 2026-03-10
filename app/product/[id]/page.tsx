import AddReview from '@/app/Components/AddReview';
import ProductsCarousel from '@/app/Components/ProductsCarousel';
import AddToCart from '@/components/AddToCart';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetails = ({ params }: { params: { product_id: string } }) => {
  const res = params.product_id;

  return (
    <>
      <div className="container flex-col mx-auto mb-5 my-5 lg:my-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-5 p-10 bg-Cream rounded-t-md">
          <div className="size-[500px]">
            <div className="relative size-80 lg:size-[500px]">
              <Image
                src={'/test.png'}
                fill
                alt=""
                className="z-10 rounded-xl "
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-5">
            <div className="flex flex-col gap-5 text-Lapis">
              <h4 className="font-bold text-3xl">product name {res}</h4>
              <p className="">product details</p>
              <div className="flex gap-5">
                <span className="">product tag1</span>
                <span className="">product tag2</span>
                <span className="">product tag3</span>
              </div>
            </div>
            <div className="flex flex-col px-8 py-3 shadow hover:shadow-xl bg-Gold text-Lapis rounded-xl">
              <span className="">price :</span>
              <span className="">5200000 toman</span>
              <AddToCart product_name="tk" text={'nn'} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex gap-5 w-full items-center mx-auto p-5 bg-dark_Lapis text-Gold">
            <Link href={'#1'} className="">
              Description
            </Link>
            <Link href={'#2'} className="">
              more thongs
            </Link>
            <Link href={'#3'} className="">
              review product
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="" id="1">
              Lorem 1 ipsum, dolor sit amet consectetur adipisicing elit. Nam
              officiis voluptates et numquam velit non voluptatum in atque ut
              saepe doloribus exercitationem ab vel eius, laboriosam consequatur
              quaerat eum cumque nulla porro delectus mollitia dolorum culpa
              quod. Impedit eligendi ad rerum error unde earum? Dignissimos,
              tempora possimus totam atque quibusdam deleniti quam recusandae
              asperiores pariatur culpa quia obcaecati molestias enim, similique
              aliquid ad ex necessitatibus odio. Nisi beatae perspiciatis,
              minima similique quod placeat at corrupti saepe maiores dolores
              ducimus voluptas dolorem nemo atque recusandae optio! Dolor quasi,
              tenetur ullam repellendus, eveniet consectetur ex obcaecati unde
              culpa adipisci dolore quidem saepe ratione maxime, sunt iste
              explicabo sapiente optio quo. Doloremque deserunt repudiandae
              laborum a sed et itaque! Adipisci pariatur cumque unde quisquam
              officiis explicabo vero, quis quasi, debitis consequuntur enim, id
              impedit ab aperiam. Incidunt ipsa autem cupiditate assumenda,
              totam facere amet perspiciatis soluta maxime. Temporibus doloribus
              alias explicabo nihil aliquid amet optio, laboriosam maxime,
              pariatur dicta repudiandae dolores ipsum inventore officia
              voluptas. Impedit non dolores exercitationem reiciendis quo,
              laboriosam inventore nam, at ex, temporibus illum iure maxime nisi
              rerum iusto velit nobis numquam eum! Et odio molestias ex, earum
              ea consectetur placeat itaque, eaque reiciendis porro eum quaerat
              architecto vel ab ratione quibusdam aliquam sequi voluptate. Dolor
              aspernatur totam perspiciatis incidunt beatae iure libero, aperiam
              molestias ad quod asperiores, officia molestiae! Blanditiis fugit
              aut earum! Tempore, laborum ea error sint saepe nam aperiam quos
              aut vero quo, consequatur suscipit, architecto aliquid fuga
              eligendi id? Molestias obcaecati quod ullam porro quibusdam
              architecto. Perferendis officia recusandae soluta aut laudantium,
              quam quibusdam nulla rerum incidunt molestiae distinctio totam vel
              atque debitis exercitationem non obcaecati id quod itaque enim
              quo? Possimus quos odio id eius rerum porro, voluptate voluptatum
              laborum sit alias at. In reprehenderit culpa recusandae facilis,
              ullam minima odit iure soluta nisi magnam porro sint excepturi
              distinctio illum nam! Aspernatur perferendis voluptatum aperiam
              cum odio! Tempora autem error magnam, eum illum alias dolores,
              laudantium nulla molestias perferendis doloremque velit dolor odit
              quos consectetur vero sunt voluptatem ipsa optio iste. Ratione
              adipisci aut, corporis ab expedita exercitationem ducimus eos
              numquam explicabo quam laudantium ullam quos ut facilis laborum
              iure. Adipisci nobis rerum rem totam eos magnam earum quos magni
              numquam et atque, dicta doloribus laudantium incidunt! Optio
              inventore pariatur quae, nesciunt aut itaque mollitia quaerat
              dolore ut. Amet, aliquid reprehenderit est repellat vel,
              distinctio nostrum quis rerum blanditiis numquam temporibus
              debitis. Tempore quis debitis odit reiciendis numquam ratione
              mollitia sed ducimus beatae, velit nemo, necessitatibus doloremque
              sequi officiis enim nulla aut a cupiditate fugiat! Ipsa debitis,
              ex alias laborum, perferendis incidunt dignissimos quam recusandae
              tempore, sapiente rem praesentium a saepe optio maiores ad nobis.
              Officiis omnis deleniti esse assumenda tempora in sunt iure
              consequuntur quo hic veniam odio molestias cupiditate numquam
              eligendi dicta, eius suscipit facilis dolor sequi excepturi.
              Consectetur maiores veritatis culpa temporibus eaque fuga debitis
              amet error quis ducimus impedit sunt, dolores perspiciatis
              laudantium quas, itaque, sint totam qui eveniet consequatur rerum
              facilis quaerat. Laudantium atque provident facere quis quidem?
              Nobis?
            </p>
            <div className="w-full py-10 border-Turquoise border-y-2" id="2">
              <table className="flex flex-col ">
                <th className="py-5">moshakhasat fani</th>
                <tr className="">type : carpet</tr>
              </table>
            </div>
            <div className="flex flex-col">
              <h4> محصولات مشابه : </h4>
              <ProductsCarousel />
            </div>
            <div className=" py-5" id="3">
              <AddReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
