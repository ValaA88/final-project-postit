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
        <img
          className={styles.backgroundImage}
          alt="girlSwing"
          src="../../background.png"
        ></img>
        <div className={styles.allColumns}>
          {categories.map(
            (
              { title }, // instead of categoryName i can use the name of the Object key(title)
            ) => (
              <div>
                <div className={styles.categoryName}>{title}</div>
                {/* <div> */}
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
                <a href={`postcards/postcardpages/${title}`}>
                  <button className={styles.button}>View more</button>
                </a>
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
      <div>
        <div className={styles.bottomColumn}>
          <p className={styles.bottomText}>
            Sundays sitting on your back porch And I came on with a couple of
            chords And I played for you
            <br></br>
            <br></br>
            You let me keep you entertained With stories I exaggerate That you
            know aren't true And as you sit there making daisy chains
            <br></br>
            <br></br> And I throw in a hand grenade And tell you how it is, I
            really feel for you<br></br> <br></br>I'm sending postcards from my
            heart Your love for a postmark and then <br></br>
            <br></br>You know that you make me feel like we've been Caught like
            kids in the school yard again <br></br>
            <br></br>And I can't keep it to myself
          </p>
          <img className={styles.bottomImage} src="../../swing_girl.png"></img>
        </div>
      </div>
      <footer className={styles.footer}>
        &#169; Vala A - Postit final project
      </footer>
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
