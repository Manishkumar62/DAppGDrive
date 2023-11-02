import { useEffect } from "react";
import "./Modal.css";
import { accessList } from '../data/constant';
const Modal = ({setModalOpen}) => {
    const sharing = async () => {
        const address = document.querySelector(".address").value;
        accessList.push(address);
        setModalOpen(false);
    };
    useEffect(() => {
        const accList = async () => {
          let select = document.querySelector("#selectNumber");
          const options = accessList;
    
          for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            let e1 = document.createElement("option");
            e1.textContent = opt;
            e1.value = opt;
            select.appendChild(e1);
          }
        };
        accList();
      }, []);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal