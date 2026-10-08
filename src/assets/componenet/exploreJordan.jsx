import amman from "../../images/amman.jpg";
import aqaba from "../../images/aqaba.jpg";
import petra from "../../images/petra.jpg";
import deadSea from "../../images/deadsea.jpg";
function ExploreJordan() {
    return(
        <div className="expolre-jordan-section">
            <h1>Explore Jordan</h1>
            <div className="explore-area">
                <div className="city-image">
                    <img alt="Amman city" src={amman}></img>
                </div>
                <div className="city-description">
                   <h3>Amman</h3>
                   <p>Discover Jordan’s vibrant capital, where ancient history meets modern city life. Explore the Amman Citadel,
                     the impressive Roman Theatre, stroll through Rainbow Street, and enjoy local cafés, traditional markets, and panoramic views across the city’s famous hills.</p>
                </div>
                </div>

                 <div className="explore-area left">
                  <div className="city-image">
                    <img alt="Petra" src={petra}></img>
                  </div>
                <div className="city-description Left">
                    <h3>Petra</h3>
                        <p>Step into Jordan’s legendary Rose City, carved directly into the sandstone mountains more than two thousand years ago.
                             Walk through the spectacular Siq to the iconic Treasury, then explore ancient tombs, temples, trails, and the magnificent Monastery hidden among Petra’s dramatic red-rock landscape.</p>
                </div>
                </div>

                 <div className="explore-area ">   
                  <div className="city-image">
                     <img alt="Aqaba city" src={aqaba}></img>
                  </div>
                <div className="city-description">
                    <h3>Aqaba</h3>
                    <p>Escape to Jordan’s gateway to the Red Sea, known for its warm climate, crystal-clear waters, beaches, and colorful coral reefs.
                         Aqaba is perfect for diving, snorkeling, boat trips, water sports, and relaxing by the sea, with lively resorts, restaurants, and the modern Ayla waterfront nearby.</p>
                </div>
                </div> 
                 <div className="explore-area left">
                  <div className="city-image">
                     <img alt="Dead Sea" src={deadSea}></img>
                  </div>
                <div className="city-description Left" >
                    <h3>Dead Sea</h3>
                    <p>Experience one of the world’s most unique natural destinations at the lowest point on Earth. Float effortlessly in the mineral-rich waters,
                         enjoy the famous natural mud and spa treatments, and admire dramatic desert landscapes and unforgettable sunsets along the shoreline</p>
                </div>
                </div>
            </div>
        
    );
    
}
export default ExploreJordan;