import Router from 'next/router';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './singlePostCard.module.css';

// this is front-end code
export default function SinglePostCard({ card }) {
  console.log('vala', card);
  // const [quantity, setQuantity] = useState(0);

  // const [count, setCount] = useState(0);
  // const handleCart = (model) => {
  //   setCount(count + 1);
  // pass the count to the cookie here
  // };

  return (
    <div>
      <Header />
      <div className={styles.cardTitle}>{card.title}</div>
      <img className={styles.image} src={card.url} />
      <h1 className={styles.inputTextHeader}>Write your text </h1>
      <input className={styles.inputBox}></input>
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
