import React, { Component, Fragment } from 'react';  
import { connect } from "react-redux";
import WalkSprite from './player.png';
import HandleMovement from './movement'


export const Player = (props) => {
  console.log(props,'props');  
  return (

       <div
          style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${WalkSprite}')`,
            backgroundPosition: '0 0',
            width: '29px',
            height: '33px',
          }}
          />
          );
}

function mapStateToProps(state){
    return {
         ...state.Player,
    }

}

// function getState(fn1,fn2){
//     return function (component) {
//         return component;
//     };
// }
// function foo(component) {
//     return component;
//   }

export default connect(mapStateToProps)(HandleMovement(Player));  