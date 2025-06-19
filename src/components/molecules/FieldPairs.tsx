import React from "react";

interface FieldPairProps {
  label: string;
  value: React.ReactNode;
  labelClassName?: string;
  valueClassName?: string;
}

const FieldPair: React.FC<FieldPairProps> = ({ label, value }) => (
  <div className="line">
    <p className="label">{label}</p>
    <p className="value">{value}</p>
  </div>
);

export default FieldPair;
