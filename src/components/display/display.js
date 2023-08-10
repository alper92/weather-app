import "./display.css";

export default function Display({ condition, temperature }) {
  return (
    <article className="fetched-display">
      <p>{condition}</p>
      <p>{temperature}</p>
    </article>
  );
}
