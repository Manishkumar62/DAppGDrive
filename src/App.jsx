import { useState, useEffect } from "react";
import './App.css';
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import { AccountList } from "./data/constant";

function App() {
  const [account, setAccount] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(()=>{
    setAccount(AccountList[0]);
  })

  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}></Modal>
      )}

      <div className="App">
        <h1 style={{ color: "white" }}>Decent drive</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
        ></FileUpload>
        <Display account={account}></Display>
      </div>
    </>
  )
}

export default App
