import { Link } from "react-router-dom";
import "./BootItem.scss";

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
      <section className="itemWrapper">
        <div>
        <img
          src={`http://localhost:5555/api/v1/images/${upload_img}`}
          alt={bootsart}
          />
        </div>
        <article>
        <h3>Bootsart: {bootsart} </h3>
        <h3>Reservierstatus: {reservierstatus.status ? "✅" : "🅾️"} </h3>
        </article>
      </section>
    </Link>
  );
};

export default BootItem;
