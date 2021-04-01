import React from 'react';
import Player from '../player/index.js';
import Map from "../map/index.js";


function World(props) {
    return (
      <div
        style={{
            position: 'relative',
          width: "800px",
          height: "400px",
          margin : '20px auto'
        }}
      >
        <Map />
        <Player />
      </div>
    );
}

export default World;