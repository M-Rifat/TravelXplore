import "./DestinationStyles.css";

import place1 from "../assets/place1.jpg";
import place2 from "../assets/place2.jpg";
import place5 from "../assets/place5.jpg";
import place8 from "../assets/place8.jpg";
import DestinationFrame from "./DestinationFrame";

const DestinationData = () => {
  return (
    <div className="destination">
      <h1>Popular Attractive Places</h1>
      <p>Tours Give you the oportuinities to explore the world.</p>
 
      <DestinationFrame
      className="first-des"
      heading="Nafakhum, Thanchi, Bandarban"
      text="    One of the most iconic views in Bandarban boosts a volcano inside an
      island. If you fancy close look, the hike up to the crater is a mere
      45 minutes, and is easy enough for beginners. Guide will assist you
      most of the way, and you will see the peculiar environment found on
      ab active volcano, including volcano rocks and steam vents. The hike
      can be dusty and hot, so plan for an early morning trip, nad then
      unwind with some food before heading back home."
      
      img1={place1}
      img2={place2} 
      />
 
      <DestinationFrame
      className="first-des-rev"
      heading="Nafakhum, Thanchi, Bandarban"
      text="    One of the most iconic views in Bandarban boosts a volcano inside an
      island. If you fancy close look, the hike up to the crater is a mere
      45 minutes, and is easy enough for beginners. Guide will assist you
      most of the way, and you will see the peculiar environment found on
      ab active volcano, including volcano rocks and steam vents. The hike
      can be dusty and hot, so plan for an early morning trip, nad then
      unwind with some food before heading back home."
      
      img1={place5}
      img2={place8} 
      />

    </div>
  );
};

export default DestinationData;
