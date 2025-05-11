import { useState } from "react"
export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false)
    function handleClick(){
       setIsEditing((prev) => !prev)
       
    }
    let playerName =  <span className="player-name">{name}</span> 
    if(isEditing){
        playerName = <input type="text" value={name}/>
    }
   return (   
   <li>
    <span className="player">{playerName}</span>
    <span className="player-symbol">{symbol}</span>
    <button onClick={handleClick}>{isEditing?'Save':'Edit'}</button>
  </li> 
  )

}