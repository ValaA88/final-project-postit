import Header from '../../components/Header/Header';
import data from '../../data';

export default function PostCards() {
  console.log(data);
  return (
    <div>
      <Header />
      {data.map((card) => (
        <div key={card.title}>
          <div>{card.title}</div>
          <img src={card.url}></img>
        </div>
      ))}
    </div>
  );
}
