// import './Style.css'
// import { useState } from 'react';

// function Square({ value, onSquareClick }) {
//     return (
//         <button className="square" onClick={onSquareClick}>
//             {value}
//         </button>
//     );
// }

// function Board({ xIsNext, squares, onPlay }) {
//     function handleClick(i) {
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         const nextSquares = squares.slice();
//         if (xIsNext) {
//             nextSquares[i] = 'X';
//         } else {
//             nextSquares[i] = 'O';
//         }
//         onPlay(nextSquares);
//     }

//     const winner = calculateWinner(squares);
//     let status;
//     if (winner) {
//         status = 'Winner: ' + winner;
//     } else {
//         status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//     }

//     return (
//         <>
//             <div className="status">{status}</div>
//             <div className="board-row">
//                 <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//                 <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//                 <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//             </div>
//             <div className="board-row">
//                 <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//                 <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//                 <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//             </div>
//             <div className="board-row">
//                 <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//                 <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//                 <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//             </div>
//         </>
//     );
// }
// // The handleClick(0) call will be a part of rendering the board component. 
// // Because handleClick(0) alters the state of the board component by calling setSquares, 
// // your entire board component will be re-rendered again. But this runs handleClick(0) again, 
// // leading to an infinite loop:
// // When you were passing onSquareClick={handleClick}, you were passing the handleClick function 
// // down as a prop. You were not calling it! But now you are calling that function right away 
// // notice the parentheses in handleClick(0)—and that’s why it runs too early. 
// // You don’t want to call handleClick until the user clicks!
// // You could fix this by creating a function like handleFirstSquareClick that calls handleClick(0)
// // If you pass the result of calling the function, e.g. handleClick={handleClick()}, 
// // then it would get invoked immediately when the page loads, which is not what we want.
// // When clicking on a Square, the child Square component now asks the parent Board component 
// // to update the state of the board. When the Board’s state changes, both the Board component 
// // and every child Square re-renders automatically
// // it’s conventional to use onSomething names for props which represent events and handleSomething 
// // for the function definitions which handle those events.
// // By default, all child components re-render automatically when the state of a parent component changes.

// export default function Game() {
//     const [history, setHistory] = useState([Array(9).fill(null)]);
//     const [currentMove, setCurrentMove] = useState(0);
//     const xIsNext = currentMove % 2 === 0;
//     const currentSquares = history[currentMove];

//     function handlePlay(nextSquares) {
//         const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//         setHistory(nextHistory);
//         setCurrentMove(nextHistory.length - 1);
//     }

//     function jumpTo(nextMove) {
//         setCurrentMove(nextMove);
//     }

//     const moves = history.map((squares, move) => {
//         let description;
//         if (move > 0) {
//             description = 'Go to move #' + move;
//         } else {
//             description = 'Go to game start';
//         }
//         return (
//             <li key={move}>
//                 <button onClick={() => jumpTo(move)}>{description}</button>
//             </li>
//         );
//     });

//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//             </div>
//             <div className="game-info">
//                 <ol>{moves}</ol>
//             </div>
//         </div>
//     );
// }

// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }
