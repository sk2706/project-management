import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Login Page</h2>
        <input className={styles.input} type="text" placeholder="Username" />
        <input className={styles.input} type="password" placeholder="Password" />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
