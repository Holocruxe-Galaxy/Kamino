import styles from "./Feature.module.css";

const Feature = (props) => {
  return (
    <>
      <div className={styles.features_container}>
        <div className={styles.vertical_line}></div>
        <h4>{props.verb}</h4>
        <h3>{props.phrase}</h3>
        <p>{props.paragraph}</p>
        <img src={props.img} alt={props.src} />
      </div>
    </>
  );
};

export default Feature;
