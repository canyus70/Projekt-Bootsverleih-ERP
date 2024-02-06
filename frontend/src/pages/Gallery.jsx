import { useEffect, useState } from "react";
import BootItem from "../components/BootItem";

const Gallery = () => {
  const [allBoots, setAllBoots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5555/api/v1/boot")
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) console.log(error);
        setAllBoots(result);
      });
  }, []);

  return (
    <section>
      {allBoots.map((boot, index) => (
        <BootItem key={index} {...boot} id={boot.id} />
      ))}
    </section>
  );
};

export default Gallery;
