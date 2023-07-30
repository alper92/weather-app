import "./list.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? `The weather is awesome! Go outside and:`
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
