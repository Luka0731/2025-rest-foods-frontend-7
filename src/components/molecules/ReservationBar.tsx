import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  onReservationChange: (start: string, end: string) => void;
};

const ReservationBar: React.FC<Props> = ({ onReservationChange }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [end_time, setEndTime] = useState("");

  const isDateAllowed = (date: Date) => {
    const day = date.getDay();
    return day >= 3 || day === 0;
  };

  const buildDateTimeString = (date: Date, hour: string) => {
    const isoDate = date.toISOString().split("T")[0];
    return `${isoDate}T${hour.padStart(2, "0")}:00`;
  };

  const notifyReservationChange = (
    date: Date,
    startHour: string,
    endHour: string
  ) => {
    const start = buildDateTimeString(date, startHour);
    const end = endHour ? buildDateTimeString(date, endHour) : start;
    onReservationChange(start, end);
  };

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      setDate(newDate);
      if (time) {
        notifyReservationChange(newDate, time, end_time);
      }
    } else {
      setDate(null);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTime = e.target.value;
    setTime(newTime);
    if (date) {
      notifyReservationChange(date, newTime, end_time);
    }
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newEndTime = e.target.value;
    setEndTime(newEndTime);
    if (date && time) {
      notifyReservationChange(date, time, newEndTime);
    }
  };

  const startHour = parseInt(time, 10);
  const endTimeOptions =
    !isNaN(startHour) && startHour < 24
      ? Array.from({ length: 24 - startHour }, (_, i) => startHour + i + 1)
      : [];

  return (
    <div className="reservation-container">
      <div className="reservation-row">
        <div className="reservation-column">
          <label>Date</label>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            filterDate={isDateAllowed}
            minDate={new Date()}
            placeholderText="Select a date (Wed–Sun)"
            className="reservation-input"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="reservation-column">
          <label>Start Time</label>
          <select
            value={time}
            onChange={handleTimeChange}
            className="reservation-input"
          >
            <option value="">--</option>
            {Array.from({ length: 12 }, (_, i) => 12 + i).map((hr) => (
              <option key={hr} value={hr.toString()}>
                {hr}:00
              </option>
            ))}
          </select>
        </div>
        <div className="reservation-column">
          <label>End Time</label>
          <select
            value={end_time}
            onChange={handleEndTimeChange}
            className="reservation-input"
            disabled={!time}
          >
            <option value="">--</option>
            {endTimeOptions.map((hr) => (
              <option key={hr} value={hr.toString()}>
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
