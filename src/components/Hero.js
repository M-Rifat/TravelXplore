import "./HeroStyles.css";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <>
      <div className={props.classVar}>
        <img src={props.introImg} alt="HeroImage" />
         <div className="hero-text">
          <h1>{props.title}</h1>
          <h1>{props.title2}</h1>
          <h1>{props.title_S}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>{props.btnText}</Link>
         </div>
      </div>
    </>
  );
}

export default Hero;
