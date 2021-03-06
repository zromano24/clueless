export const Rooms = [
  { type: "room", id: "Ballroom-2", name: "Ballroom" },
  { type: "room", id: "Billiard_Room-2", name: "Billiard Room" },
  { type: "room", id: "Conservatory-2", name: "Conservatory", passage: "8,2" },
  { type: "room", id: "Dining_Room-2", name: "Dining Room" },
  { type: "room", id: "Hall-2", name: "Hall" },
  { type: "room", id: "Kitchen-2", name: "Kitchen", passage: "8,8" },
  { type: "room", id: "Library-2", name: "Library" },
  { type: "room", id: "Lounge-2", name: "Lounge", passage: "2,8" },
  { type: "room", id: "Study-2", name: "Study", passage: "2,2" }
];

export const Suspects = [
  { type: "suspect", id: "Mustard-2", name: "Colonel Mustard", board: "3,10", startOptions: ["Hallway: Lounge-Dining Room"]},
  { type: "suspect", id: "Scarlet-2", name: "Miss Scarlet", board: "0,7", startOptions: ["Hallway: Lounge-Hall"] },
  { type: "suspect", id: "Green-2", name: "Mr. Green", board: "10,3", startOptions: ["Hallway: Conservatory-Ballroom"] },
  { type: "suspect", id: "Peacock-2", name: "Mrs. Peacock", board: "7,0", startOptions: ["Hallway: Conservatory-Library"] },
  { type: "suspect", id: "White-2", name: "Mrs. White", board: "10,7", startOptions: ["Hallway: Kitchen-Ballroom"] },
  { type: "suspect", id: "Plum-2", name: "Professor Plum", board: "3,0", startOptions: ["Hallway: Study-Library"] }
];

export const Weapons = [
  { type: "weapon", id: "candlestick-3", name: "Candlestick", position: "11,4" },
  { type: "weapon", id: "butcher-3", name: "Knife", position: "11,3" },
  { type: "weapon", id: "pipe-3", name: "Lead Pipe", position: "11,5" },
  { type: "weapon", id: "gun-3", name: "Revolver", position: "11,6" },
  { type: "weapon", id: "rope-3", name: "Rope", position: "11,7" },
  { type: "weapon", id: "wrench-3", name: "Wrench", position: "11,8" }
];

