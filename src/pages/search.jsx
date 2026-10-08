
import Card from "../assets/componenet/card.jsx";
import DetailsHotels from "../assets/componenet/detailsHotels.jsx";
import { useState, useRef,useEffect } from "react";

function Search({ onBook }) {
    const detailsRef=useRef(null);
    const[selectedHotel , setSelectedHotel ]=useState(null);


    useEffect(() => {
            if (selectedHotel) {
  detailsRef.current.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
}, [selectedHotel]);
    return(
       
              
        <>

        <Card setSelectedHotel={setSelectedHotel }/>
        <div ref={detailsRef}>
        {selectedHotel  && (<DetailsHotels  hotel={selectedHotel }  key={selectedHotel.id}  onBook={onBook}   />) }

        </div>
        </>
    
    );
}
export default Search;