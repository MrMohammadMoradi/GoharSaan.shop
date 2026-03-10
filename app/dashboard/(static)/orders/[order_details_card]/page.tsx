const OrderDetailsCard = async ({
  params,
}: {
  params: { order_details_card: string };
}) => {
  const id = await params;
  console.log(id);

  return (
    //module for show details of products shopped
    <div>{id.order_details_card}</div>
  );
};

export default OrderDetailsCard;