export const Positions = {
  "Study": {
    type: "room",
    validMoves: [
      "Hallway: Study-Hall",
      "Kitchen",
      "Hallway: Study-Library"
    ],
    uiCoords: [
      { x: 0, y: 0, isOccupied: false },
      { x: 0, y: 1, isOccupied: false },
      { x: 0, y: 2, isOccupied: false },
      { x: 1, y: 0, isOccupied: false },
      { x: 1, y: 1, isOccupied: false },
      { x: 1, y: 2, isOccupied: false },
      { x: 2, y: 0, isOccupied: false },
      { x: 2, y: 1, isOccupied: false },
      { x: 2, y: 2, isOccupied: false }
    ]
  },
  "Hall": {
    type: "room",
    validMoves: [
      "Hallway: Study-Hall",
      "Hallway: Lounge-Hall",
      "Hallway: Hall-Billiard Room"
    ],
    uiCoords: [
      { x: 0, y: 4, isOccupied: false },
      { x: 0, y: 5, isOccupied: false },
      { x: 0, y: 6, isOccupied: false },
      { x: 1, y: 4, isOccupied: false },
      { x: 1, y: 5, isOccupied: false },
      { x: 1, y: 6, isOccupied: false },
      { x: 2, y: 4, isOccupied: false },
      { x: 2, y: 5, isOccupied: false },
      { x: 2, y: 6, isOccupied: false }
    ]
  },
  "Lounge": {
    type: "room",
    validMoves: [
      "Hallway: Lounge-Dining Room",
      "Hallway: Lounge-Hall",
      "Conservatory"
    ],
    uiCoords: [
      { x: 0, y: 8, isOccupied: false },
      { x: 0, y: 9, isOccupied: false },
      { x: 0, y: 10, isOccupied: false },
      { x: 1, y: 8, isOccupied: false },
      { x: 1, y: 9, isOccupied: false },
      { x: 1, y: 10, isOccupied: false },
      { x: 2, y: 8, isOccupied: false },
      { x: 2, y: 9, isOccupied: false },
      { x: 2, y: 10, isOccupied: false }
    ]
  },
  "Library": {
    type: "room",
    validMoves: [
      "Hallway: Study-Library",
      "Hallway: Library-Billiard Room",
      "Hallway: Conservatory-Library"
    ],
    uiCoords: [
      { x: 4, y: 0, isOccupied: false },
      { x: 4, y: 1, isOccupied: false },
      { x: 4, y: 2, isOccupied: false },
      { x: 5, y: 0, isOccupied: false },
      { x: 5, y: 1, isOccupied: false },
      { x: 5, y: 2, isOccupied: false },
      { x: 6, y: 0, isOccupied: false },
      { x: 6, y: 1, isOccupied: false },
      { x: 6, y: 2, isOccupied: false }
    ]
  },
  "Billiard Room": {
    type: "room",
    validMoves: [
      "Hallway: Hall-Billiard Room",
      "Hallway: Library-Billiard Room",
      "Hallway: Dining Room-Billiard Room",
      "Hallway: Ballroom-Billiard Room",
    ],
    uiCoords: [
      { x: 4, y: 4, isOccupied: false },
      { x: 4, y: 5, isOccupied: false },
      { x: 4, y: 6, isOccupied: false },
      { x: 5, y: 4, isOccupied: false },
      { x: 5, y: 5, isOccupied: false },
      { x: 5, y: 6, isOccupied: false },
      { x: 6, y: 4, isOccupied: false },
      { x: 6, y: 5, isOccupied: false },
      { x: 6, y: 6, isOccupied: false }
    ]
  },
  "Dining Room": {
    type: "room",
    validMoves: [
      "Hallway: Lounge-Dining Room",
      "Hallway: Kitchen-Dining Room",
      "Hallway: Dining Room-Billiard Room"
    ],
    uiCoords: [
      { x: 4, y: 8, isOccupied: false },
      { x: 4, y: 9, isOccupied: false },
      { x: 4, y: 10, isOccupied: false },
      { x: 5, y: 8, isOccupied: false },
      { x: 5, y: 9, isOccupied: false },
      { x: 5, y: 10, isOccupied: false },
      { x: 6, y: 8, isOccupied: false },
      { x: 6, y: 9, isOccupied: false },
      { x: 6, y: 10, isOccupied: false }
    ]
  },
  "Conservatory": {
    type: "room",
    validMoves: [
      "Hallway: Conservatory-Library",
      "Hallway: Conservatory-Ballroom",
      "Lounge"
    ],
    uiCoords: [
      { x: 8, y: 0, isOccupied: false },
      { x: 8, y: 1, isOccupied: false },
      { x: 8, y: 2, isOccupied: false },
      { x: 9, y: 0, isOccupied: false },
      { x: 9, y: 1, isOccupied: false },
      { x: 9, y: 2, isOccupied: false },
      { x: 10, y: 0, isOccupied: false },
      { x: 10, y: 1, isOccupied: false },
      { x: 10, y: 2, isOccupied: false }
    ]
  },
  "Ballroom": {
    type: "room",
    validMoves: [
      "Hallway: Kitchen-Ballroom",
      "Hallway: Conservatory-Ballroom",
      "Hallway: Ballroom-Billiard Room",
    ],
    uiCoords: [
      { x: 8, y: 4, isOccupied: false },
      { x: 8, y: 5, isOccupied: false },
      { x: 8, y: 6, isOccupied: false },
      { x: 9, y: 4, isOccupied: false },
      { x: 9, y: 5, isOccupied: false },
      { x: 9, y: 6, isOccupied: false },
      { x: 10, y: 4, isOccupied: false },
      { x: 10, y: 5, isOccupied: false },
      { x: 10, y: 6, isOccupied: false }
    ]
  },
  "Kitchen": {
    type: "room",
    validMoves: [
      "Hallway: Kitchen-Dining Room",
      "Hallway: Kitchen-Ballroom",
      "Study"
    ],
    uiCoords: [
      { x: 8, y: 8, isOccupied: false },
      { x: 8, y: 9, isOccupied: false },
      { x: 8, y: 10, isOccupied: false },
      { x: 9, y: 8, isOccupied: false },
      { x: 9, y: 9, isOccupied: false },
      { x: 9, y: 10, isOccupied: false },
      { x: 10, y: 8, isOccupied: false },
      { x: 10, y: 9, isOccupied: false },
      { x: 10, y: 10, isOccupied: false }
    ]
  },
  "Hallway: Study-Hall": {
    type: "hallway",
    validMoves: [
      "Study",
      "Hall"
    ],
    uiCoords: [
      { x: 1, y: 3, isOccupied: false }
    ]
  },
  "Hallway: Lounge-Hall": {
    type: "hallway",
    validMoves: [
      "Lounge",
      "Hall"
    ],
    uiCoords: [
      { x: 1, y: 7, isOccupied: false }
    ]
  },
  "Hallway: Study-Library": {
    type: "hallway",
    validMoves: [
      "Study",
      "Library"
    ],
    uiCoords: [
      { x: 3, y: 1, isOccupied: false }
    ]
  },
  "Hallway: Hall-Billiard Room": {
    type: "hallway",
    validMoves: [
      "Hall",
      "Billiard Room"
    ],
    uiCoords: [
      { x: 3, y: 5, isOccupied: false }
    ]
  },
  "Hallway: Lounge-Dining Room": {
    type: "hallway",
    validMoves: [
      "Lounge",
      "Dining Room"
    ],
    uiCoords: [
      { x: 3, y: 9, isOccupied: false }
    ]
  },
  "Hallway: Library-Billiard Room": {
    type: "hallway",
    validMoves: [
      "Library",
      "Billiard Room"
    ],
    uiCoords: [
      { x: 5, y: 3, isOccupied: false }
    ]
  },
  "Hallway: Dining Room-Billiard Room": {
    type: "hallway",
    validMoves: [
      "Dining Room",
      "Billiard Room"
    ],
    uiCoords: [
      { x: 5, y: 7, isOccupied: false }
    ]
  },
  "Hallway: Conservatory-Library": {
    type: "hallway",
    validMoves: [
      "Conservatory",
      "Library"
    ],
    uiCoords: [
      { x: 7, y: 1, isOccupied: false }
    ]
  },
  "Hallway: Ballroom-Billiard Room": {
    type: "hallway",
    validMoves: [
      "Ballroom",
      "Billiard Room"
    ],
    uiCoords: [
      { x: 7, y: 5, isOccupied: false }
    ]
  },
  "Hallway: Kitchen-Dining Room": {
    type: "hallway",
    validMoves: [
      "Kitchen",
      "Dining Room"
    ],
    uiCoords: [
      { x: 7, y: 9, isOccupied: false }
    ]
  },
  "Hallway: Conservatory-Ballroom": {
    type: "hallway",
    validMoves: [
      "Conservatory",
      "Ballroom"
    ],
    uiCoords: [
      { x: 9, y: 3, isOccupied: false }
    ]
  },
  "Hallway: Kitchen-Ballroom": {
    type: "hallway",
    validMoves: [
      "Kitchen",
      "Ballroom"
    ],
    uiCoords: [
      { x: 9, y: 7, isOccupied: false }
    ]
  },
};
