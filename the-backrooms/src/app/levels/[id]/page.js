'use client';

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

// Level descriptions
let levels = []

export default function Level() {

  // Get level ID from URL params
  const params = useParams();
  let levelID = params.id;

  // State variables
  const [level, setLevel] = useState(0);
  const [region, setRegion] = useState(0);
  const [exits, setExits] = useState([]);
  const [canExitLevel, setCanExitLevel] = useState(false);

  // Going back and forth between levels
  const enterPrevLevel = () => {
    levelID -= 1;
    setLevel(level - 1);
  }

  const enterNextLevel = () => {
    levelID += 1;
    setLevel(level + 1);
  }

  return (
    <div>
      <a href="/">Go Back Home</a>
      <div className="description">
        <h1>Level {level}</h1>
        <p>Description text will go here.</p>
      </div>

      <div className="exits">
        <button onClick={enterPrevLevel}>Previous Level!</button>
        <button onClick={enterNextLevel}>Next Level!</button>
      </div>
    </div>
  );
}