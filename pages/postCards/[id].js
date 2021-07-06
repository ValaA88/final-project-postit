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
      {card.url}
      {card.title}
      <img src={card.url} />
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
