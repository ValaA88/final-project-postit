import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import styles from './index.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.homePage}>
        <Header />
        <div>
          <img
            className={styles.backgroundImage}
            alt="girlSwing"
            src="../../girl_swing.jpeg"
          ></img>
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
                  <label className={styles.emailText} type="email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className={styles.loginInput}
                    placeholder="Email"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.passwordText} type="password">
                    Password
                  </label>
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
      </div>
    </div>
  );
}
