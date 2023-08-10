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
    <section className="form-wrapper">
      <h2>Add activities:</h2>
      <form className="activity-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="activity-form__label"></label>
        <input
          type="text"
          placeholder="type in your activity here..."
          id="name"
          name="name"
          className="activity-form__input"
          required
        />
        <label htmlFor="good-weather" className="activity-form__label">
          Is it a good weather acitivity?
        </label>
        <input
          type="checkbox"
          id="good-weather"
          name="isForGoodWeather"
          className="activity-form__input"
        />
        <button className="add-activity-button" type="submit">
          add activity
        </button>
      </form>
    </section>
  );
}
