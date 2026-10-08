
import "./App.css"
import Home from "./pages/Home.jsx"
import Search from "./pages/search.jsx"
import AboutUs from "./pages/About.jsx";
import { Routes,Route } from "react-router-dom";
import Header from "./assets/componenet/header.jsx";
import Footer from "./assets/componenet/footer.jsx";
import BookingModal from "./assets/componenet/BookingModal.jsx";
import { useState } from "react";

function App() {
  const [bookingHotel, setBookingHotel] = useState(null);

  return (
   

    

    
       
     <>
     <div className="app-container">
        <Header />

<main className="main-contact">
      <Routes>
<Route
  path="/"
  element={<Home onBook={setBookingHotel} />}
/>        <Route path="/search" element={<Search  onBook={setBookingHotel}/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      {bookingHotel && (
  <BookingModal
    hotel={bookingHotel}
    onClose={() => setBookingHotel(null)}
  />
)}
 </main>
  <Footer/>

    </div> 
     </>






  );

}

export default App
