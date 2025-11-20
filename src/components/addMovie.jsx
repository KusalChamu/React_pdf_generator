import { useState } from "react";

export default function AddMovie({ onAdd }) {
  const [value, setValue] = useState("");

  const handleADD = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleADD}>Add Movie</button>
    </div>
  );
}
