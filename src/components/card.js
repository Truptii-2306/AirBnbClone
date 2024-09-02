import image1 from "../images/image.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        alt={`Image of ${props.name}`}
        className="card--image"
      />
      <div className="card--stats">
        <img className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">(6) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>Life Lessons with {props.name}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
