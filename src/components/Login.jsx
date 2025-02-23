import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <input className={styles.input} type="text" placeholder="Username" />
        <input className={styles.input} type="password" placeholder="Password" />
        <button className={styles.button}>Login</button>
      </div>
    </div>
  );
};

export default Login;
