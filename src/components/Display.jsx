import { useState } from "react";
import "./Display.css";

const Display = () => {
  const [data, setData] = useState("");
  
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button">
        Get Data
      </button>
    </>
  )
}

export default Display