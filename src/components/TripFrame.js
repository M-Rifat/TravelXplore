import "./TripStyles.css";

function TripFrame(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.recentImg} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripFrame;
