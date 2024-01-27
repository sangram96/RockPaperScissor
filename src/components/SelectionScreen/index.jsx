import style from "./selection.screen.module.css";
import GameOptions from "../GameOptions";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissor from "../../assets/icon-scissors.svg";
import triangle from "../../assets/bg-triangle.svg";
import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";
const SelectionSecreen = () => {
  const { data, updataContext } = useContext(MyContext);

  useEffect(() => {
    // ComputerSelection
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let choosenValue = "";
    let computerSelectionData = {};
    if (randomNumber === 1) {
      choosenValue = 'rock';
      computerSelectionData = {
        imgUrl: rock,
        color: "red",
      }
    } else if (randomNumber === 2) {
      choosenValue = 'paper';
      computerSelectionData = {
        imgUrl: paper,
        color: "blue",
      }
    } else {
      choosenValue = 'scissor';
      computerSelectionData = {
        imgUrl: scissor,
        color: "yellow",
      }
    }
    updataContext({
      ...data,
      ComputerSelection: choosenValue,
      ComputerSelectionData: computerSelectionData,
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.subContainer} style={{ position: "relative" }}>
        <img src={triangle} alt={"Triangle"} className={style.boardLogo} />
        <GameOptions color={"red"} imgUrl={rock} value={"rock"} style={{backgroundColor: "red",bottom: "0" }}/>
        <GameOptions color={"blue"} imgUrl={paper} value={"paper"} style={{backgroundColor: "blue", top: "0",transform: "translate(-80%, -50%)"}} />
        <GameOptions color={"yellow"} imgUrl={scissor} value={"scissor"} style={{backgroundColor: "yellow",  right: "0", top: "0", transform: "translate(30%, -50%)"}} />
      </div>
    </div>
  );
};

export default SelectionSecreen;
