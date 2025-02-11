'use client';

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

// Level descriptions
const levels = [
  {
    levelID: 0,
    name: "The Lobby",
    description: "Level 0 is an expansive non-Euclidean space, resembling the back rooms of a commercial building. All rooms in Level 0 share the same superficial features, such as worn mono-yellow wallpaper, old moist carpet, scattered electrical outlets, and inconsistently-placed fluorescent lighting. Aside from these common features, no two rooms within the level are identical in layout.",
    regions: [
      {
        id: 0,
        description: "The buzzing is the first thing you notice, a low, constant hum that vibrates through your skull.  You blink, trying to adjust to the sickly yellow light that bathes everything in a jaundiced hue.  The air is thick, stale, and carries a faint, almost metallic scent.  You take a tentative step forward, your shoes squeaking against the yellowed linoleum floor, the sound echoing unnaturally loud in the oppressive silence.  Every wall is covered in the same faded, beige wallpaper, a repeating pattern of swirls that seems to swim before your eyes.  Fluorescent lights flicker overhead, casting long, distorted shadows that dance with the dust motes swirling in the stagnant air.  You turn in a slow circle, taking in the scene: endless hallways stretching in every direction, punctuated by identical doors that seem to lead to more of the same.  There are no windows, no clocks, no discernible way to tell how long you've been here or how long you've been walking.  A prickle of unease crawls up your spine.  This isn't right.  This isn't normal.  Where are you?",
        exits: [
          { direction: "forward", region: 1 }
        ]
      },
      {
        id: 1,
        description: "The fluorescent hum is a constant companion, a buzzing in your ears that vibrates through your bones.  Every flickering tube light casts long, distorted shadows that dance with the dust motes swirling in the stagnant air.  You push forward, each step echoing unnaturally loud in the oppressive silence, your shoes scuffing the yellowed linoleum that stretches endlessly in every direction.  The air is thick, heavy, and carries a strange, almost metallic tang.  You recognize the pattern on the wallpaper – a repeating motif of faded beige swirls – but it offers no comfort, only the unsettling reminder that it's the same pattern you've seen for what feels like hours, maybe days.  There's no sense of time here, only the gnawing feeling that you're going in circles, that every doorless hallway and identical room is a cruel trick, a mocking repetition in this endless, yellow-tinged labyrinth.  You swallow, your throat dry, and a prickle of fear crawls up your spine.  You're not alone, you can feel it, but whatever it is, you can't see it.  And that's somehow worse.",
        exits: [
          { direction: "forward", region: 1 },
          { direction: "back", region: 0 },
          { direction: "left", region: 1 },
          { direction: "right", region: 1 }
        ]
      }
    ]
  },
  {
    id: 1,
    name: "Level 1",
    description: "Description for Level 1.",
    exits: []
  }
];

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