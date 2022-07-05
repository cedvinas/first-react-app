import React from "react";
import TicTacToe from "./TicTacToe";
import { useState } from "react";

export default function TicTacToeField(props) {
    const players = {
        'Player 1': {
            SYM: "O",
        },
        'Player 2': {
            SYM: "X",
        },
    };
    const [isP2Next, setIsP2Next] = useState(false);
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    return (
        <div className="field">
            <div className="single-field" onClick={() => turn(0, 0)}>{board[0][0]}</div>
            <div className="single-field" onClick={() => turn(0, 1)}>{board[0][1]}</div>
            <div className="single-field" onClick={() => turn(0, 2)}>{board[0][2]}</div>
            <div className="single-field" onClick={() => turn(1, 0)}>{board[1][0]}</div>
            <div className="single-field" onClick={() => turn(1, 1)}>{board[1][1]}</div>
            <div className="single-field" onClick={() => turn(1, 2)}>{board[1][2]}</div>
            <div className="single-field" onClick={() => turn(2, 0)}>{board[2][0]}</div>
            <div className="single-field" onClick={() => turn(2, 1)}>{board[2][1]}</div>
            <div className="single-field" onClick={() => turn(2, 2)}>{board[2][2]}</div>
        </div>
    )

    function turn(arrayIndex, index) {
        switch (isP2Next) {
            case true:
                board[arrayIndex][index] = players?.['Player 2']?.SYM;
                setIsP2Next(false);
                break;

            case false:
                board[arrayIndex][index] = players?.['Player 1']?.SYM;
                setIsP2Next(true);

            default:
                break;
        }
    }
}
