// inja ye login dorost mikonam va bayad bebinam chizi ke user neveshte tuye table hast ya na!!! bayad yek login api benevisam

// tuye loin api bayad ye getUserByEmail benevisam ta bebinam password doroste ya na

// github e karl o bebinam chejuri e
// Yaadam baashe: sabz haa typescriptan :D

import React, { useState } from 'react';
import { Link } from 'react-router';
import Header from '../../components/Header/Header';
import styles from '../../pages/login/login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = '../pages/postcards';

  return (
    <div>
      <Header />
      <div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            });
          }}
        >
          <div className={styles.pageColumn}>
            <h1 className={styles.headerText}>Login</h1>

            <div className={styles.innerContainer}>
              <div className={styles.box}>
                <div className={styles.inputGroup}>
                  <label className={styles.labelEmail} type="email">
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
                  <label className={styles.label} type="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={styles.loginInput}
                    placeholder="Password"
                  />
                </div>
                <a href={url}>
                  <button className={styles.button}>Login</button>
                </a>
              </div>
            </div>
            <div>
              <img
                src="swing_girl.png"
                alt="swig_girl"
                className={styles.image}
              ></img>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { getImages } = await import('../../../utils/database');

//   const images = await getImages();

//   console.log('images', images);

//   return {
//     props: {
//       images: images,
//     },
//   };
// }
