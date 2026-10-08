import { useState } from "react";
import aboutCards from "./aboutUsCards";
function About(){
const[activeCard,setCativeCard]=useState(null);


    return(
        <>
            <section className="about-hero">
                <div className="about-intro">
                    <p>DISCOVER OUR STORY</p>
                    <h1>More Than A Place To Stay.</h1>
                    <span> Discover Jordan through stays, stories and unforgettable destinations.</span>
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
                        <h2>{card.title}</h2>
                        <span>Discover →</span>
                        
                        </div>
                        </div>
                        <div className="about-card-back">
                          < div className="about-card-back-text">
                          <h2>{card.title}</h2>
                          <p>{card.text}</p>
                          <span><b>Click to return</b></span>
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