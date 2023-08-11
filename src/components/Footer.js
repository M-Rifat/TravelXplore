import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TravelXplore.</h1>
          <p>Explore. Discover. Adventure.</p>
        </div>
        <div>
          <Link to="/">
            <i className="fa-brands fa-facebook-square"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-twitter-square"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-youtube-square"></i>
          </Link>
        </div>
      </div>
      <div className="bottom">
        
        <div>
          <h4>Company</h4>
          <a href="/about">About Us</a>
          <a href="/">Career</a>
          <a href="/">Advertising</a>
          <a href="/">Feedback</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Security</a>
          <a href="/">Rewards</a>
        </div>

        <div>
          <h4>Policies</h4>
          <a href="/">Privacy</a>
          <a href="/">Terms of Services</a>
          <a href="/">License</a>
        </div>

        <div>
          <h4>Contact Us</h4>
          <a href="/">Phone: +880 1725028366</a>
          <a href="/">travelxplore.com.bd</a>
          <a href="/">travel-xplore.vercel.app</a>
        </div>

      </div>
      <div  className="copyRight">
      <p>© TravelXplore. 2023 | All rights reserved. | Designed & Developed by M9Tech.</p>
      </div>
    </div>
  );
};

export default Footer;
