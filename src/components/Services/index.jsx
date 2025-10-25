import React from 'react';
import style from './Services.module.scss';
import Card from 'react-bootstrap/Card';
import firstImgCard from '../../assets/img/imgCard-1.jpg';
import secondImgCard from '../../assets/img/imgCard-2.jpg';
import thirdImgCard from '../../assets/img/imgCard-3.jpg';

const Services = () => {
  return (
    <>
      <h1 className={style.title}>Услуги</h1>
      <div id="services" className={style.container}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={firstImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>Наращивание ресниц</Card.Title>
            <Card.Text className={style.cardText}>
              Профессиональное наращивание ресниц всех типов, ламинирование ресниц и бровей.
              Индивидуальный подбор стиля и объёма, чтобы взгляд стал выразительным, естественным и
              ухоженным.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={secondImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>Уход за кожей лица</Card.Title>
            <Card.Text className={style.cardText}>
              Профессиональные аппаратные процедуры для глубокого ухода: Hydrafacial, антивозрастные
              и восстанавливающие протоколы. Индивидуальный подбор процедур под ваши потребности для
              сияющей, здоровой и ухоженной кожи
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={thirdImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>Массаж лица</Card.Title>
            <Card.Text className={style.cardText}>
              Профессиональный массаж лица для сияния и упругости кожи. Расслабление мышц, улучшение
              кровообращения и лимфодренаж. Индивидуальный подход под ваши потребности для здорового
              и свежего вида кожи.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Services;
