import { uid } from "uid";
import "./form.css";

export default function Form({ onAddActivity }) {
  // ----------------- handle submit function -----------------
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      id: uid(),
      name: event.target.name.value,
      isForGoodWeather: event.target.isForGoodWeather.checked,
    };

    onAddActivity(data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <section>
      <h2>Add new Activity</h2>
      <form className="activity-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="activity-form__label">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            className="activity-form__input"
          />
        </label>

        <label htmlFor="good-weather" className="activity-form__label">
          Good-weather activity:
          <input
            type="checkbox"
            id="good-weather"
            name="isForGoodWeather"
            className="activity-form__input"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}