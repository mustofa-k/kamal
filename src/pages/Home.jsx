import Hero from "../component/HeroSection";
import NavigationBars from "../component/Navbar";
import Project from "../component/project/Projek";
import Skil from "../component/Skil/skil";

function HomePage() {
  return (
    <>
      <NavigationBars />
      |<Hero />
      <Project />
      <Skil />
    </>
  );
}

export default HomePage;
