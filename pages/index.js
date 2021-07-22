import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from './index.module.css';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div className={styles.homePage}>
        <Header />
        <div>
          <div className={styles.mainTextAndImage}>
            <img
              className={styles.backgroundImage}
              alt="girlSwing"
              src="../../swing_girl.png"
            ></img>
          </div>
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <div className={styles.header}>Register</div>
              <div className={styles.box}>
                <form
                  onSubmit={async (event) => {
                    alert('haha');
                    event.preventDefault();
                    const response = await fetch('/api/register', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                      }),
                    });
                  }}
                >
                  <div className={styles.inputGroup}>
                    <label className={styles.labelText} type="username">
                      First Name
                    </label>
                    <input
                      onChange={(event) => setFirstName(event.target.value)}
                      type="text"
                      name="username"
                      className={styles.loginInput}
                      placeholder="Username"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.labelText} type="username">
                      Last Name
                    </label>
                    <input
                      onChange={(event) => setLastName(event.target.value)}
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
                      onChange={(event) => setEmail(event.target.value)}
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
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      name="password"
                      className={styles.loginInput}
                      placeholder="Password"
                    />
                  </div>
                  <button className={styles.loginBtn}>Register</button>
                  <button className={styles.guestBtn}>Continue as Guest</button>
                </form>
                <p className={styles.alreadyRegistered}>
                  already registered?{' '}
                  <a className={styles.alreadyRegisteredLogin} href="/login">
                    Login here
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.mainText}>
              <h1 className={styles.h1Text}>Postits</h1>
              <h2 className={styles.h2Text}>Spread The Love</h2>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        &#169; Vala A - Postit final project
      </footer>
    </div>
  );
}
