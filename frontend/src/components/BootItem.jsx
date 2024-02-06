import { Link } from "react-router-dom";

const BootItem = ({
  baujahr,
  bootsart,
  material,
  reservierstatus,
  upload_img,
  id,
}) => {
  return (
    <Link to={`/details/${id}`}>
      <div>
        <img
          src={`http://localhost:5555/api/v1/images/${upload_img}`}
          alt={bootsart}
        />
        <h3>Bootsart: {bootsart} </h3>
        <h3>Reservierstatus: {reservierstatus.status ? "✅" : "🅾️"} </h3>
      </div>
    </Link>
  );
};

export default BootItem;
