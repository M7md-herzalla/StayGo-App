import { useContext } from "react";
import { LanguageContext } from "../languageProvider";


function DetailsHotels({hotel,onBook}){
const {texts}=useContext(LanguageContext);
  console.log(hotel.id, texts.hotels[hotel.id]);
return(
<section className="hotel-detalis">
    <div className="details-image">
        <img alt={hotel.name} src={hotel.image}></img>
    </div>
    <div className="details-info">
        <h2>{texts.hotels[hotel.id].name}</h2>
        <p>📍 {texts.hotels[hotel.id].location}</p>     
        <p>⭐ {hotel.rating}</p>
        <p>{texts.hotels[hotel.id].description}</p>
        <h3>{texts.hotelDetails.amenities}</h3>
        <ul>
          {texts.hotels[hotel.id].amenities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
          <h3>{texts.hotelDetails.rooms}</h3>
          <div className="room-info-container">
          {hotel.rooms.map((room) => (
            <div key={room.id} className="room-info">
              <h4>{texts.hotels[hotel.id].rooms[room.id]}</h4>
              <p>{texts.hotelDetails.price}: <strong>{room.price} {texts.hotelDetails.currency}</strong></p>
              <p>{texts.hotelDetails.upTo} {room.guests} {texts.hotelDetails.guests}</p>
            </div>
          ))}
          </div>
      
        <button className="book-btn" onClick={()=>onBook(hotel)}>{texts.hotelDetails.bookNow}</button>
    </div>
    
</section>
);
}
export default DetailsHotels;