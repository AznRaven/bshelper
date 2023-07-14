import React from "react";

export default function Button({ onClick }) {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary">
      Button
    </button>
  );
}
