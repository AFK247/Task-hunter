import React from "react";
import { useSelector } from "react-redux";

const Spinner = () => {
  const spinner=useSelector((state)=>state.loading.value);
  console.log(spinner);
  return (
    <div className={`${spinner === true ? 'd-block': 'd-none'}`}>
      <div style={{height: '100vh'}}>
      <div style={{margin:"16% 48%"}} className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    </div>
  );
};

export default Spinner;