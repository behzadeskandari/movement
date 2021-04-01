import React from 'react';
import Actor from '../actor/actor';
import WalkSprite from "../../Components/actor/actor";
import UserKeyPress from '../hooks/use-key-press';
import useWalk from '../hooks/use-walk'


export default function Player({skin}) {
    
    const {dir , step ,walk, position} = useWalk(3);
    const data = {
         h: 33,
         w: 33,
       };

const directons = {
    down: 0,
    left :1,
    right : 2,
    up : 3,
}

       UserKeyPress((e) => {
                const dir  = e.key.replace('Arrow', '').toLowerCase();
                // if(directons.hasOwnProperty(dir)){
                // console.log(dir); 
                // }
                walk(dir); 
                e.preventDefault();
       })

       return <Actor sprite={`/Sprite/Skin/${skin}.png`}
        data={data}
         step={step}
          dir={dir}
          position={position}
          />;

}