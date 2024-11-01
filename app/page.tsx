import "./style/style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero_sec";
import Posts from "./components/Recentposts";
import Featured from "./components/Featured_work";
import End from "./components/Footer";

function Page() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Posts />
      <Featured />
      <End />
    </div>
  );
}
export default Page;
