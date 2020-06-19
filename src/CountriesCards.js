import React, { useState } from "react";
import CountryScores from "./CountryScores"


const CountriesCards = (props) => {
  const [buttonState, setButtonState] = useState(false);
  const [sort, setSort] = useState(null);

  function handleChange() {
    setButtonState(!buttonState);
  }

  console.log(handleChange())

  // function handleSort(props) {
  //   let sortScore = props.allCountryScores.map((score) =>
  //     buttonState? score.scores.sort((a, b) => a.s - b.s) : score.scores.sort((a, b) => a.s - b.s)
  //   );
  //   setSort(sortScore);
  // }

  // console.log(handleSort())

  return (
    <div className="cards">
      <h1>High Scores per Country</h1>

      <button onClick= {handleChange}> Swap order </button>

      {props.allCountryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, index) => (
          <div className="card">
            <h2>HIGH SCORES: {country.name}</h2>
            {country.scores
              .sort((a, b) => b.s - a.s)
              .map((score, index) => (
          <CountryScores score={score} index={index} />
          ))}
          </div>
        ))}
    </div>
  );
};

export default CountriesCards;
