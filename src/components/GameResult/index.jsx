import { useContext } from 'react';
import style from './game.result.module.css';
import MyContext from '../../context/MyContext';

const GameResult = (props) => {
    const { data, updataContext } = useContext(MyContext);
    const clickHandler = () => {
        updataContext({...data, UserSelection: null});
    }
    return (
        <div className={style.container}>
            <p className={style.result}>{props.title}</p>
            <button className={style.btnPlay} onClick={clickHandler}>Play gain</button>
        </div>
    )
}

export default GameResult;