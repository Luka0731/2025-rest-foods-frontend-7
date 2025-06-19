import React, { useEffect, useState } from "react";
import { TableService, type Table } from "../../services/TableService";

const TableMap: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const result = await TableService.getTables();
        setTables(result);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to load tables");
      }
    };
    fetchTables();
  }, []);

  const handleSelect = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const handleReserve = async () => {
    if (selectedId === null) return;

    try {
      await TableService.updateTable(selectedId, { available: false });
      setTables((prev) =>
        prev.map((table) =>
          table.id === selectedId ? { ...table, available: false } : table
        )
      );
      alert(`Table ${selectedId} reserved!`);
      setSelectedId(null);
    } catch (err) {
      console.error(err);
      alert("Failed to reserve table.");
    }
  };

  const isAvailable = (table: Table) => table.available === true;

  if (error) return <div>{error}</div>;
  if (!tables.length) return <div>Loading...</div>;

  return (
    <div className="table-container">
      <div className="table-grid">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`table-item ${
              selectedId === table.id ? "selected" : ""
            } ${!isAvailable(table) ? "disabled" : ""}`}
            onClick={() => isAvailable(table) && handleSelect(table.id)}
          >
            {table.nr}
            {selectedId === table.id && isAvailable(table) && (
              <span className="checkmark">✔</span>
            )}
          </div>
        ))}
      </div>
      <button
        className="reserve-btn"
        onClick={handleReserve}
        disabled={selectedId === null}
      >
        Reserve a Table
      </button>
    </div>
  );
};

export default TableMap;
