import { useRef, useState } from "react";
import hotels from "./hotels.js";
function Card({setSelectedHotel} ){

  const sliderRef=useRef(null);
  const isDraging=useRef(false);
  const startX=useRef(0);
  const scrollLeft=useRef(0);
  const [draggedOnce,setDraggedOnce]=useState(false);
  const handlePointerDown =(e)=>{
    isDraging.current=true;
    sliderRef.current.classList.add("dragging");
    startX.current = e.clientX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;

  };
   const handlePointerLeave = () => {
    isDraging.current = false;
    sliderRef.current.classList.remove("dragging");
  };
  const handelPointerUp=()=>{
    isDraging.current=false;
    sliderRef.current.classList.remove("dragging");
  };
  const handelPointerMove=(e)=>{
    
    if (!isDraging.current)   return;
    e.preventDefault();
    
   const x =
    e.clientX - sliderRef.current.offsetLeft;

  const walk =
    (x - startX.current) * 2.0;

  sliderRef.current.scrollLeft =
    scrollLeft.current - walk;
    

    if (!draggedOnce) {
      setDraggedOnce(true);
    }
  };

  const [searchText,setSearchText]=useState("");
  const [sortOption,setSortOption]=useState("default");
  const [openSort, setOpenSort] = useState(false);
  const filteredHotels=hotels.filter((hotel)=>
    hotel.name.toLowerCase().includes(searchText.toLowerCase())
  
  );

  const getLowestPrice = (hotel) => {return Math.min(...hotel.rooms.map((room)=>room.price))} ;
  


  //////////////////////////
  const srotedHotels=[...filteredHotels];
  if (sortOption==="low-high") {
      srotedHotels.sort((a,b)=> getLowestPrice(a) - getLowestPrice(b))
  }
  if (sortOption==="high-low") {
    srotedHotels.sort((a,b)=> getLowestPrice(b) - getLowestPrice(a))
  }
  if (sortOption==="rating-low-high") {
    srotedHotels.sort((a,b)=> a.rating - b.rating )
  }
  if (sortOption==="rating-high-low") {
    srotedHotels.sort((a,b)=> b.rating - a.rating )
  }



  return(

 <section className="card-section">

      <h2>Popular Stays</h2>


<div className="search-tools">
<input className="text-inp" type="text" placeholder="Search Hotels..." value={searchText} onChange={(event)=>{setSearchText(event.target.value)}}/>

<div className="sort-box">
      <button className="sort-button" onClick={() => setOpenSort(!openSort)}>Sort By</button>
      <div className="sort-menu">
      
      {openSort &&   
      (<><button 
        onClick={() => setSortOption("low-high")}>
          Price: Low → High</button><button onClick={() => setSortOption("high-low")}>
          Price: High → Low</button><button onClick={() => setSortOption("rating-high-low")}>
          Rating: High → Low</button><button onClick={() => setSortOption("rating-low-high")}>
          Rating: Low → High</button></>
      )}
      </div>
      
</div>

</div>

 <div className="card-wrapper">{!draggedOnce && <div className="drag-hint">Drag</div>}
      <div className="card"  ref={sliderRef} onPointerDown={handlePointerDown}  onPointerLeave={handlePointerLeave} onPointerMove={handelPointerMove} onPointerUp={handelPointerUp}>

{ 
srotedHotels.map((hotel) => {const lowestPrice =getLowestPrice(hotel);

          return (
            <div  className="hotel-card" key={hotel.id}>

      
            <img
              draggable="false"
              src={hotel.image}
              alt={hotel.name}
            />


            <h3 draggable="false">{hotel.name}</h3>

            <p draggable="false">
             From {lowestPrice} JD / night
            </p>

            <button onClick={()=>setSelectedHotel(hotel) } >
              See More
            </button>

          </div>
        );
      })}

      </div>
      </div>

    </section>

);}

export default Card;