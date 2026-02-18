import { useState } from "react";

function CostCalculator({ city }) {

  const [days, setDays] = useState(1);
  const [hotel, setHotel] = useState("budget");
  const [food, setFood] = useState(500);
  const [transport, setTransport] = useState("bus");

  const hotelCost = {
    budget: 1000,
    mid: 2000,
    luxury: 4000
  };

  const transportCost = {
    bus: 300,
    train: 600,
    flight: 2000
  };

  const total =
    days *
    (
      hotelCost[hotel] +
      Number(food) +
      transportCost[transport]
    );

  return (

    <div>

      <h2>Cost Calculator</h2>

      <input
        type="number"
        value={days}
        onChange={(e) =>
          setDays(e.target.value)
        }
      />

      <select
        onChange={(e) =>
          setHotel(e.target.value)
        }
      >
        <option value="budget">Budget</option>
        <option value="mid">Mid</option>
        <option value="luxury">Luxury</option>
      </select>

      <input
        type="number"
        value={food}
        onChange={(e) =>
          setFood(e.target.value)
        }
      />

      <select
        onChange={(e) =>
          setTransport(e.target.value)
        }
      >
        <option value="bus">Bus</option>
        <option value="train">Train</option>
        <option value="flight">Flight</option>
      </select>

      <h3>Total Cost: ₹{total}</h3>

      <h4>Cost per day: ₹{total / days}</h4>

    </div>

  );

}

export default CostCalculator;
