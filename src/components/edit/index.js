import "./edit.css";
import { activityData } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EditAll({
  activities,
  onHandleDeleteActivity,
  setActivities,
}) {
  const goodWeatherActivities = activities.filter(
    (count) => count.isForGoodWeather === true
  ).length;
  const badWeatherActivities = activities.filter(
    (count) => count.isForGoodWeather === false
  ).length;

  return (
    <section>
      <h2>Edit all activities:</h2>
      <article className="edit-all-card">
        <h3>
          {goodWeatherActivities} ☀️ / {badWeatherActivities} 🌧️
        </h3>
        <ul>
          {activities.map(({ id, name, isForGoodWeather }) => (
            <li key={id}>
              <button
                className="delete-item"
                aria-label="delete this item"
                onClick={() => onHandleDeleteActivity(id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <b>{name} </b>
              {isForGoodWeather ? " (good weather)" : " (bad weather)"}
            </li>
          ))}
        </ul>
        <button
          className="data-button"
          aria-label="set default activities"
          onClick={() => setActivities(activityData)}>
          set default
        </button>
        <button
          className="data-button"
          aria-label="delete all activities"
          onClick={() => setActivities([])}>
          delete all
        </button>
      </article>
    </section>
  );
}
