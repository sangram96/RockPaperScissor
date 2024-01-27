import style from "./show.screen.module.css";
import scissor from "../../assets/icon-scissors.svg";
import GameOptions from "../GameOptions";
import GameResult from "../GameResult";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext";

const ShowScreen = () => {
  const { data, updataContext } = useContext(MyContext);
  const [result, setResult] = useState();
  useEffect(() => {
    const player = data.UserSelection;
    const computer = data.ComputerSelection;
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === "rock" && computer === "scissor") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissor" && computer === "paper")
    ) {
      setResult("YOU WIN!");
      updataContext({ ...data, score: data.score + 1 });
    } else {
      setResult("YOU LOSE!");
      updataContext({ ...data, score: data.score - 1 });
    }
  }, []);
  return (
    <div className={style.container}>
      <div>
        <p className={style.title}>You Picked</p>
        <div className={style.choosenOption}>
          <GameOptions
            color={data.UserSelectionData.color}
            imgUrl={data.UserSelectionData.imgUrl}
            style={{
              backgroundColor: data.UserSelectionData.color,
              position: "relative",
              width: "200px",
              height: "200px",
            }}
          />
        </div>
      </div>
      <div className={style.gameresult}>
        <GameResult title={result} />
      </div>
      <div>
        <p className={style.title}>Computer Picked</p>
        <div className={style.choosenOption}>
          <GameOptions
            color={data.ComputerSelectionData.color}
            imgUrl={data.ComputerSelectionData.imgUrl}
            value={data.ComputerSelection}
            style={{
              backgroundColor: data.ComputerSelectionData.color,
              position: "relative",
              width: "200px",
              height: "200px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowScreen;
