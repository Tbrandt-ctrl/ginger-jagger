import styles from "./TextOverlay.module.scss";

const TextOverlay = () => {
  return (
    <div className="absolute top-20 left-5 ">
      <h1 className={styles.text}>G-J</h1> <br />
      <h1 className={styles.text}>About</h1>
    </div>
  );
};

export default TextOverlay;
