import { useState } from "react";

const AddNewBoot = () => {
  const [baujahr, setBaujahr] = useState(0);
  const [seriennummer, setSeriennummer] = useState("");
  const [bootsart, setBootsart] = useState("");
  const [material, setMaterial] = useState("");
  const [image, setImage] = useState();

  const addNewBoot = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("baujahr", baujahr);
    formData.append("seriennummer", seriennummer);
    formData.append("bootsart", bootsart);
    formData.append("material", material);
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
    <form>
      <input
        type="number"
        placeholder="Baujahr"
        required
        value={baujahr}
        onChange={(e) => setBaujahr(e.target.value)}
      />
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
        <option value="" selected disabled>
          Bitte wähle ein Material
        </option>
        <option value="GFK">GFK</option>
        <option value="Holz">Holz</option>
        <option value="Metall">Metall</option>
        <option value="Pappe">Pappe</option>
      </select>
      <select
        name="bootsart"
        id="bootsart"
        required
        value={bootsart}
        onChange={(e) => setBootsart(e.target.value)}
      >
        <option value="" selected disabled>
          Bitte wähle eine Bootsart
        </option>
        <option value="Tretboot">Tretboot</option>
        <option value="Segelboot">Segelboot</option>
        <option value="Luftkissenboot">Luftkissenboot</option>
        <option value="Geisterschiff">Geisterschiff</option>
        <option value="Containerschiff">Containerschiff</option>
      </select>
      <input
        type="file"
        required
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input type="submit" value="Submit" onClick={addNewBoot} />
    </form>
  );
};

export default AddNewBoot;
