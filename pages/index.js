import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.header}>Register</div>
          <div className={styles.box}>
            <div className={styles.inputGroup}>
              <label type="username">Username</label>
              <input
                type="text"
                name="username"
                className={styles.loginInput}
                placeholder="Username"
              />
            </div>

            <div className={styles.inputGroup}>
              <label type="email">Email</label>
              <input
                type="text"
                name="email"
                className={styles.loginInput}
                placeholder="Email"
              />
            </div>

            <div className={styles.inputGroup}>
              <label type="password">Password</label>
              <input
                type="password"
                name="password"
                className={styles.loginInput}
                placeholder="Password"
              />
            </div>
            <button type="button" className={styles.loginBtn}>
              {' '}
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
