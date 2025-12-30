import { getProducts } from "@/src/api/products.api";
import SingleProduct from "../SingleProduct/SingleProduct";


export default async function AllProducts() {
  let data = await getProducts();

  return (
    <div className="container my-12">
      <div className="flex flex-wrap">
        {data.map((product: any) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
