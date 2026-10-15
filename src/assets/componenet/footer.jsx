import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../languageProvider";
function Footer() {
  const {texts}=useContext(LanguageContext);
  return (
    <footer >
<div className="main-footer">
      <div className="footer-logo">
        <h2>StayGo</h2>
        <p>{texts.footer.tagline}</p>
      </div>

      <div className="footer-links">
        <h3>{texts.footer.quickLinks}</h3>

        <ul>
           <li><Link to="/">{texts.home}</Link></li> 
          <li><Link to="/Search">{texts.search}</Link></li>
          <li><Link to="/About">{texts.about}</Link></li>
          
        </ul>
      </div>

      <div className="footer-contact">
        <h3>{texts.footer.contact}</h3>

        <p>{texts.footer.email}: info@staygo.com</p>
        <p>{texts.footer.phone}: +962 7X XXX XXXX</p>
      </div>
</div>

      <div className="copyright">
        <p>© {texts.footer.copyright}</p>
      </div>
 </footer>
 
  );
}

export default Footer;