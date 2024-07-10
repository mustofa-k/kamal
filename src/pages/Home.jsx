import Hero from "../component/HeroSection";
import NavigationBars from "../component/Navbar";
import Project from "../component/Projek";

function HomePage() {
    return ( 
        <>
        <NavigationBars/>
        |<Hero/>
        <Project/>
        </>
     );
}

export default HomePage;