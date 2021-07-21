import Header from '../../components/Header/Header';
import styles from '../../pages/checkoutpage/checkoutpage.module.css';

export default function checkoutPage() {
  return (
    <div>
      <Header />
      <div className={styles.column}>
        <div className={styles.textColumn}>
          <p className={styles.text}>
            Thank you for your visit
            <br />
            See you next time
          </p>
          <button className={styles.button}>Send another Card</button>
        </div>
        <img
          src="swing_girl.png"
          alt="swig_girl"
          className={styles.image}
        ></img>
      </div>
    </div>
  );
}
