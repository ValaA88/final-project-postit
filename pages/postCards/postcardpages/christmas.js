import Header from '../../../components/Header/Header';
import styles from '../../postcards/singlepostcard.module.css';

export default function SingleCardPage() {
  const categories = ['christmas'];
  return (
    <div>
      <Header />
      <div>{categories}</div>
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
