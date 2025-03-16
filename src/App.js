import { useState } from "react";

const rooms = {
  start: {
    description: "You wake up in a dimly lit yellow room. The air is damp, and the hum of fluorescent lights buzzes above. There are three hallways ahead.",
    options: [
      { text: "Take the left hallway", next: "left_hallway" },
      { text: "Take the middle hallway", next: "middle_hallway" },
      { text: "Take the right hallway", next: "right_hallway" }
    ],
    image: "start.png",
    map: "[X] - -"
  },
  left_hallway: {
    description: "The left hallway is narrow, the walls seem to breathe. A flickering light at the end reveals a shadowy figure.",
    options: [
      { text: "Approach the figure", next: "shadow_encounter" },
      { text: "Turn back", next: "start" }
    ],
    image: "left_hallway.png",
    map: "X - -"
  },
  middle_hallway: {
    description: "The middle hallway stretches endlessly. The further you walk, the more you realize you're not making progress.",
    options: [
      { text: "Keep walking", next: "looping_hallway" },
      { text: "Turn back", next: "start" }
    ],
    image: "middle_hallway.png",
    map: "- X -"
  },
  right_hallway: {
    description: "The right hallway has an eerie silence. You see an old, rusty door slightly ajar.",
    options: [
      { text: "Enter the door", next: "rusty_room" },
      { text: "Turn back", next: "start" }
    ],
    image: "right_hallway.png",
    map: "- - X"
  }
};

export default function Backrooms() {
  const [currentRoom, setCurrentRoom] = useState("start");

  return (
    <div className="flex flex-col items-center p-8 text-white bg-black min-h-screen">
      <div className="w-full max-w-md p-4 border border-gray-500 rounded-lg bg-gray-900">
        <pre className="text-green-400 text-sm mb-2">{rooms[currentRoom].map}</pre>
        <img 
          src={rooms[currentRoom].image} 
          alt="Current room" 
          className="w-full h-auto mb-4 border border-gray-700 rounded" 
        />
        <p className="text-lg mb-4">{rooms[currentRoom].description}</p>
        <div className="flex flex-col gap-2">
          {rooms[currentRoom].options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentRoom(option.next)}
              className="p-2 border border-gray-400 rounded bg-gray-700 hover:bg-gray-600"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
