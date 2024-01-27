import style from './score.module.css';
const Score = ({ points }) => {
  return (
    <div className={style.container}>
      <p>Score</p>
      <h3>{points}</h3>
    </div>
  );
};

export default Score;
