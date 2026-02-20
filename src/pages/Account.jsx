import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Account() {

  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {

    if (!currentUser) {
      navigate("/login");
      return;
    }

    const savedBookings =
      JSON.parse(localStorage.getItem(`bookings_${currentUser.email}`)) || [];

    setBookings(savedBookings);

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const handleDelete = (index) => {

    const updatedBookings = bookings.filter((_, i) => i !== index);

    localStorage.setItem(
      `bookings_${currentUser.email}`,
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Welcome {currentUser?.email}</h2>

      <h3>Your Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <p><strong>City:</strong> {b.cityName}</p>
            <p><strong>Days:</strong> {b.days}</p>
            <p><strong>Total:</strong> ₹{b.total}</p>
            <p><strong>Date:</strong> {b.date}</p>

            <button onClick={() => handleDelete(index)}>
              Delete Booking
            </button>
          </div>
        ))
      )}

      <br />

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default Account;