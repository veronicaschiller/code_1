import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Api from "./Services/Api";
import "./styles.css";
function App() {
  const { Input, setInput } = useState('');

async function handleSeach(){
 
  if(Input === ''){
    alert("preencha com algum cep!")
    return;
  }
  try {
    const response = await Api.get(`${Input/JSON}`);
    console.log(response.data);
  } catch  {
    alert("ops.. erro ao busca")
    setInput('')
  }
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
