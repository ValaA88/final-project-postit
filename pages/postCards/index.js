import Header from '../../components/Header/Header';
import data from '../../data';
import styles from './postcards.module.css';

export default function PostCards() {
  console.log(data);
  return (
    <div>
      <Header />
      <div className={styles.cards}>
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
      </div>
    </div>
  );
}
