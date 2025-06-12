import React, { useEffect, useState } from "react";
import axios from "axios";
import Label from "../atoms/Label";

interface Props {
  urls: string[];
  label: string;
}

const NameList: React.FC<Props> = ({ urls, label }) => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const validUrls = urls.filter((url) => url);
        const results = await Promise.all(
          validUrls.map(async (url) => {
            const result = await axios.get(url);
            return Array.isArray(result.data) ? null : result.data.name;
          })
        );
        setValue(results.filter(Boolean) as string[]);
      } catch (err) {
        console.error("Failed to fetch names:", err);
      }
    };

    if (urls.length > 0) fetchNames();
  }, [urls]);

  if (value.length === 0) return null;

  return (
    <div className="line">
      <Label className="label">{label}:</Label>
      <p>{value.join(", ")}</p>
    </div>
  );
};

export default NameList;
