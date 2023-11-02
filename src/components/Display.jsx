import { useState } from "react";
import { accessList } from "../data/constant";
import "./Display.css";

const Display = () => {
  const [data, setData] = useState("");
  const getdata = ()=>{
    const Otheraddress = document.querySelector(".address").value;
    const images = accessList.map((item) => {
      if(item.address == Otheraddress){
        return (
          <a href={item.src} key={item.key} target="_blank">
            <img
              src={item.src}
              alt={item.alt}
              className="image-list"
            ></img>
          </a>
        );
      }
    });
    setData(images);
  }
  
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  )
}

export default Display