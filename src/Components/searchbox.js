import React, { useState } from "react";

export const Search = props => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        placeholder="city search"
      />
      <button onClick={() => props.func(value)}>Go!</button>
    </div>
  );
};
