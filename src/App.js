import React, {Component} from 'react';
import World from './features/world/index';
// import Sprite from './Components/sprite';
 import WalkSprite from "./features/player/player.png";
import Actor from './Components/actor/actor';
import Player from "./Components/Player";
class App extends Component{

  render(){
 
    return (
      <div>
        {/* <World/> */}
        <Player skin="m4" />
      </div>
    );
  }
}

export default App;
