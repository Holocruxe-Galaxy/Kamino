import React from "react";
import styles from "./Landing.module.css";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";

const Landing = () => {
  return (
    <main className="container">
      <Hero></Hero>

      <Feature></Feature>
      <Feature></Feature>

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
