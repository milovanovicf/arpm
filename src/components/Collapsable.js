import React, { useState } from "react";
import "../App.css";

const Collapsable = (props) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="collapsable">
      <button
        className="toggle"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        {props.label}
      </button>
      {isOpen && <div className="content">{props.children}</div>}
    </div>
  );
};

export default Collapsable;
