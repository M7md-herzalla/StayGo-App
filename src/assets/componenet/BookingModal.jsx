import  { useContext, useState } from "react";
import { LanguageContext } from "../languageProvider";
function BookingModal({ hotel, onClose,})
{
    const {texts}=useContext(LanguageContext)
    const [isClosing, setIsClosing] = useState(false);
    const [openRooms, setOpenRooms] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(hotel.rooms[0]);
    const [guests, setGuests] = useState(1);
    const availableRooms = hotel.rooms.filter((room) => room.guests >= guests);
    const [checkIn,setChcekIn]=useState("");
    const [checkOut,setChcekOut]=useState("");  
    let nights=0;  
    const handleGuestsChange = (e) => {
    const newGuests = Number(e.target.value);

;
  setGuests(newGuests);
if ( selectedRoom && selectedRoom.guests < newGuests ) {
  setSelectedRoom(null);}}


if (checkIn && checkOut) {
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);
  const differece =endDate-startDate;
  if (differece>0) {
    nights=differece/(1000 * 60 * 60 * 24)
  }

}
const total =selectedRoom && nights>0 ?(selectedRoom.price*nights) : 0;

      const maxGuests = Math.max(
  ...hotel.rooms.map((room) => room.guests))
      const handleClose = () => {
      setIsClosing(true);};
    return(
<div className="booking-section">
<div className={`booking-details ${isClosing ? "closing" : ""}`}  onAnimationEnd={() => {if (isClosing) {onClose();}}}>
        <button className="Exit" onClick={handleClose} >❌</button>
        <h2>{texts.hotels[hotel.id].name}</h2>
   
        <div className="check-in-out">
            <label htmlFor="check-in">{texts.booking.checkIn}:</label>
            <input type="date" id="check-in" value={checkIn} onChange={(e)=>setChcekIn(e.target.value)} />
            <label htmlFor="check-out" >{texts.booking.checkOut}:</label>
            <input type="date" id="check-out" value={checkOut} onChange={(e)=>setChcekOut(e.target.value)}/>
        </div>
        <div className="guests">
            <label htmlFor="guests">{texts.booking.guests}:</label>   
            
            <input type="number" id="guests" min="1" max={maxGuests} value={guests} onChange={handleGuestsChange} />
       {availableRooms.length === 0 && (
  <p className="no-rooms">
   {texts.booking.noRooms} 
  </p>
)}
       
        </div>
        

           
          <div className="room-box">

  <div className="room-selection">

    <label> {texts.booking.roomType}:</label>

    <button
      className="room-button"
      onClick={() => setOpenRooms(!openRooms)}
    >
{selectedRoom
  ? texts.hotels[hotel.id].rooms[selectedRoom.id]
  : texts.booking.selectRoom} ▼ 
     </button>

  </div>

  {openRooms && (
    <div className="room-menu">

      {availableRooms.map((room) => (

        <div
          key={room.id}
          className="room-option"
          onClick={() => {
            setSelectedRoom(room);
            setOpenRooms(false);
          }}
        >

          <h4>{room.name}</h4>

          <p>{room.price} {texts.booking.currency} {" "}{texts.booking.perNight}</p>

          <p>{texts.booking.upTo}{" "} {room.guests} {texts.booking.guestUnit}</p>

        </div>

      ))}

    </div>
  )}

</div>
   
        
        <div className="user-info">
        <label htmlFor="FullName">{texts.booking.fullName}:</label>
        <input type="text" id="FullName" placeholder={texts.booking.namePlaceholder} />
        <label htmlFor="email">{texts.booking.email}:</label>
        <input type="email" id="email" placeholder={texts.booking.emailPlaceholder} />
        </div>
        <div className="total-info">
        <label htmlFor="Total">{texts.booking.total}:</label>
        <input type="text" value={  total> 0 ?`${total.toFixed(2)} ${texts.booking.currency}` : ""} id="Total" readOnly />
        </div>
       <div className="booking-buttons">
        <button className="confirm-booking" disabled={!selectedRoom}>{texts.booking.confirm}</button>
        <button className="cancel-booking" onClick={handleClose}>
          {texts.booking.cancel}
        </button>
    
      </div>
    </div>
</div>


    );
}
export default BookingModal;