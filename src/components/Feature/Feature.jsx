import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <>
      <div className={styles.features_container}>
        <div className={styles.vertical_line}></div>
        <h4>
          <span>Live </span>
        </h4>
        <h3>Embrace the adventure of life</h3>
        <p>
          Create unforgettable moments that will leave an indelible mark on the
          canvas of your future. Let laughter and joy permeate your days, as you
          craft a collection of incredible memories that will ignite your heart
          whenever you reflect upon them.
        </p>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3NGQwM2Y4YmRhYjI0ZjJjNjMwYTIwYmE2NWNhZTg2YjY0ZTc2NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4T1FGdX8Klmfp4aSbW/giphy.gif"
          alt="The adventure of life"
        />
      </div>
    </>
  );
};

export default Feature;
