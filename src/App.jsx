// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Show from "./components/show";
import "./components/show.css";

function App() {
  const [winres, setwinres] = useState(false);
  const [winneris, setwinner] = useState("");
  const [fun, setfun] = useState(false);
  const [count,setcont] = useState(0)
  const reset = () => {
    setfun(true);
    setwinner("");
    setwinres(false);
  };
  return (
    <div className="App">
      {winneris !== "" ? <p className="player">{winneris === "Draw" ? "it is draw" : `${winneris} wins the game`}</p> : null}
      {winres === true ? (
        <button
          onClick={() => {
            reset();
          }}
        >
          play for one more time
        </button>
      ) : null}
      <Board
        confun={fun}
        fun={setfun}
        res={winres}
        showwinner={setwinner}
        winneris={winneris}
        result={setwinres}
      />
      <Show />
    </div>
  );
}

export default App;
