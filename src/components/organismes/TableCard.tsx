import React, { useEffect, useState } from "react";
import { TableService, type Table } from "../../services/TableService";
import {
  ReservationService,
  type Reservation,
} from "../../services/ReservationService";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TableChoice from "../organismes/Table";
import ReservationBar from "../molecules/ReservationBar";
import ReservationForm from "../organismes/ReservationForm";
import "../../styling/TableMap.css";

const TableMap: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [error, setError] = useState("");
  const [start_time, setStartTime] = useState<string>("");
  const [end_time, setEndTime] = useState<string>("");
  const [reservedTableIds, setReservedTableIds] = useState<number[]>([]);
  const [selectedTableId, setSelectedTableId] = useState<number | null>(null);

  useEffect(() => {
    TableService.getTables()
      .then((data) => setTables(data))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (start_time && end_time) {
      ReservationService.getReservationsByDateTime(start_time, end_time)
        .then((reservations: Reservation[]) => {
          const ids = reservations.map((r) => r.table_id);
          setReservedTableIds(ids);
        })
        .catch((err) => console.error("Reservation fetch error:", err));
    } else {
      setReservedTableIds([]);
    }
  }, [start_time, end_time]);

  const handleTableClick = (tableId: number) => {
    if (!reservedTableIds.includes(tableId)) {
      setSelectedTableId(tableId);
    }
  };

  const handleReservationChange = (start: string, end: string) => {
    setStartTime(start);
    setEndTime(end);
  };

  if (error) return <div>{error}</div>;
  if (!tables.length) return <div>Loading...</div>;

  return (
    <div className="table-container">
      <div className="date-header">
        <CalendarTodayIcon />
        <ReservationBar onReservationChange={handleReservationChange} />
      </div>

      <div className="table-grid">
        {tables.map((table) => (
          <TableChoice
            key={table.id}
            id={table.id}
            seats={table.seats}
            isReserved={reservedTableIds.includes(table.id)}
            onClick={() => handleTableClick(table.id)}
          />
        ))}
      </div>

      {selectedTableId && start_time && end_time && (
        <div className="reservation-form-container">
          <h3>Make a Reservation for Table {selectedTableId}</h3>
          <ReservationForm
            tableId={selectedTableId}
            initialStartTime={start_time}
            initialEndTime={end_time}
          />
        </div>
      )}
    </div>
  );
};

export default TableMap;
