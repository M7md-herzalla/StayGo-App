import ExploreJordan from "../assets/componenet/exploreJordan.jsx";
import Hero from "../assets/componenet/hero.jsx";
import WhyChooseUs from "../assets/componenet/why-choose-us.jsx";

function Home({ onBook }) {
   
return(
<>

<Hero onBook={onBook}/>
<ExploreJordan/>
<WhyChooseUs/>
</>
);}
export default Home;