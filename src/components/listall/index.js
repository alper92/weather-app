import "./listall.css";
export default function ListAll({ activities, onHandleDeleteActivity }) {
  return (
    <>
      <h2>All activities:</h2>

      <ul className="listall">
        {activities.map(({ id, name, isForGoodWeather }) => (
          <li key={id}>
            <button
              className="delete"
              onClick={() => onHandleDeleteActivity(id)}
            >
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
    </>
  );
}
