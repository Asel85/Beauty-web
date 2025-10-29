import React from 'react';
import style from './Services.module.scss';
import Card from 'react-bootstrap/Card';
import firstImgCard from '../../assets/img/imgCard-1.jpg';
import secondImgCard from '../../assets/img/imgCard-2.jpg';
import thirdImgCard from '../../assets/img/imgCard-3.jpg';
import fourthImgCard from '../../assets/img/imgCard-4.jpeg';
import fifthImgCard from '../../assets/img/imgCard-5.jpeg';
import sixthImgCard from '../../assets/img/imgCard-6.jpeg';
const Services = () => {
  return (
    <>
      <h1 className={style.title}>Servizi</h1>
      <div id="services" className={style.container}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={firstImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>Extension Ciglia e Laminazione</Card.Title>
            <Card.Text className={style.cardText}>
              Servizio professionale di extension ciglia di ogni tipologia e laminazione di ciglia e
              sopracciglia. Ogni trattamento è personalizzato in base alla morfologia dello sguardo
              e ai desideri della cliente, per ottenere un risultato armonioso, naturale ed
              elegante. L’obiettivo è valorizzare la bellezza dello sguardo, rendendolo intenso,
              curato e raffinato, nel pieno rispetto della salute e della struttura naturale delle
              ciglia
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={secondImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>Trattamenti Viso Professionali</Card.Title>
            <Card.Text className={style.cardText}>
              Trattamenti estetici avanzati per la cura profonda della pelle, realizzati con
              tecnologie moderne e protocolli personalizzati. Tra i principali: Hydrafacial,
              trattamenti anti-età e programmi rigeneranti per il recupero e il riequilibrio della
              pelle. Ogni percorso è studiato su misura in base alle esigenze individuali, per
              donare al viso luminosità, idratazione e un aspetto sano e curato.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={thirdImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>Massaggio Viso Professionale</Card.Title>
            <Card.Text className={style.cardText}>
              Massaggio viso eseguito con tecniche avanzate per migliorare la luminosità, la
              tonicità e la compattezza della pelle. Favorisce il rilassamento muscolare, stimola la
              microcircolazione e il drenaggio linfatico, contribuendo a un viso più disteso, fresco
              e vitale. Ogni trattamento è personalizzato in base alle esigenze individuali, per
              valorizzare la naturale bellezza e salute della pelle
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fourthImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>Epilazione Laser</Card.Title>
            <Card.Text className={style.cardText}>
              Trattamento di epilazione laser di ultima generazione per una pelle perfettamente
              liscia e vellutata, in modo rapido, confortevole e duraturo. La tecnologia avanzata
              del laser agisce in modo mirato e delicato sul bulbo pilifero, garantendo risultati
              sicuri ed efficaci senza irritazioni, tagli o peli incarniti. Un’esperienza di
              benessere e precisione, per dire addio ai metodi tradizionali e ottenere una pelle
              setosa senza sforzo
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fifthImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>LipoLaser</Card.Title>
            <Card.Text className={style.cardText}>
              Il LipoLaser è un trattamento innovativo per rimodellare le zone critiche e ridurre i
              volumi senza ricorrere a interventi chirurgici o lunghi tempi di recupero. Il laser
              agisce delicatamente sulle membrane delle cellule adipose, liberando il grasso che
              viene eliminato naturalmente attraverso il sistema linfatico. Un approccio non
              invasivo, privo di dolore e stress per l’organismo, per ottenere una silhouette più
              tonica e armoniosa in totale sicurezza e comfort
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={sixthImgCard} className={style.img} />
          <Card.Body>
            <Card.Title className={style.cardTitle}>MED PERFECT Sculpt</Card.Title>
            <Card.Text className={style.cardText}>
              La tecnologia HIFEM (High-Intensity Focused Electromagnetic) permette di rimodellare e
              tonificare i glutei in modo non invasivo, senza dolore e senza allenamento fisico
              intenso. Ogni trattamento equivale a 20.000 squat, stimolando i muscoli in profondità
              e migliorando tono, compattezza e definizione. Il protocollo è studiato per ottenere
              risultati visibili e duraturi, aumentando la massa muscolare e migliorando la
              silhouette in maniera armoniosa e naturale. È ideale per chi desidera rafforzare e
              sollevare i glutei senza stress per le articolazioni o per l’organismo, integrando
              efficacemente i trattamenti estetici con uno stile di vita attivo e sano.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Services;
