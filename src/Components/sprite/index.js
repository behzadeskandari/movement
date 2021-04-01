import React from 'react';
// import WalkSprite from "../../features/player/player.png";

export default function Sprite({ image, data, position  }) {
  const { y, x, h, w } = data;
  return (
    <div
      style={{
       // display: "inline-block",
        position :'absolute',
        height: `${h}px`, // "32px",
        width: `${w}px`, //"32px",
        top: position.y,
        left: position.x,
        backgroundImage: `url('${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
      }}
    />
  );
}