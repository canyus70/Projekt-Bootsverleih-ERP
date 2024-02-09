import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import './AddReservation.scss'
import 'react-datepicker/dist/react-datepicker.css';
import NavBar from "../components/NavBar";


const AddReservierung = () => {
  const [allBoot, setAllBoot] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedBoot, setSelectedBoot] = useState("");

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/v1/boot");
        const { success, result } = await response.json();
        if (success) {
          setAllBoot(result);
        }
      } catch (e) {
        console.error("Fehler beim Laden der Boote", e);
      }
    };

    fetchBoats();
  }, []);

  const addReservierung = async (e) => {
    e.preventDefault();
    if (selectedBoot) {
      try {
        const res = await fetch(`http://localhost:5555/api/v1/boot/${selectedBoot}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reservierstatus: {
              status: false,
              start: startDate.toISOString(),
              end: endDate.toISOString(),
            },
          }),
        });
        const data = await res.json();
        if (res.ok) {
          console.log("Reservierung erfolgreich", data);
        } else {
          console.error("Fehler beim Hinzufügen der Reservierung", data);
        }
      } catch (err) {
        console.error("Fehler beim Senden der Anfrage", err);
      }
    }
  };

  const isDateAvailable = (date) => {
    console.log('Überprüfe Verfügbarkeit für Datum:', date, 'für Boot:', selectedBoot);
  
    if (!selectedBoot) return false; // Wenn kein Boot ausgewählt ist, alle Daten als verfügbar behandeln
  
    const boot = allBoot.find((boot) => boot.id === selectedBoot);
    if (!boot) return false; // Wenn das ausgewählte Boot nicht gefunden wurde, Datum als verfügbar behandeln
  
    const startReservierung = boot.reservierstatus.start && new Date(boot.reservierstatus.start);
    const endReservierung = boot.reservierstatus.end && new Date(boot.reservierstatus.end);
  
    const available = !startReservierung || !endReservierung || (date < startReservierung || date > endReservierung);
  
    console.log(`Boot ${boot.name} Verfügbarkeit:`, available);
  
    return available;
  };
  
  // Aktualisiere die onChange Methode des select Elements, um die DatePicker Komponenten zu aktualisieren
  const handleSelectChange = (e) => {
    setSelectedBoot(e.target.value);
    // Trigger eine Aktualisierung der DatePicker, um die Verfügbarkeit für das ausgewählte Boot zu prüfen
    setStartDate(new Date()); // Setze das Startdatum erneut, um die Komponente zu zwingen, sich zu aktualisieren
    setEndDate(new Date()); // Setze das Enddatum erneut
  };
  



  return (
    <div className="container">
    <form onSubmit={addReservierung}>
      <h1>Reservierung hinzufügen</h1>

      <div className="form-group">
        <label htmlFor="start">Startdatum:</label>
        <DatePicker
          className="react-datepicker-unavailable"
          id="start"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          filterDate={isDateAvailable}
          dateFormat="P"
          dayClassName={(date) => isDateAvailable(date) ? 'available' : 'unavailable'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="end">Enddatum:</label>
        <DatePicker
          popperPlacement="bootom"
          id="end"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          filterDate={isDateAvailable}
          dateFormat="P"
          minDate={startDate}
          dayClassName={(date) => isDateAvailable(date) ? 'available' : 'unavailable'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="boot">Boot auswählen:</label>
        <select id="boot" value={selectedBoot} onChange={handleSelectChange}>
          <option value="">Bitte wählen Sie ein Boot</option>
          {allBoot.map((boot) => (
            <option key={boot.id} value={boot.id}>
              {boot.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Reservierung hinzufügen</button>
    </form>
    </div>
  );
};

export default AddReservierung;
