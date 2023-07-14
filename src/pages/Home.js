import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [name, setName] = useState("");

  const sbBtn = () => {
    setName("Buttons");
  };

  return (
    <>
      <h1>Bootstrap Helper</h1>

      <div className="container-fluid grid-home">
        {/* sidebar */}
        <div className="shadow grid grid-home-sb">
          <Sidebar handleChange={sbBtn} />
        </div>
        {/* content */}
        <div className="shadow grid grid-home-content">
          <div className="card">
            <div className="card-header">{name}</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        {/* prop */}
        <div className="shadow grid grid-home-prop">prop</div>
      </div>
    </>
  );
}
