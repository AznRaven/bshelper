import React from "react";
import Button from "./Button";

export default function Sidebar({ handleChange }) {
  return (
    <div>
      <Button onClick={handleChange} />
    </div>
  );
}
