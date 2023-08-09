import "./TripStyles.css";
import TripFrame from "./TripFrame";
import Trip1 from "../assets/place3.jpg";
import Trip2 from "../assets/place4.jpg";
import Trip3 from "../assets/place6.jpg";

function TripData() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can dicover unique destinations using Maps.</p>
      <div className="tripCard">
        <TripFrame
          recentImg={Trip1}
          heading="Trip in Indonesia"
          text="One of the most iconic views in Bandarban boosts a volcano inside an island. If you fancy close look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guide will assist you most of the way, and you will see the peculiar environment found on ab active volcano, including volcano rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, nad then unwind with some food before heading back home."
        />

        <TripFrame
          recentImg={Trip2}
          heading="Trip in Indonesia"
          text="One of the most iconic views in Bandarban boosts a volcano inside an island. If you fancy close look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guide will assist you most of the way, and you will see the peculiar environment found on ab active volcano, including volcano rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, nad then unwind with some food before heading back home."
        />
        <TripFrame
          recentImg={Trip3}
          heading="Trip in Indonesia"
          text="One of the most iconic views in Bandarban boosts a volcano inside an island. If you fancy close look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guide will assist you most of the way, and you will see the peculiar environment found on ab active volcano, including volcano rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, nad then unwind with some food before heading back home."
        />
      </div>
    </div>
  );
}

export default TripData;
