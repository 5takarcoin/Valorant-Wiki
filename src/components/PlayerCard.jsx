import { Link } from "react-router-dom";

const PlayerCard = ({ name, description, image, roleIcon }) => {
  return (
    <Link to={name} className="resetLink">
      <div className="playerCard row">
        <div className="col-6">
          <h2>{name}</h2>
          <img src={roleIcon} alt="" />
        </div>
        {/* <p>{description}</p> */}
        <img className="col-6" src={image} alt="" />
      </div>
    </Link>
  );
};

export default PlayerCard;
