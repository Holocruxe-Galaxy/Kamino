import React from 'react';
import './waitlist.css';

const Waitlist = () => {
  return (
    <section id="waitlist" className="waitlist">    
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
  );
};

export default Waitlist;
