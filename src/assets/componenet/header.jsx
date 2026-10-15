import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import  { LanguageContext } from "../languageProvider";
import { useContext } from "react";
function Header(){
  const {language,toggleLanguage,texts}=useContext(LanguageContext);
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
       <div className="header-logo">
<h1 ><Link className="logo" to="/">StayGo</Link></h1>
      <button type="button" className="translateBtn" onClick={()=>toggleLanguage()}>{language === "en" ? "العربية" : "English"}</button>
      
       </div>
        <nav >
        <ul className="header-list">        
        <li>
           <Link to="/">{texts.home}</Link>
        </li>
        <li>
           <Link to="/Search">{texts.search}</Link>
        </li>
        <li>
            <Link to="/About">{texts.about}</Link>
        </li>
        </ul>
        </nav>


</div>
    </header>
  )
}
export default Header;
