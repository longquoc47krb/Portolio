import React from "react";

interface CharacterProps {
  name: string;
  avatar: string;
}

function Character({ name, avatar }: CharacterProps) {
  return <div>Character</div>;
}

export default Character;
