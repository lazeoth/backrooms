import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rooms = {
  start: {
    description: "You wake up in a dimly lit yellow room. The air is damp, and the hum of fluorescent lights buzzes above. There are three hallways ahead.",
    options: [
      { text: "Take the left hallway", next: "left_hallway" },
      { text: "Take the middle hallway", next: "middle_hallway" },
      { text: "Take the right hallway", next: "right_hallway" }
    ]
  },
  left_hallway: {
    description: "The left hallway is narrow, the walls seem to breathe. A flickering light at the end reveals a shadowy figure.",
    options: [
      { text: "Approach the figure", next: "shadow_encounter" },
      { text: "Turn back", next: "start" }
    ]
  },
  middle_hallway: {
    description: "The middle hallway stretches endlessly. The further you walk, the more you realize you're not making progress.",
    options: [
      { text: "Keep walking", next: "looping_hallway" },
      { text: "Turn back", next: "start" }
    ]
  },
  right_hallway: {
    description: "The right hallway has an eerie silence. You see an old, rusty door slightly ajar.",
    options: [
      { text: "Enter the door", next: "rusty_room" },
      { text: "Turn back", next: "start" }
    ]
  },
  shadow_encounter: {
    description: "The shadow figure doesn't move, but as you get closer, its shape distorts into something indescribable...",
    options: [
      { text: "Run away", next: "start" },
      { text: "Reach out to touch it", next: "void_fall" }
    ]
  },
  looping_hallway: {
    description: "You keep walking, but the hallway never ends. The walls seem to shift slightly with each step.",
    options: [
      { text: "Sit down and wait", next: "void_fall" },
      { text: "Scream for help", next: "unknown_response" }
    ]
  },
  rusty_room: {
    description: "Inside the room, you find old papers scattered on the ground. One of them has the words 'DON'T TRUST THEM' scribbled in red ink.",
    options: [
      { text: "Look for more clues", next: "clue_discovery" },
      { text: "Leave the room", next: "start" }
    ]
  },
  void_fall: {
    description: "The ground beneath you collapses, and you fall into an infinite void. The last thing you hear is whispering...",
    options: []
  },
  unknown_response: {
    description: "A voice responds to your scream, but it's your own voice repeating your words back at you from all directions...",
    options: []
  },
  clue_discovery: {
    description: "You find a key hidden inside one of the drawers. It has the number '303' engraved on it.",
    options: [
      { text: "Take the key and leave", next: "start" }
    ]
  }
};

export default function BackroomsGame() {
  const [currentRoom, setCurrentRoom] = useState("start");

  return (
    <div className="flex flex-col items-center p-8">
      <Card className="w-full max-w-md">
        <CardContent>
          <p className="text-lg mb-4">{rooms[currentRoom].description}</p>
          <div className="flex flex-col gap-2">
            {rooms[currentRoom].options.map((option, index) => (
              <Button key={index} onClick={() => setCurrentRoom(option.next)}>
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
