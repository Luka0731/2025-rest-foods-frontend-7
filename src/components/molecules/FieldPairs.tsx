import React from "react";

interface FieldPairProps {
  label: string;
  value: React.ReactNode;
  labelClassName?: string;
  valueClassName?: string;
}

const FieldPair: React.FC<FieldPairProps> = ({ label, value }) => (
  <div className="line">
    <label className="label">{label}</label>
    <p className="value">{value}</p>
  </div>
);

export default FieldPair;
