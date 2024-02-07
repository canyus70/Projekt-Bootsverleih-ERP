import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import kalender from "../images/kalender.png";

const Details = () => {
  const id = useParams();
  console.log(id);
  const [boot, setBoot] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5555/api/v1/boot/${id.bootId}`)
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) console.log(error);
        setBoot(result);
      });
  }, [id]);

  console.log(boot);
  return (
    <div>
      <img
        src={`http://localhost:5555/api/v1/images/${boot.upload_img}`}
        alt={boot.bootsart}
      />

      <h1>Boat Detail</h1>
      <h3>{boot?.bootart}</h3>
      <p>Serienr: {boot?.seriennummer}</p>
      <p>Baujahr: {boot?.baujahr}</p>
      <p>Material: {boot?.material}</p>

      <h4>Reservierung</h4>
      <Link to="/new-reservation">
      <div>
        {!boot.reservierstatus?.status ? (
          <p>
            reserviert von :{""} {boot.reservierstatus?.start.slice(0,10)} bis {""}
            {boot.reservierstatus?.end.slice(0,10)}
          </p>
        ) : (
          <img src={kalender} alt="kalender" />
        )}
      </div>
      </Link>
    </div>
  );
};

export default Details;
