import { useState,useEffect } from "react";
import { useContext } from "react";
import  { LanguageContext } from "../languageProvider";
import hotels from "./hotels.js";

const heroHotels = hotels.filter((hotel) =>
  [1, 2, 3, 4].includes(hotel.id)
);
function Hero({ onBook }){
const { texts } = useContext(LanguageContext);

const [currentHotel,setCurrentHotel]=useState(0);
const nextHotel = () => {
  setCurrentHotel((current) =>
    (current + 1) % heroHotels.length
  );
};



const prevHotel =()=>{
setCurrentHotel((current)=>
    ((current  - 1 + heroHotels.length) % heroHotels.length)
);
};
useEffect(()=>{
  const timer=setTimeout(()=>{
    setCurrentHotel((current)=>
    (current+1)%heroHotels.length);
  },4000);
  return()=>clearTimeout(timer);
},[currentHotel])
const heroTexts = texts.hero;
const hotel = heroHotels[currentHotel];
  const hotelTexts = heroTexts.hotels[hotel.id];
const lowestPrice = hotel.rooms  ? Math.min(...hotel.rooms.map((room) => room.price)): hotel.price;
    return(
    <><div className="hero-section">
        <div className="hero-img">
        <img alt={hotelTexts.name}  src={hotel.image} className="hero-main-image"  key={hotel.id}></img>
          
          <div className="button-control" dir="ltr">
            <button className="prevBtn"   onClick={prevHotel} >◀</button>
            <button className="nextBtn"  onClick={nextHotel} >▶</button>
        </div>
        </div>
        <div className="hero-text" key={hotel.id}>
        <h2>{hotelTexts.name}</h2>
          <p className="hotel-location">
          📍 {hotelTexts.location}
        </p>
         <p className="hotel-rating">
          ⭐ {hotel.rating}
        </p>

        <p className="hero-description">
          {hotelTexts.description}
        </p>

        <p className="hero-price">
          {hotelTexts.from}{" "} <strong>{lowestPrice} {hotelTexts.currency}{" "}</strong>  {heroTexts.perNight}
        </p>

        <button className="book-btn" onClick={() => onBook(hotel)}>
       {heroTexts.bookNow}
        </button>
        </div>

    </div>
  </>

);}

export default Hero;