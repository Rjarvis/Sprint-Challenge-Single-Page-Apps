import React, { useEffect, useState } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import Axios from "axios";
import CharacterCard from './components/CharacterCard.js';
//import AppRouter from "./components/AppRouter.js";

export default function App() {
const[data, setData] = useState("");
useEffect(() => {
  Axios
  .get("https://rickandmortyapi.com/api/character/1")
  .then(res => setData(res.data))
  .catch(err => console.log(err));
},[]);
  return (
    <main>
      <Header />
      <TabNav />
      <CharacterCard props={data}/>
      {console.log(data)}

      {/* TODO<AppRouter /> */}
    </main>
  );
}
