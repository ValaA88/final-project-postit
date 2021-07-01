import Header from '../../components/Header/Header';
import data from '../../data';
import styles from './postcards.module.css';

export default function PostCards() {
  console.log(data);
  return (
    <div>
      <Header />
      <div>
        {data.map((card) => (
          <div key={card.title}>
            <div>{card.category}</div>
            {card.items.map((item) => (
              <img src={item.url}></img>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
