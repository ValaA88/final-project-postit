import Router from 'next/router';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './singlepostcard.module.css';

// this is front-end code
export default function SinglePostCard({ card }) {
  console.log('vala', card);
  // const [quantity, setQuantity] = useState(0);

  // const [count, setCount] = useState(0);
  // const handleCart = (model) => {
  //   setCount(count + 1);
  // pass the count to the cookie here
  // };
  const [actualDateInput, setActualDateInput] = useState(false);

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
          <div className={styles.textColumn}>
            <h1 className={styles.inputTextHeader}>Write your text </h1>
            <div className={styles.textAndCalender}>
              <textarea className={styles.textArea}></textarea>
              <p className={styles.calenderText}>Choose a date</p>
              <input
                className={styles.calender}
                tabIndex="1"
                onChange={(e) => setActualDateInput(e.currentTarget.value)}
                type="datetime-local"
                name="deadLine"
                value={actualDateInput}
              />
              <button className={styles.button}>Next</button>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        &#169;Copy by Vala A - Postit final project
      </footer>
    </div>
  );
}
// this is back-end code -- You are in server side
export async function getServerSideProps(context) {
  const { getCardById } = await import('../../utils/database');
  // this is server side code.

  const card = await getCardById(context.query.id);
  console.log(card);

  return { props: { card } };
}
