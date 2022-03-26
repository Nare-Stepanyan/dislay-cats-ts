import styles from "./display.module.scss";

const Image = (props: { url: string; key: string }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={props.url} alt="img" />
    </div>
  );
};

export default Image;
