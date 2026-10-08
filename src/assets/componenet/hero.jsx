import { useState,useEffect } from "react";

import hotels from "./hotels.js";

const heroHotels = hotels.filter((hotel) =>
  [1, 2, 3, 4].includes(hotel.id)
);
function Hero({ onBook }){

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
const hotel = heroHotels[currentHotel];

const lowestPrice = hotel.rooms  ? Math.min(...hotel.rooms.map((room) => room.price)): hotel.price;
    return(
    <><div className="hero-section">
        <div className="hero-img">
        <img alt={hotel.name}  src={hotel.image} className="hero-main-image"  key={hotel.id}></img>
          
          <div className="button-control">
            <button className="prevBtn" onClick={prevHotel}>◀</button>
            <button className="nextBtn" onClick={nextHotel}>▶</button>
        </div>
        </div>
        <div className="hero-text" key={hotel.id}>
        <h2>{hotel.name}</h2>
          <p className="hotel-location">
          📍 {hotel.location}
        </p>
         <p className="hotel-rating">
          ⭐ {hotel.rating}
        </p>

        <p className="hero-description">
          {hotel.description}
        </p>

        <p className="hero-price">
          From <strong>{lowestPrice} JD</strong> / night
        </p>

        <button className="book-btn" onClick={() => onBook(hotel)}>
          Book Now
        </button>
        </div>

    </div>
  </>

);}

export default Hero;