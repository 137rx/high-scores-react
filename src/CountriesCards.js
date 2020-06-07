import React from "react";

const CountriesCards = (props) => {
  return (
    <div className="cards">
      <h1>High Scores per Country</h1>
      {props.allCountryScores.sort((a, b) => (a.name.localeCompare(b.name))).map((country, index) => (
        <div className="card" key={index}>
          <h2>HIGH SCORES: {country.name}</h2>
          {country.scores.sort((a, b) => (a.s - b.s)).map((score) => (
            <p className="individual-score">
              {score.n.toUpperCase()} <span>{score.s}</span>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CountriesCards;
