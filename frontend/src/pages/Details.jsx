import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import kalender from "../images/kalender.png";
import Calendar from 'react-calendar'; 
import './Detail.scss'

const Details = () => {
  const { bootId } = useParams(); 
  const [boot, setBoot] = useState({});
  
  
  useEffect(() => {
    fetch(`http://localhost:5555/api/v1/boot/${bootId}`)
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) console.log(error);
        setBoot(result);
      });
  }, [bootId]);

  return (
    <div className="container_details">
      <h1>Detail-Seite</h1>
      <img
        src={`http://localhost:5555/api/v1/images/${boot.upload_img}`}
        alt={boot.bootsart}
      />
      <h3>{boot?.bootsart}</h3> 
      <h2>{boot?.name}</h2>
      <p>Seriennummer: {boot?.seriennummer}</p> 
      <p>Baujahr: {boot?.baujahr}</p>
      <p>Material: {boot?.material}</p>

      <h4>Reservierungen</h4>
      <div className="res_container">
        {boot.reservierungen?.length > 0 ? (
          <ul>
            {boot.reservierungen.map(reservierung => (
              <li key={reservierung._id}>
                Reserviert von: {reservierung.start.slice(0, 10)} bis {reservierung.end.slice(0, 10)}
              </li>
            ))}
          </ul>
        ) : (
          <Link to="/new-reservation">
            <img src={kalender} alt="kalender" className="img_detail"/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Details;
