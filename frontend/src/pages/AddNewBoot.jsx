import { useState } from "react";
import "./AddNewBoot.scss";

const AddNewBoot = () => {
  const [baujahr, setBaujahr] = useState();
  const [seriennummer, setSeriennummer] = useState("");
  const [bootsart, setBootsart] = useState("");
  const [material, setMaterial] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState();

  const addNewBoot = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("baujahr", baujahr);
    formData.append("seriennummer", seriennummer);
    formData.append("bootsart", bootsart);
    formData.append("material", material);
    formData.append("name", name);
    formData.append("upload_img", image, image.name);
    console.log(image);

    const res = await fetch("http://localhost:5555/api/v1/boot", {
      method: "POST",
      body: formData,
    });
    const { success, result, error } = await res.json();
    if (!success) console.log(error);
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <input
          type="number"
          placeholder="Baujahr"
          required
          value={baujahr}
          onChange={(e) => setBaujahr(e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="Seriennummer"
        required
        value={seriennummer}
        onChange={(e) => setSeriennummer(e.target.value)}
      />
      <select
        name="material"
        id="material"
        required
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
      >
        <option value="" disabled>
          Bitte wähle ein Material
        </option>
        <option value="GFK">GFK</option>
        <option value="Holz">Holz</option>
        <option value="Metall">Metall</option>
        <option value="Pappe">Pappe</option>
        <option value="Kunststoff">Kunststoff</option>
      </select>
      <select
        name="bootsart"
        id="bootsart"
        required
        value={bootsart}
        onChange={(e) => setBootsart(e.target.value)}
      >
        <option value="" disabled>
          Bitte wähle eine Bootsart
        </option>
        <option value="Tretboot">Tretboot</option>
        <option value="Segelboot">Segelboot</option>
        <option value="Luftkissenboot">Luftkissenboot</option>
        <option value="Geisterschiff">Geisterschiff</option>
        <option value="Containerschiff">Containerschiff</option>
        <option value="Motorboot">Motorboot</option>
        <option value="Kreuzfahrtschiffe">Kreuzfahrtschiffe</option>
      </select>
      <input
        type="file"
        required
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input
        className="button"
        type="submit"
        value="Submit"
        onClick={addNewBoot}
      />
    </form>
  );
};
export default AddNewBoot;
