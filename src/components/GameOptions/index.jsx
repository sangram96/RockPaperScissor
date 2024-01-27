import { useContext, useState } from "react";
import style from "./game.options.module.css";
import MyContext from "../../context/MyContext";

const GameOptions = (props) => {
  const { data, updataContext } = useContext(MyContext);
  const clickHandler = (value) => {
    updataContext({
      ...data,
      UserSelection: value,
      UserSelectionData: {
        imgUrl: props.imgUrl,
        color: props.color,
        style: props.style,
      },
    });
  };

  if (!props.imgUrl) {
    return <div className={style.emptyContainer}></div>;
  }
  return (
    <div
      className={style.container}
      style={props.style}
      onClick={() => clickHandler(props.value)}
    >
      <div className={style.subContainer}>
        <img src={props.imgUrl} alt={"Image"} />
      </div>
    </div>
  );
};

export default GameOptions;
