import { useState } from "react";

type Props = {
  onReservationChange: (datetime: string) => void;
};

const ReservationBar: React.FC<Props> = ({ onReservationChange }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const isDateAllowed = (dateStr: string) => {
    const day = new Date(dateStr).getDay();
    return day >= 3 || day === 0;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    if (isDateAllowed(newDate)) {
      setDate(newDate);
      if (time) {
        onReservationChange(`${newDate}T${time.padStart(2, "0")}:00`);
      }
    } else {
      alert("Only Wed–Sun allowed.");
      setDate("");
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTime = e.target.value;
    setTime(newTime);
    if (date) {
      onReservationChange(`${date}T${newTime.padStart(2, "0")}:00`);
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-row">
        <div className="reservation-column">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="reservation-input"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="reservation-column">
          <label>Time</label>
          <select
            value={time}
            onChange={handleTimeChange}
            className="reservation-input"
          >
            <option value="">--</option>
            {Array.from({ length: 9 }, (_, i) => 12 + i).map((hr) => (
              <option key={hr} value={hr}>
                {hr}:00
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReservationBar;
