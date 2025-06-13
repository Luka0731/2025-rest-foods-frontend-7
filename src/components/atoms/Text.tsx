import React from "react";

interface TextProps {
  className?: string;
  children: string;
}

const Text: React.FC<TextProps> = ({ className, children }) => (
  <p className={className}>{children}</p>
);

export default Text;
