class Level {

  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.description = "";
    this.exits = [];
    this.prev = null;
    this.next = null;

    if (id == 0) {
      this.description = `Level 0 is a dimly lit, seemingly endless maze of hallways resembling the back rooms of a massive commercial building. A low, constant hum from the fluorescent lights permeates the space, and the wallpaper is warn and mono-yellow.
      Shelves stretch into the distance, filled with an infinite supply of identical office supplies.  There are no windows, no doors, only the occasional desk or filing cabinet to offer a false sense of normalcy in this unsettling and disorienting labyrinth.
      The most prominent threat posed by this level is the lack of resources and the utter isolation. No traveler has ever encountered another human being while traversing this level. The constant buzzing of the lights, the unchanging dull yellow of the walls, and the lack of interaction combine with thirst, hunger, and exhaustion to make for a depressing end.`;

    }
  }
}

class LevelList {
  
}

export default LevelList;