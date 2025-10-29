import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  const linkTelegram = 'https://t.me/Diva13';
  return (
    <div className={styles.container} id="home">
      <div className={styles.content}>
        <h1>Nara Milano Beauty Space</h1>
        <p>Bellezza e cura di te</p>
        <a href={linkTelegram} target="_blank" rel="noopener noreferrer" className={styles.btn}>
          Prenota un appuntamento
        </a>
      </div>
    </div>
  );
};

export default Home;
