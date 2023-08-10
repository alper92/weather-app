import "./edit.css";
import { activityData } from "../data/data";

export default function ListAll({
  activities,
  onHandleDeleteActivity,
  setActivities,
}) {
  return (
    <section>
      <h2>Edit all activities overview:</h2>
      <article className="edit-all-card">
        <ul>
          {activities.map(({ id, name, isForGoodWeather }) => (
            <li key={id}>
              <button
                className="delete-item"
                onClick={() => onHandleDeleteActivity(id)}>
                X
              </button>
              <b>
                <q>{name}</q>{" "}
              </b>
              was saved as a
              {isForGoodWeather
                ? " good weather activity"
                : " bad weather activity"}
            </li>
          ))}
        </ul>
        <button
          className="data-button"
          onClick={() => setActivities(activityData)}>
          set default acivities
        </button>
        <button className="data-button" onClick={() => setActivities([])}>
          delete all acivities
        </button>
      </article>
    </section>
  );
}
