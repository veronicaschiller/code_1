import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
function App() {
  const { Input, setInput } = useState('');

function handleSeach(){
  alert("teste" + Input)
}

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="digite seu cep ... "
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSerch" onClick={handleSeach}>
          <FiSearch size={25} color="#fff"></FiSearch>
        </button>
      </div>
      <main className="main">
        <h2>CEP: 2222222</h2>
        <span>Rua dos alfedeiros</span>
        <span>complemeto:casa com cor diferente</span>
        <span>bairro: vila rosa</span>
        <span>campo grande - ms</span>
      </main>
    </div>
  );
}

export default App;
