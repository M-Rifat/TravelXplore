import "./TripStyles.css";
import TripFrame from "./TripFrame";
import Trip1 from "../assets/place7.jpg";
import Trip2 from "../assets/place8.jpg";
import Trip3 from "../assets/place9.jpg";
import Trip4 from "../assets/place10.jpg";
import Trip5 from "../assets/place11.jpg";
import Trip6 from "../assets/place12.jpg";

function TripData() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can dicover unique destinations using Maps.</p>
      <div className="tripCard">
        <TripFrame
          recentImg={Trip1}
          heading="Bandarban"
          text="Another gem in the Chittagong Hill Tracts, Bandarban is known for its picturesque landscapes, tribal villages, and hiking opportunities. The Nilgiri Hills and Boga Lake are among its highlights. Bandarban's lush green hills, tribal villages, and unique culture attract many visitors. The Nilgiri Hills provide panoramic views, while Boga Lake is a high-altitude lake accessible by a challenging trek. Don't miss the Buddha Dhatu Jadi, the largest Buddhist temple in Bangladesh."
        />

        <TripFrame
          recentImg={Trip2}
          heading="Kuakata"
          text="Positioned on the southern coast, Kuakata is renowned for its stunning sunrise and sunset views over the Bay of Bengal. The pristine beach and tranquility make it a serene getaway. Kuakata is famous for its pristine beach where visitors can witness both sunrise and sunset over the Bay of Bengal. It's a peaceful destination for relaxation, beach walks, and enjoying local seafood."
        />
        <TripFrame
          recentImg={Trip3}
          heading="Srimangal"
          text="Often referred to as the Tea Capital of Bangladesh, Srimangal is famous for its tea gardens and lush green landscapes. It's also a great spot for birdwatching and exploring the Lawachara National Park. Srimangal is famous for its tea estates and serene landscapes. It's a paradise for birdwatchers with species like the hoolock gibbons and different types of parrots. Don't miss exploring the lush Lawachara National Park and the fascinating Monipuri tribal culture."
        />
      </div>

      <div className="tripCard">
        <TripFrame
          recentImg={Trip4}
          heading="Lalbagh Fort"
          text="Located in Dhaka, the capital city, Lalbagh Fort is a historical site that dates back to the Mughal era. The fort complex includes beautifully designed structures, gardens, and a mausoleum. Located in Dhaka, Lalbagh Fort is an unfinished Mughal structure. The complex includes the mausoleum of Bibi Pari, Lalbagh Mosque, and the Diwan-i-Aam. It's an architectural gem and a glimpse into Bangladesh's history."
        />

        <TripFrame
          recentImg={Trip5}
          heading="Ratargul Swamp Forest"
          text="Situated in Gowainghat upazila of Sylhet, Ratargul Swamp Forest is a unique destination with submerged trees and vibrant greenery. It's the only swamp forest in Bangladesh and offers boat rides to explore its beauty. Ratargul is a freshwater swamp forest located in Sylhet. It's a unique ecosystem with submerged trees, which can be explored by boat. The area is rich in biodiversity and a favorite among nature lovers."
        />
        <TripFrame
          recentImg={Trip6}
          heading="Jaflong"
          text=" Nestled in the Sylhet region, Jaflong is known for its tea gardens, rolling hills, and the Dawki River with its clear blue waters. It's a great spot for nature photography and relaxation. Jaflong is known for its tea gardens, rolling hills, and the Dawki River. The nearby Dawki Bridge connects Bangladesh and India. Visitors can take boat rides on the river and enjoy panoramic views of the surrounding landscape."
        />
      </div>

      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
    </section>

    </div>
  );
}

export default TripData;
