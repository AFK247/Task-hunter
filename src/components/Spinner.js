import React from "react";

const Spinner = () => {
  let spinner=localStorage.getItem("spinner");
  return (
    <div className={`${spinner=== 'true'? 'd-block': 'd-none'}`}>
      <div style={{height: '100vh'}}>
      <div style={{margin:"14% 46%"}} className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    </div>
  );
};

export default Spinner;
