import { set } from "mongoose";
import { use } from "react";
import { useState } from "react";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null] 
];

export default function GameBoard({}){
    const [gameBoard, setgameBoard] =  useState(initialGameboard);

    function handleSelectSqure(rowIndex, colIndex){
        setgameBoard((prevGameboard) => {
           const updated = [...prevGameboard.map(innerArray => [...innerArray])];
           updated[rowIndex][colIndex] = "X";
           return updated
        });
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((PlayerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=> handleSelectSqure(rowIndex, colIndex)}>{PlayerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}