import { getAllCategories } from "@/src/api/GetAllCategories.api";
import CategorySwiper from "../CategorySwiper/CategorySwiper";

export default async function CategorySlider() {
  let data = await getAllCategories();

  return (
    <div className="my-4">
      <h1 className="my-3 text-slate-500 font-semibold">
        shop popular categories
      </h1>
      <CategorySwiper data={data} />
    </div>
  );
}
