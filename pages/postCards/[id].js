import Router from 'next/router';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './singlepostcard.module.css';

// this is front-end code
export default function SinglePostCard({ card }) {
  // const [quantity, setQuantity] = useState(0);

  // const [count, setCount] = useState(0);
  // const handleCart = (model) => {
  //   setCount(count + 1);
  // pass the count to the cookie here
  // };
  const [actualDateInput, setActualDateInput] = useState(false);
  const [insideText, setInsideText] = useState('');
  const [email, setEmail] = useState('');
  const handleClick = async () => {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        insideText: insideText,
        email: email,
      }),
    });
  };
  return (
    <div>
      <Header />
      <img
        className={styles.backgroundImage}
        alt="girlSwing"
        src="../../background1.png"
      ></img>
      <div className={styles.page}>
        <div className={styles.cardTitle}>{card.title}</div>
        <div className={styles.imageAndTextColumn}>
          <img className={styles.image} src={card.url} />

          <div className={styles.text}>{insideText}</div>

          <div className={styles.textColumn}>
            <h1 className={styles.inputTextHeader}>Write your text </h1>
            <div className={styles.textAndCalender}>
              <textarea
                onChange={(e) => setInsideText(e.target.value)}
                className={styles.textArea}
              ></textarea>
              <p className={styles.calenderText}>Choose a date</p>
              <input
                className={styles.calender}
                tabIndex="1"
                onChange={(e) => setActualDateInput(e.currentTarget.value)}
                type="datetime-local"
                name="deadLine"
                value={actualDateInput}
              />
              <div>
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
              <button onClick={handleClick} className={styles.button}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>&#169; Vala A - Postit</footer>
    </div>
  );
}
// this is back-end code -- You are in server side
export async function getServerSideProps(context) {
  const { getCardById } = await import('../../utils/database');
  // this is server side code.

  const card = await getCardById(context.query.id);

  return { props: { card } };
}
