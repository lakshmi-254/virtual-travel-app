import { useState, useEffect } from "react";

function ItineraryPlanner({ cityId }) {

  const [plan, setPlan] = useState(
    JSON.parse(localStorage.getItem("plan"))
    || {}
  );

  const updatePlan = (day, value) => {

    const newPlan = {
      ...plan,
      [day]: value
    };

    setPlan(newPlan);

    localStorage.setItem(
      "plan",
      JSON.stringify(newPlan)
    );

  };

  return (

    <div>

      <h2>Itinerary Planner</h2>

      {[1,2,3,4,5].map(day => (

        <div key={day}>

          <h4>Day {day}</h4>

          <textarea
            value={plan[day] || ""}
            onChange={(e) =>
              updatePlan(
                day,
                e.target.value
              )
            }
            placeholder="Enter plan"
          />

        </div>

      ))}

    </div>

  );

}

export default ItineraryPlanner;
