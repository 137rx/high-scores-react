import React from "react"

const CountryScores = (props) => {
    return(
        
                <p className="individual-score">
                  {props.score.n.toUpperCase()} <span>{props.score.s}</span>
                </p>
              
    )
}

export default CountryScores