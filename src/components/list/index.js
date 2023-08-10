import { useState } from "react";
import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function List({ activities, isGoodWeather }) {
  const [randomActivitiy, setRandomActivity] = useState([]);

  function handleRandomActivity() {
    if (activities.length > 0) {
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
              <FontAwesomeIcon className="info" icon={faCircleInfo} />
              make sure to add some activities
            </i>
          </p>
        )}
      </article>
      <button className="random-button" onClick={() => handleRandomActivity()}>
        randomly decide
      </button>
    </section>
  );
}
