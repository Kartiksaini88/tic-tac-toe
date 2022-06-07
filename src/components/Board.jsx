import React, { useEffect, useRef, useState } from "react";
import "./board.css";
export default function Board({
  confun,
  fun,
  res,
  result,
  showwinner,
  winneris,
}) {
  const [boxdata, setboxdata] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  
  const [turn, setturn] = useState(0);
  const [win, setwin] = useState("");
  const [count, setcount] = useState(0);

  if (win !== "") {
    showwinner(win);
     
    result(true);
  }

  const boardRef = useRef(null);
  
  useEffect(() => {
    if (confun === true) {
     setboxdata([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
      setturn(0);
      setwin("");
      setcount(0);
      showwinner("");
      result(false)
      const cells = boardRef.current.children;
      
      for(var i = 0;i<9;i++){
          cells[i].innerHTML = '';
      }

      fun(!confun);
    }
  }, [confun, fun]);



  const put = (event, index1, index2) => {
    if (boxdata[index1][index2] === "" && win === "") {
      const current = turn === 0 ? "X" : "O";
      boxdata[index1][index2] = current;
      event.target.innerHTML = current;
      setcount(count + 1);
      setturn(turn === 0 ? 1 : 0);
    }
    winner(boxdata);
  };

  const winner = (boxdata) => {
    const matrix = boxdata;

    for (var i = 0; i < matrix.length; i++) {
      if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
        var mat = matrix[i][0];
        console.log(mat);
        setwin(mat);
        break;
      } else if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) {
        var winner = matrix[0][i];
        console.log(winner);
        setwin(winner);
        break;
      }
    }

    for (var j = 0; j < matrix.length; j++) {
      if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
        var winner1 = matrix[0][0];
        console.log(winner1);
        setwin(winner1);
        break;
      } else if (matrix[2][0] == matrix[1][1] && matrix[1][1] == matrix[0][2]) {
        var winner2 = matrix[2][0];
        console.log(winner2);
        setwin(winner2);
        break;
      }
    }

    if (count === 8) {
      showwinner("Draw");
      result(true)
    }
  };

  return (
    <div ref={boardRef} className="board">
      <div onClick={(e) => put(e, 0, 0)} className="input input-1"></div>
      <div onClick={(e) => put(e, 0, 1)} className="input input-1"></div>
      <div onClick={(e) => put(e, 0, 2)} className="input input-1"></div>
      <div onClick={(e) => put(e, 1, 0)} className="input input-1"></div>
      <div onClick={(e) => put(e, 1, 1)} className="input input-1"></div>
      <div onClick={(e) => put(e, 1, 2)} className="input input-1"></div>
      <div onClick={(e) => put(e, 2, 0)} className="input input-1"></div>
      <div onClick={(e) => put(e, 2, 1)} className="input input-1"></div>
      <div onClick={(e) => put(e, 2, 2)} className="input input-1"></div>
    </div>
  );
}
