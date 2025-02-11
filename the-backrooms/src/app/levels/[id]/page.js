'use client';

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function Levels() {

  // Get level ID from URL params
  const params = useParams();
  let levelID = params.id;

  // Set level state
  const [level, setLevel] = useState(0);

  return (
    <div>
      <a href="/">Go Back Home</a>
      <h1>Level {level}</h1>
      <button onClick={() => {
        levelID += 1;
        setLevel(level - 1);
      }}>
        Previous Level!
      </button>
      <button onClick={() => {
        levelID += 1;
        setLevel(level + 1);
      }}>
        Next Level!
      </button>
    </div>
  );
}