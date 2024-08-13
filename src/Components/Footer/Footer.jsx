import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo1} alt="" className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            delectus? Iste, at saepe! A illo sed ipsum voluptatum porro adipisci
            impedit optio, est saepe expedita iste quia consequuntur ratione
            molestiae. Voluptas temporibus similique molestiae quisquam corrupti
            suscipit, corporis libero cupiditate tempora, possimus voluptates
            repudiandae animi natus.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy ploicy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-342-453-5634</li>
            <li>contact@foodDeli.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-cp">
        Copyright 2024 © FoodDeli.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
