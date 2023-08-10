import { useState } from "react";
import "./decider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

export default function Decider({ activities, isGoodWeather }) {
  const [randomActivitiy, setRandomActivity] = useState([]);
  const activityCount = activities.length;

  function handleRandomActivity() {
    if (activityCount > 0) {
      const randomActivitiy =
        activities[Math.floor(Math.random() * activities.length)];
      setRandomActivity(randomActivitiy);
    }
  }

  return (
    <section className="display-activity-wrapper">
      <h2>
        {isGoodWeather
          ? `The weather is awesome! Go outside and`
          : "Bad weather outside! You should"}
      </h2>
      <article>
        {randomActivitiy.name ? (
          <p className="random-suggestion">{randomActivitiy.name}</p>
        ) : (
          <p className="random-suggestion-start">
            <i>
              <FontAwesomeIcon className="info" icon={faInfo} />
              you have {activityCount} activities to choose
            </i>
          </p>
        )}
      </article>
      <button className="random-button" onClick={() => handleRandomActivity()}>
        let the app decide
      </button>
    </section>
  );
}
