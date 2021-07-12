import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Header from '../../components/Header/Header';
import data from '../../data';
import styles from './postcards.module.css';

export default function PostCards({ images }) {
  // instead of writing props, I can expand with {}
  // and write the props names inside it
  console.log(images);
  const categories = [
    { title: 'birthday' },
    { title: 'christmas' },
    { title: 'graduation' },
    { title: 'newYear' },
    { title: 'landscape' },
    { title: 'random' },
  ];

  return (
    <div>
      <Header />
      <div className={styles.cards}>
        <div>
          {categories.map(
            (
              { title }, // instead of categoryName i can use the name of the Object key(title)
            ) => (
              <div>
                <div className={styles.categoryName}>{title}</div>

                <a href={`postcards/postcardpages/${title}`}>
                  <button className={styles.button}>View more</button>
                </a>
                <div className={styles.row}>
                  {images
                    .filter((image) => image.category === title)
                    .slice(0, 3)
                    .map((image) => {
                      const cardLink = `postcards/${image.id}`;
                      return (
                        <div key={image.title}>
                          <a href={cardLink}>
                            <div>
                              <p className={styles.imageTitle}>{image.title}</p>

                              <img
                                alt={image.title}
                                className={styles.image}
                                key={image}
                                src={image.url}
                              ></img>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
            ),
          )}
        </div>

        {/* {images.map((image) => (
          <div className={styles.row}>
            <div key={image.title}>
              <p>{image.title}</p>
              <img
                alt={image.title}
                className="image"
                key={image}
                src={image.url}
              ></img>
            </div>
          </div>
        ))} */}
      </div>
      {/* <div className={styles.cards}>
        {data.map((card) => (
          <div key={card.title}>
            <div className={styles.row}>
              <h2>{card.category}</h2>
              {card.items.map((item) => (
                <img
                  alt={item.title}
                  className="image"
                  key={item}
                  src={item.url}
                ></img>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export async function getServerSideProps() {
  const { getImages } = await import('../../utils/database');

  const images = await getImages();

  console.log('images', images);

  return {
    props: {
      images: images,
    },
  };
}
