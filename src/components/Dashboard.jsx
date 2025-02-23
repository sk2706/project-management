import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to the Dashboard 💜</h1>

      <nav className={styles.nav}>
        <Link to="/login" className={styles.navLink}>Login</Link>
        <Link to="/signup" className={styles.navLink}>Signup</Link>
      </nav>

      <div className={styles.card}>
        <p>This is your project management dashboard.</p>
        <p>Stay organized and track your progress easily!</p>
      </div>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
};

export default Dashboard;
