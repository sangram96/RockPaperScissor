import { useContext } from "react";
import Score from "../Score";
import style from "./header.module.css";
import logo from "../../assets/logo.svg";
import SelectionSecreen from "../SelectionScreen";
import MyContext from "../../context/MyContext";
import ShowScreen from "../ShowScreen";
const Header = () => {
  const { data } = useContext(MyContext);
  return (
    <>
      <div className={style.container}>
        <img src={logo} />
        <Score points={data.score} />
      </div>
      {!data.UserSelection && <SelectionSecreen />}
      {data.UserSelection && <ShowScreen />}
    </>
  );
};

export default Header;
