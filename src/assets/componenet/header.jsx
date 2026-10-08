import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Header(){
  const[scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const handelScroll=()=>{
      if (window.scrollY>50) {
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    };
    window.addEventListener("scroll",handelScroll);
    
    return () => {
  window.removeEventListener("scroll", handelScroll);
};
  },[]);
  return(
     <header
      className={`header-main ${scrolled ? "header-scrolled" : ""}`}
    >
          
<div className="header-content">
      <h1 ><Link className="header-logo" to="/">StayGo</Link></h1>
        <nav >
        <ul className="header-list">        
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/Search">Search</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        </ul>
        </nav>


</div>
    </header>
  )
}
export default Header;
