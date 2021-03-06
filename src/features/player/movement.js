import React from 'react';
import store from '../../config/store';
import {SPRITE_SIZE} from '../../config/Constant';

export default function HandeMovement(player) {

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position;
        switch (direction) {
          case "WEST":
            return [oldPos[0] - SPRITE_SIZE, oldPos[1]];

          case "EAST":
            return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
          case "NORTH":
            return [oldPos[0], oldPos[1] - SPRITE_SIZE];
          case "SOUTH":
            return [oldPos[0], oldPos[1] + SPRITE_SIZE];
        }
    }

    function dispatchMove(direction){
        store.dispatch({
            type : 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }


    function HandleKeyDown(e) {
        e.preventDefault();
        switch (e.keyCode) {
          case 37:{
              return dispatchMove("WEST");
            // return console.log("west");
        }
            case 38:
            return dispatchMove("NORTH");
          case 39:
            return dispatchMove("EAST");
          case 40:
            return dispatchMove("SOUTH");
          default:
            console.log(e.keyCode);
        }
    }

    window.addEventListener('keydown', (e) => {
        HandleKeyDown(e);

    })
    return player;

  }
