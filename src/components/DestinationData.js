import "./DestinationStyles.css";

import place1 from "../assets/place1.jpg";
import place2 from "../assets/place2.jpg";
import place3 from "../assets/place3.jpg";
import place4 from "../assets/place4.jpg";
import place5 from "../assets/place5.jpg";
import place6 from "../assets/place6.jpg";
import DestinationFrame from "./DestinationFrame";

const DestinationData = () => {
  return (
    <div className="destination">
      <h1>Popular Attractive Places</h1>
      <p>Tours Give you the oportuinities to explore the world.</p>

      <DestinationFrame
        className="first-des"
        heading="Sundarbans"
        text="The Sundarbans is the largest mangrove forest in the world and is home to the elusive Royal Bengal tigers. It's a UNESCO World Heritage Site and an incredible destination for wildlife enthusiasts.The Sundarbans mangrove forest is a UNESCO World Heritage Site and home to the Royal Bengal tiger. It's a unique ecosystem where freshwater from the Ganges and saltwater from the Bay of Bengal meet. It's an excellent spot for wildlife photography, including various bird species and other animals"
        img1={place1}
        img2={place2}
      />

      <DestinationFrame
        className="first-des-rev"
        heading="Cox's Bazar"
        text="Known for having one of the longest unbroken sandy beaches in the world, Cox's Bazar is a popular destination for beach lovers. The stretch of golden sand along the Bay of Bengal offers stunning sunsets and a relaxed atmosphere.Cox's Bazar boasts a 120-kilometer-long sandy beach along the Bay of Bengal. In addition to beach activities like swimming and sunbathing, visitors can enjoy beachside markets, local seafood, and water sports. Himchari National Park and Inani Beach are nearby attractions."
        img1={place3}
        img2={place4}
      />

      <DestinationFrame
        className="first-des"
        heading="Sajek Valley"
        text="Located in the Chittagong Hill Tracts, Sajek Valley offers breathtaking views of rolling hills, lush forests, and indigenous culture. It's a serene escape from the bustling city life. Sajek Valley offers stunning views of hills and valleys, and the indigenous culture of the Chakma people. It's a perfect place for trekking and enjoying the peaceful ambiance. The Ruilui Para area is known for its bamboo bridges and traditional huts"
        img1={place5}
        img2={place6}
      />
    </div>
  );
};

export default DestinationData;
