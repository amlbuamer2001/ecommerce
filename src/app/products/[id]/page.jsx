import { getProductDetails } from "@/src/api/ProductDetails.api";

import ProductDetailsCard from "../../_components/ProductDetails/page";

export default async function ProductDetails({ params }) {
  let { id } = await params;

  let data = await getProductDetails(id);

  return (
    <>
      <ProductDetailsCard data={data} />
    </>
  );
}
