import React from "react";

const Spinner = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        //style={{ margin: "16% 48%" }}
        className="spinner-border w-auto"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
