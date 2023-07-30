import "./display.css";

export default function Display({ condition, temperature }) {
  return (
    <section className="fetched-display">
      <p>{condition}</p>
      <p>{temperature}</p>
    </section>
  );
}
