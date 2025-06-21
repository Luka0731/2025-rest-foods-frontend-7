import React, { useEffect, useState } from "react";
import { TableService, type Table } from "../../services/TableService";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TableChoice from "../organismes/Table";
import { LocalDate } from "@js-joda/core";

const TableMap: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [error, setError] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = LocalDate.now().toString();
    setDate(today);

    TableService.getTables()
      .then((data) => setTables(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>{error}</div>;
  if (!tables.length) return <div>Loading...</div>;

  return (
    <div className="table-container">
      <div className="date-header">
        <h2>{date}</h2>
        <CalendarTodayIcon />
        <span>{date}</span>
      </div>
      <div className="table-grid">
        {tables.map((table) => (
          <TableChoice key={table.id} id={table.id} seats={table.seats} />
        ))}
      </div>
    </div>
  );
};

export default TableMap;
