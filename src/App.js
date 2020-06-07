import React from "react";
import "./App.css";
import allCountryScores from "./allCountryScores.js";
import CountriesCards from "./CountriesCards";

function App() {
  return (
    <div>
      <CountriesCards allCountryScores={allCountryScores} />
    </div>
  );
}

export default App;
