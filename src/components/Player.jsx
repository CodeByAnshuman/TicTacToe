import { useState } from "react"
export default function Player({name, symbol}){
    const [playerName, setName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    function handleClick(){
       setIsEditing(editing  => !editing)
    }
    function handleChange(event){
        setName(event.target.value)
    }
    let editableplayerName =  <span className="player-name">{playerName}</span> 
    if(isEditing){
        editableplayerName = <input type="text" value={playerName} onChange={handleChange}/>
    }
   return (   
   <li>
    <span className="player">{editableplayerName}</span>
    <span className="player-symbol">{symbol}</span>
    <button onClick={handleClick}>{isEditing?'Save':'Edit'}</button>
  </li> 
  )

}