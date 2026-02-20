import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import cities from "../data/cities.json";
import Gallery from "../components/Gallery";
import CostCalculator from "../components/CostCalculator";
import ItineraryPlanner from "../components/ItineraryPlanner";

function City() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [days, setDays] = useState(1);   // ✅ MUST BE HERE (top)

  const city = cities.find((c) => c.id == id);

  if (!city) {
    return <h2>City not found</h2>;
  }

  const images = [
    city.image,
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  ];

  const bookTrip = () => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const existingBookings =
      JSON.parse(localStorage.getItem(`bookings_${currentUser.email}`)) || [];

    const newBooking = {
      cityId: city.id,
      cityName: city.name,
      days: days,                      // ✅ dynamic value
      total: city.cost * days,         // ✅ correct total
      date: new Date().toLocaleDateString()
    };

    const updatedBookings = [...existingBookings, newBooking];

    localStorage.setItem(
      `bookings_${currentUser.email}`,
      JSON.stringify(updatedBookings)
    );

    alert("Booking Confirmed!");
    navigate("/account");
  };

  return (
    <div className="container">

      <img src={city.image} width="400" alt={city.name} />

      <h2>{city.name}</h2>
      <p>{city.description}</p>
      <p><strong>Cost per day:</strong> ₹{city.cost}</p>

      <Gallery images={images} />

      {/* ✅ PASS days and setDays */}
      <CostCalculator
        city={city}
        days={days}
        setDays={setDays}
      />

      <ItineraryPlanner city={city} />

      <br />

      <button onClick={bookTrip}>
        Book Trip
      </button>

    </div>
  );
}

export default City;