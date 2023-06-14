import React from 'react';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <main className="container">
      <section className="hero-container" id="section1">
        <div className="hero">
          <h2>
            <span>Live </span>
            <span>Experiment </span>
            <span>Configure</span>
          </h2>
          <h1>Leave a legacy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            labore tenetur, sit reiciendis nesciunt fugit hic modi quam earum
            nisi.
          </p>
          <button>Know more</button>
          <button className="cta">Let the magic begin!</button>
        </div>
      </section>

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

      <section id="waitlist" className="waitlist">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <form className="join-waitlist">
          <h2>Join our waitlist!</h2>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <button type="submit">Step inside!</button>
        </form>
      </section>
    </main>
  );
};

export default Landing;
