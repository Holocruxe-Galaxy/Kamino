import React, {useState} from "react";
import Stars from "../Stars/stars";
import { Canvas } from "@react-three/fiber";
import styles from "./waitlist.module.css";
import ReCAPTCHA from "react-google-recaptcha";

const Waitlist = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!showCaptcha) {
      setShowCaptcha(true);
      return;
    }

    if (captchaValue === "") {
      console.error("Please verify the captcha");
      return;
    }

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, captchaValue }),
    });
    if (response.ok) {
      setIsRegistered(true);
    } else {
      console.error("Registration failed");
    }

    const data = await response.json();
    console.log(data);

    setName("");
    setEmail("");
    setCaptchaValue("")
  };

  const onChange = (value) => {
    setCaptchaValue(value);
  };


  return (
    <section id="waitlist" className={styles.waitlist}>
      <form className={styles.join_waitlist} onSubmit={handleSubmit}>
        <h2>WAITLIST</h2>
        <p>
          Join us on this exciting journey as we transform the way we capture
          and celebrate the beauty of life.
        </p>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         {showCaptcha && (
          <ReCAPTCHA sitekey="6LcEW_0mAAAAAPUG92t53CS7LpIQL57S5ttBz4He" onChange={onChange} />
        )}
        <button type="submit">Step inside!</button>
        {isRegistered && (
          <p>Email registration added to the waitlist queue!</p>
        )}
      </form>
    </section>
  );
};

export default Waitlist;
