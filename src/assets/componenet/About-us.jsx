import { useContext, useState } from "react";
import aboutCards from "./aboutUsCards";
import { LanguageContext } from "../languageProvider";
function About(){
const[activeCard,setCativeCard]=useState(null);
const {texts}=useContext(LanguageContext)

    return(
        <>
            <section className="about-hero">
                <div className="about-intro">
                    <p>{texts.aboutPage.eyebrow}</p>
                    <h1>{texts.aboutPage.title}</h1>
                    <span> {texts.aboutPage.description}</span>
                </div>
                <div className="about-grid">
                    {aboutCards.map((card)=>(
                   
                        <div  key={card.id} 
                        className={`${card.className} about-card`} 
                        onClick={()=>setCativeCard(activeCard===card.id? null : card.id)}>


                        <div className={`about-card-inner ${activeCard===card.id ?"flipped" : ""}`}>
                         <div className="about-card-front">
                        <img src={card.image} alt={card.title}></img>
                        <div className="about-card-overlay">
                        <h2>{texts.aboutPage.cards[card.id].title}</h2>
                        <span>{texts.aboutPage.discover} →</span>
                        
                        </div>
                        </div>
                        <div className="about-card-back">
                          < div className="about-card-back-text">
                          <h2>{texts.aboutPage.cards[card.id].title}</h2>
                          <p>{texts.aboutPage.cards[card.id].text}</p>
                          <span><b>{texts.aboutPage.returnToFront}</b></span>
                          </div>

                        </div>    
                        </div>
                        </div> 
                    ))}


                        
                </div>


            </section>
        </>
    );
}
export default About;