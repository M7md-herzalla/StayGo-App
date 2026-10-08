
function DetailsHotels({hotel,onBook}){

  
return(
<section className="hotel-detalis">
    <div className="details-image">
        <img alt={hotel.name} src={hotel.image}></img>
    </div>
    <div className="details-info">
        <h2>{hotel.name}</h2>
        <p>📍 {hotel.location}</p>     
        <p>⭐ {hotel.rating}</p>
        <p>{hotel.description}</p>
        <h3>Amenities</h3>
        <ul>
          {hotel.amenities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
          <h3>Rooms</h3>
          <div className="room-info-container">
          {hotel.rooms.map((room) => (
            <div key={room.id} className="room-info">
              <h4>{room.name}</h4>
              <p>Price: <strong>{room.price} JD</strong></p>
              <p>Up to {room.guests} guests</p>
            </div>
          ))}
          </div>
      
        <button className="book-btn" onClick={()=>onBook(hotel)}>Book Now</button>
    </div>
    
</section>
);
}
export default DetailsHotels;