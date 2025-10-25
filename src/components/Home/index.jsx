import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  const linkTelegram = 'https://t.me/Diva13';
  return (
    <div className={styles.container} id="home">
      <div className={styles.content}>
        <h1>Nara Milano Beauty Space</h1>
        <p>Красота и забота о вас</p>
        <a href={linkTelegram} target="_blank" rel="noopener noreferrer" className={styles.btn}>
          Записаться
        </a>
      </div>
    </div>
  );
};

export default Home;
