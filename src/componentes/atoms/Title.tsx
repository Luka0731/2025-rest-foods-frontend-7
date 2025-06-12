import React from "react";

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
);

export default Text;
