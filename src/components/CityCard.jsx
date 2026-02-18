
import { Link } from "react-router-dom";

function CityCard({ city }) {

  return (

    <Link to={`/city/${city.id}`}>

      <div className="card">

        <img
          src={city.image}
          width="100%"
          height="200"
        />

        <h3>{city.name}</h3>

        <p>₹{city.cost}/day</p>

        <p>{city.bestTime}</p>

      </div>

    </Link>

  );

}

export default CityCard;
