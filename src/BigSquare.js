import React, { useEffect, useState } from "react";
import SmallSquare from "./SmallSquare";
import "./BigSquare.css";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const squares = Array.from({ length: 16 }, (_, i) => i);

function BigSquare() {
  const [randomSquares, setRandmoSquares] = useState([]);
  useEffect(() => {
    setRandmoSquares(() => shuffle(squares))
  }, []);

  function moveSquare(val) {
    let zeroIndex = randomSquares.indexOf(0);
    let valIndex = randomSquares.indexOf(val);

    if (valIndex + 4 === zeroIndex || valIndex - 4 === zeroIndex) {
        swap(valIndex, zeroIndex);
    } else if (valIndex + 1 === zeroIndex && zeroIndex % 4 !== 0 ) {
        swap(valIndex, zeroIndex);
    } else if (valIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0) {
        swap(valIndex, zeroIndex)
    }
  }

  function swap(valIndex, zeroIndex) {
    let temArray = [...randomSquares]
    temArray[zeroIndex] = randomSquares[valIndex];
    temArray[valIndex] = 0;
    setRandmoSquares(() => [...temArray])
  }

  return (
    <div className="Container">
      {randomSquares.map((e, i) => {
        return (
          <div key={e} className="Container-Sub" >
            <SmallSquare value={e}  clickHandler={moveSquare}/>
          </div>
        );
      })}
    </div>
  );
}

export default BigSquare;
