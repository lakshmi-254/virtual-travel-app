import cities from "../data/cities.json";
import { useNavigate } from "react-router-dom";

function Account() {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user"));

  const booking =
    JSON.parse(localStorage.getItem("booking"));

  if (!user) {

    return (

      <div className="container">

        <h2>Please login first</h2>

        <button onClick={() => navigate("/login")}>
          Go Login
        </button>

      </div>

    );

  }

  const city =
    booking &&
    cities.find(
      c => c.id === booking.cityId
    );

  const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("booking");

    alert("Logged out");

    navigate("/");

  };

  return (

    <div className="container">

      <h1>Welcome {user.name}</h1>

      <button onClick={logout}>
        Logout
      </button>

      <h2>Your Booking</h2>

      {city ? (

        <div>

          <img
            src={city.image}
            width="300"
          />

          <h3>{city.name}</h3>

          <p>{city.description}</p>

          <p>Best Time: {city.bestTime}</p>

          <p>Total Cost: ₹{booking.total}</p>

          <p>Date: {booking.date}</p>

          <h3>
            Booking Confirmed ✅
          </h3>

        </div>

      ) : (

        <p>No booking yet</p>

      )}

    </div>

  );

}

export default Account;
