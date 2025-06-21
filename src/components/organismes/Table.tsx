import React from "react";
import type { Table } from "../../services/TableService";

const TableChoice: React.FC<Table> = ({ id, seats }) => {
  const renderCard = () => {
    switch (seats) {
      case 2:
        return (
          <div className="wrapper">
            <div className="bar horizontal top"></div>
            <div className="bar horizontal bottom"></div>
            <div className="center-box-2">{id}</div>
          </div>
        );

      case 4:
        return (
          <div className="wrapper">
            <div className="bar horizontal top"></div>
            <div className="bar horizontal bottom"></div>
            <div className="bar vertical left"></div>
            <div className="bar vertical right"></div>
            <div className="center-box-4">{id}</div>
          </div>
        );

      case 6:
        return (
          <div className="wrapper">
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
            <div className="bar vertical left"></div>
            <div className="bar vertical right"></div>
            <div className="center-box-6">{id}</div>
          </div>
        );

      case 8:
        return (
          <div className="wrapper">
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
            <div className="bar vertical left"></div>
            <div className="bar vertical right"></div>
            <div className="center-box-4">{id}</div>
          </div>
        );

      default:
        return <div className="center-box-default">Table {id}</div>;
    }
  };

  return <>{renderCard()}</>;
};

export default TableChoice;
