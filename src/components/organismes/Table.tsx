import React from "react";
import type { Table } from "../../services/TableService";
import "../../styling/TableChoice.css";

type Props = Table & {
  isReserved: boolean;
  onClick?: () => void;
};

const TableChoice: React.FC<Props> = ({ id, seats, isReserved, onClick }) => {
  const handleClick = () => {
    if (!isReserved && onClick) {
      onClick();
    }
  };

  const renderCard = () => {
    switch (seats) {
      case 2:
        return (
          <div className={`wrapper ${isReserved ? "reserved" : ""}`}>
            <div className="bar horizontal top"></div>
            <div className="bar horizontal bottom"></div>
            <div className="center-box-2">{id}</div>
          </div>
        );

      case 4:
        return (
          <div className={`wrapper ${isReserved ? "reserved" : ""}`}>
            <>
              <div className="bar horizontal top"></div>
              <div className="bar horizontal top"></div>
            </>
            <>
              <div className="bar horizontal bottom"></div>
              <div className="bar horizontal bottom"></div>
            </>
            <div className="center-box-4">{id}</div>
          </div>
        );

      case 6:
        return (
          <div className={`wrapper ${isReserved ? "reserved" : ""}`}>
            <>
              <div className="bar horizontal top"></div>
              <div className="bar horizontal top"></div>
              <div className="bar horizontal top"></div>
            </>
            <>
              <div className="bar horizontal bottom" />
              <div className="bar horizontal bottom" />
              <div className="bar horizontal bottom" />
            </>
            <div className="center-box-6">{id}</div>
          </div>
        );

      case 8:
        return (
          <div className={`wrapper ${isReserved ? "reserved" : ""}`}>
            <>
              <div className="bar horizontal top"></div>
              <div className="bar horizontal top"></div>
              <div className="bar horizontal top"></div>
              <div className="bar horizontal top"></div>
            </>
            <>
              <div className="bar horizontal bottom" />
              <div className="bar horizontal bottom" />
              <div className="bar horizontal bottom" />
              <div className="bar horizontal bottom" />
            </>
            <div className="center-box-8">{id}</div>
          </div>
        );

      default:
        return (
          <div className={`wrapper ${isReserved ? "reserved" : ""}`}>
            <div className="center-box-default">Table {id}</div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: isReserved ? "#ff6b6b" : "transparent",
        borderRadius: "8px",
        padding: "8px",
        cursor: isReserved ? "not-allowed" : "pointer",
        userSelect: "none",
      }}
      aria-disabled={isReserved}
      role="button"
      tabIndex={isReserved ? -1 : 0}
      onKeyDown={(e) => {
        if (!isReserved && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {renderCard()}
    </div>
  );
};

export default TableChoice;
