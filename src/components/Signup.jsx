import React from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create Account</h1>
        <input className={styles.input} type="text" placeholder="Username" />
        <input className={styles.input} type="email" placeholder="Email" />
        <input className={styles.input} type="password" placeholder="Password" />
        <button className={styles.button}>Sign Up</button>
        <Link className={styles.link} to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
