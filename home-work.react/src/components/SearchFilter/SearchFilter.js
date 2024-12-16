import React from "react";
import { Label } from "./SearchFilter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
