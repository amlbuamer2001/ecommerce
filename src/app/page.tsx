import AllProducts from "./_components/AllProducts/AllProducts";
import CategorySlider from "./_components/CategorySlider/CategorySlider";
import MainSlider from "./_components/MainSlider/MainSlider";

export default function Home() {
  return <main className="w-[90%] mx-auto my-5" >
  <MainSlider />
  <CategorySlider />
  <AllProducts />
  </main>;
}
