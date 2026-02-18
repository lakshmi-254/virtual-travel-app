import { useParams, useNavigate } from "react-router-dom";
import cities from "../data/cities.json";
import Gallery from "../components/Gallery";
import CostCalculator from "../components/CostCalculator";
import ItineraryPlanner from "../components/ItineraryPlanner";

function City() {

  const { id } = useParams();

  const navigate = useNavigate();

  const city = cities.find(c => c.id == id);

  // Safety check
  if (!city) {
    return <h2>City not found</h2>;
  }

  const images = [
    city.image,
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  ];

  const bookTrip = () => {

    const booking = {

      cityId: city.id,
      cityName: city.name,
      days: 3,
      total: city.cost * 3,
      date: new Date().toLocaleDateString()

    };

    localStorage.setItem(
      "booking",
      JSON.stringify(booking)
    );

    alert("Booking Confirmed");

    navigate("/account");

  };

  return (

    <div className="container">

      <img src={city.image} width="400" />

      <h2>{city.name}</h2>

      <p>{city.description}</p>

      <p>Cost per day: ₹{city.cost}</p>

      {/* Gallery */}
      <Gallery images={images} />

      {/* Calculator */}
      <CostCalculator city={city} />

      {/* Itinerary */}
      <ItineraryPlanner city={city} />

      <button onClick={bookTrip}>
        Book Trip
      </button>

    </div>

  );

}

export default City;
