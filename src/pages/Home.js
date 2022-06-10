import Navbar from "../components/Navbar";
import Accouncement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
export default function Home() {
  return (
    <div>
      <Accouncement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
    </div>
  );
}
