import Card from "./Components/Card";
import React, { useState } from "react";
import api from "./services/api";
import initialData from "./helpers/initialData";

function App() {
  const [cidade, setCidade] = useState("");
  const [data, setData] = useState(initialData)

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("buscando dados...");
    await api
      .fetchData(cidade)
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 outline-none rounded-lg"
          value={cidade}
          onChange={({ target: { value } }) => setCidade(value)}
        />

        <button
          type="submit"
          className="p-3 bg-cyan-600 ml-3 text-white rounded-lg font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data}/>
    </div>
  );
}

export default App;
