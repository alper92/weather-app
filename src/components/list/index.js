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
    <section className="list-wrapper">
      <h2>
        {isGoodWeather
          ? `The weather is awesome! Go outside and`
          : "Bad weather outside! Here's what you can do now"}
      </h2>
      <article className="activity-list">
        {randomActivitiy.name ? (
          <p className="random-suggestion">
            <i>{randomActivitiy.name}</i>
          </p>
        ) : (
          <p className="random-suggestion-start">
            <i>
              <FontAwesomeIcon className="info" icon={faCircleInfo} />
              make sure to add some activities
            </i>
          </p>
        )}
        <button
          className="random-button"
          onClick={() => handleRandomActivity()}>
          make random decision
        </button>
      </article>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            {activity.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
