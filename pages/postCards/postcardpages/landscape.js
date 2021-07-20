import Header from '../../../components/Header/Header';
import styles from '../../postcards/postcardpages/postcardpages.module.css';

export default function SingleCardPage({ images }) {
  const categoriesPage = 'landscape';
  // const cardLink = `postcards/${image}`;

  return (
    <div>
      <Header />
      <img
        className={styles.backgroundImage}
        alt="girlSwing"
        src="../../background2.png"
      ></img>
      <div>{categoriesPage}</div>
      <div className={styles.imageColumn}>
        {images
          .filter((image) => image.category === categoriesPage)
          .map((image) => {
            const cardLink = `/postcards/${image.id}`;
            return (
              <a href={cardLink}>
                <div className={styles.imageAndTitle}>
                  <div className={styles.imageTitle}>{image.title}</div>
                  <div>
                    <img className={styles.images} src={image.url}></img>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
      <footer className={styles.footer}>
        &#169; Vala A - Postit final project
      </footer>
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
