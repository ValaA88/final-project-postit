import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">Home Page</a>
      <a href="about">About</a>
      <a href="postcards">Post Cards</a>
      <div className={styles.cart}>
        <img className={styles.icon} src="../shoping-card.jpeg" />
      </div>
    </header>
  );
}
