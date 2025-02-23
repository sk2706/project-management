import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Dashboard</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Your Tasks</h2>
          <button className={styles.cardButton}>View Tasks</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Upcoming Deadlines</h2>
          <button className={styles.cardButton}>Check Calendar</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Reports</h2>
          <button className={styles.cardButton}>View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
