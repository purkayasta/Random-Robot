import "./card.style.css";

const Card = ({ robot }) => {
  return (
    <div className="card-container">
      <img
        src={`http://robohash.org/${robot.id}?size=180x180`}
        alt={robot.name}
      />
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </div>
  );
};

export default Card;
