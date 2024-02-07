import { useEffect, useState } from "react"



const AddReservierung = () => {
  const [allBoot,setAllBoot] = useState([])
  const [start,setStart] = useState(new Date())
  const [end,setEnd] = useState(new Date(+1))
  const [selectedBoot,setSelectedBoot] = useState("")

  const addReservierung = async (e) => {
    e.preventDefault();
    if (selectedBoot) {
      try {
        const res = await fetch(`http://localhost:5555/api/v1/boot/${selectedBoot}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            reservierstatus: {
              status: false, 
              start: start, 
              end: end 
            }
          })
        });
        const data = await res.json();
        if (res.ok) {
          console.log("Reservierung Erfolgreich", data);
        } else {
          console.error("Fehler beim Hinzufügen der Reservierung", data);
        }
      } catch (err) {
        console.error("Fehler beim Senden der Anfrage", err);
      }
    }
  };
console.log(selectedBoot);
  const toDateTimeLocal = (date) => {
    const ten = (i) => (i < 10 ? '0' : '') + i;
    const YYYY = date.getFullYear();
    const MM = ten(date.getMonth() + 1);
    const DD = ten(date.getDate());
    const HH = ten(date.getHours());
    const II = ten(date.getMinutes());
    return `${YYYY}-${MM}-${DD}T${HH}:${II}`;
  };

  useEffect(() => {
    const fetchFreeBoats = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/v1/boot");
        const { success, result } = await response.json();
        console.log(result);
        if (success) {
          const filtered = result.filter(boot => boot.reservierstatus.status);
          setAllBoot(filtered);
          console.log(filtered);
        }
      } catch (e) {
        console.error(e);
      }
    };
    const startDate = new Date();
    setStart(toDateTimeLocal(startDate));


    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 2); 
    setEnd(toDateTimeLocal(endDate));
    fetchFreeBoats();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedBoot(e.target.value)
  }

  console.log(start);
  console.log(end);
  console.log(selectedBoot);

  return ( 
    <form>
      <h1>Reservierung</h1>
      <div>
        <label>Startdaten</label>
        <input type="datetime-local" placeholder="Startdatum" value={start} onChange={(e) => setStart(e.target.value)}/>
      </div>
      <div>
        <label>Enddaten</label>
        <input type="datetime-local" placeholder="Enddatum" value={end} onChange={(e) => setEnd(e.target.value)}/>
      </div>
      <select value={selectedBoot} onChange={handleSelectChange}>
        <option value="" disabled>Welches Boot</option>
        {allBoot.map(boot => <option value={boot.id} key={boot.id}>{boot.name}</option>)}
      </select>
      <button onClick={addReservierung} type="submit">submit</button>
    </form>
  );
}

export default AddReservierung;