import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer >
<div className="main-footer">
      <div className="footer-logo">
        <h2>StayGo</h2>
        <p>Find your perfect stay, wherever you go.</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>

        <ul>
           <li><Link to="/">Home</Link></li> 
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/About">About</Link></li>
          
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact</h3>

        <p>Email: info@staygo.com</p>
        <p>Phone: +962 7X XXX XXXX</p>
      </div>
</div>

      <div className="copyright">
        <p>© 2026 StayGo. All rights reserved.</p>
      </div>
 </footer>
 
  );
}

export default Footer;