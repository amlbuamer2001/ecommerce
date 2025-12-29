import SingleProduct from "../_components/SingleProduct/SingleProduct";
import { getProducts } from "../../api/products.api";

export default async function Products() {
  let data = await getProducts();

  return (
    <div className="container w-[90%] mx-auto my-12">
      <div className="flex flex-wrap">
        {data.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
