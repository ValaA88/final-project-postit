import { getCookieValue, setCookie } from '../../utils/cookies';
import styles from './Header.module.css';

export default function Header() {
  const email = getCookieValue('login');
  const handleLogout = () => {
    setCookie('login', false);
  };
  return (
    <header className={styles.header}>
      <a href="/">Home Page</a>
      <a href="about">About</a>
      <a href="postcards">Post Cards</a>
      <div className={styles.cart}>
        {email && <p className={styles.item}>{email}</p>}
        {email ? (
          <a className={styles.item} onClick={handleLogout} href="login">
            Logout
          </a>
        ) : (
          <a className={styles.item} href="login">
            Login
          </a>
        )}

        <img className={styles.icon} src="../shoping-card.jpeg" />
      </div>
    </header>
  );
}

// age email bud, esmo bezaare, age nabood, login bezaare
