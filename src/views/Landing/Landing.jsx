import React from "react";
import styles from "./Landing.module.css";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";

const Landing = () => {
  return (
    <main className="container">
      <Hero></Hero>

      <section id="features" className="features">
        <div className="vertical-line-1"></div>

        <div className="features-container">
          <span className="background"></span>
          <h4>
            <span>Live </span>
          </h4>
          <h3>Embrace the adventure of life</h3>
          <p>
            Create unforgettable moments that will leave an indelible mark on
            the canvas of your future. Let laughter and joy permeate your days,
            as you craft a collection of incredible memories that will ignite
            your heart whenever you reflect upon them.
          </p>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3NGQwM2Y4YmRhYjI0ZjJjNjMwYTIwYmE2NWNhZTg2YjY0ZTc2NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4T1FGdX8Klmfp4aSbW/giphy.gif"
            alt="The adventure of life"
          />
        </div>

        <div className="features-container configure">
          <div className="vertical-line-2"></div>

          <h4>
            <span>Configure </span>
          </h4>
          <h3>Take control of your privacy and set the stage</h3>
          <p>
            Customize your digital experience by granting permissions, adjusting
            privacy preferences, and shaping the platform to suit your unique
            needs and desires.
          </p>
          <span className="background-2"></span>
          <div>
            <img src="/product.png" alt="holocruxe product screenshot" />
          </div>
        </div>
      </section>     
    </main>
  );
};

export default Landing;
