
import cities from "../data/cities.json";
import CityCard from "../components/CityCard";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="container">

      <h1>Virtual Travel App</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/account">
        <button>Account</button>
      </Link>

      <div className="grid">

        {cities.map(city => (

          <CityCard
            key={city.id}
            city={city}
          />

        ))}

      </div>

    </div>

  );

}

export default Home;
