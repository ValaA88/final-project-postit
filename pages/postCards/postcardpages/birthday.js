import Header from '../../../components/Header/Header';
import styles from '../../postcards/singlepostcard.module.css';

export default function SingleCardPage() {
  const categoriesPage = ['birthday'];

  return (
    <div>
      <Header />
      <div>{categoriesPage}</div>
      <a href={card}>
        <div>
          <img src="../../birthdayPic/happy_birthday_card_1.jpeg"></img>
        </div>
      </a>
    </div>
  );
}

// this is back-end code -- You are in server side
export async function getServerSideProps(context) {
  const { getCardById } = await import('../../../utils/database');
  // this is server side code.

  const card = await getCardById(context.query.id);
  console.log(card);

  return { props: { card } };
}
