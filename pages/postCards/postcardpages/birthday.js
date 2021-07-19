import Header from '../../../components/Header/Header';
import styles from '../../postcards/singlepostcard.module.css';

export default function SingleCardPage({ image }) {
  const categoriesPage = ['birthday'];
  const cardLink = `postcards/${image}`;

  return (
    <div>
      <Header />
      <img
        className={styles.backgroundImage}
        alt="girlSwing"
        src="../../background1.png"
      ></img>
      <div>{categoriesPage}</div>
      <div>
        <a href={cardLink}>
          <img src="../../birthdayPic/happy_birthday_card_1.jpeg"></img>
        </a>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { getImages } = await import('../../../utils/database');

  const images = await getImages();

  console.log('images', images);

  return {
    props: {
      images: images,
    },
  };
}
