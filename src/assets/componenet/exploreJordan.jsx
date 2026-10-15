import amman from "../../images/amman.jpg";
import aqaba from "../../images/aqaba.jpg";
import petra from "../../images/petra.jpg";
import deadSea from "../../images/deadsea.jpg";
import { useContext } from "react";
import { LanguageContext } from "../languageProvider";
function ExploreJordan() {
    const {texts}=useContext(LanguageContext);

    const exploreTexts = texts.explore;
    const ammanTexts = exploreTexts.amman;
    const petraTexts = exploreTexts.petra;
    const aqabaTexts = exploreTexts.aqaba;
    const deadSeaTexts = exploreTexts.deadSea;
      
    return(
        <div className="expolre-jordan-section">
            <h1>{exploreTexts.title}</h1>
            <div className="explore-area">
                <div className="city-image">
                    <img alt="Amman city" src={amman}></img>
                </div>
                <div className="city-description">
                   <h3>{ammanTexts.name}</h3>
                   <p>{ammanTexts.description}</p>
                </div>
                </div>

                 <div className="explore-area left">
                  <div className="city-image">
                    <img alt="Petra" src={petra}></img>
                  </div>
                <div className="city-description Left">
                    <h3>{petraTexts.name}</h3>
                    <p>{petraTexts.description}</p>
                </div>
                </div>

                 <div className="explore-area ">   
                  <div className="city-image">
                     <img alt="Aqaba city" src={aqaba}></img>
                  </div>
                <div className="city-description">
                    <h3>{aqabaTexts.name}</h3>
                    <p>{aqabaTexts.description}</p>
                </div>
                </div> 
                 <div className="explore-area left">
                  <div className="city-image">
                     <img alt="Dead Sea" src={deadSea}></img>
                  </div>
                <div className="city-description Left" >
                    <h3>{deadSeaTexts.name}</h3>
                    <p>{deadSeaTexts.description}</p>
                </div>
                </div>
            </div>
        
    );
    
}
export default ExploreJordan;