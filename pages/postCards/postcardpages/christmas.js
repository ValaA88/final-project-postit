import Header from '../../../components/Header/Header';
import styles from '../../postcards/singlepostcard.module.css';

export default function SingleCardPage({ images }) {
  const categoriesPage = 'christmas';
  // const cardLink = `postcards/${image}`;

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
        {images
          .filter((image) => image.category === categoriesPage)
          .map((image) => {
            const cardLink = `/postcards/${image.id}`;
            return (
              <a href={cardLink}>
                <img src={image.url}></img>
              </a>
            );
          })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { getImages } = await import('../../../utils/database');

  const images = await getImages();

  return {
    props: {
      images: images,
    },
  };
}
