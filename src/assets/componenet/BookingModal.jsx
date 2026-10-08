import  { useState } from "react";
function BookingModal({ hotel, onClose,})
{
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
        <h2>{hotel.name}</h2>
   
        <div className="check-in-out">
            <label htmlFor="check-in">Check-in:</label>
            <input type="date" id="check-in" value={checkIn} onChange={(e)=>setChcekIn(e.target.value)} />
            <label htmlFor="check-out" >Check-out:</label>
            <input type="date" id="check-out" value={checkOut} onChange={(e)=>setChcekOut(e.target.value)}/>
        </div>
        <div className="guests">
            <label htmlFor="guests">Guests:</label>   
            
            <input type="number" id="guests" min="1" max={maxGuests} value={guests} onChange={handleGuestsChange} />
       {availableRooms.length === 0 && (
  <p className="no-rooms">
    No rooms are available for this number of guests.
  </p>
)}
       
        </div>
        

           
          <div className="room-box">

  <div className="room-selection">

    <label>Room Type:</label>

    <button
      className="room-button"
      onClick={() => setOpenRooms(!openRooms)}
    >
      {selectedRoom?.name || "Select a room"} ▼
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

          <p>{room.price} JD / night</p>

          <p>Up to {room.guests} guests</p>

        </div>

      ))}

    </div>
  )}

</div>
   
        
        <div className="user-info">
        <label htmlFor="FullName">Full Name:</label>
        <input type="text" id="FullName" placeholder="Enter your full name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="total-info">
        <label htmlFor="Total">Total:</label>
        <input type="text" value={  total> 0 ?`${total.toFixed(2)} JD` : ""} id="Total" readOnly />
        </div>
       <div className="booking-buttons">
        <button className="confirm-booking" disabled={!selectedRoom}>Confirm Booking</button>
        <button className="cancel-booking" onClick={handleClose}>
          Cancel
        </button>
    
      </div>
    </div>
</div>


    );
}
export default BookingModal;