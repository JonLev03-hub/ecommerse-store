import Navbar from "../components/Navbar";
import Accouncement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Accouncement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}
