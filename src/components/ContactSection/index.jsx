import React from 'react';
import style from './ContactSection.module.scss';

const ContactSection = () => {
  return (
    <div id="contact" className={style.container}>
      <h3 className={style.title}>Contatti</h3>
      <div className={style.contacts}>
        <p>
          <i className="bi bi-telephone-fill"></i>{' '}
          <a href="tel:+393804368620" target="_blank">
            {' '}
            +39 3804368620
          </a>
        </p>
        <p>
          <i className="bi bi-whatsapp"></i>{' '}
          <a href="https://wa.me/393804368620" target="_blank">
            {' '}
            Scrivimi
          </a>
        </p>
        <p>
          <i className="bi bi-instagram"></i>
          <a
            href="https://www.instagram.com/nara.milano?igsh=OG52bWhzZ3pmZHI1&utm_source=qr"
            target="_blank"
            rel="noreferrer">
            {' '}
            @nara.milano
          </a>
        </p>
        <p>
          <i className="bi bi-geo-alt-fill"></i>{' '}
          <a
            href="https://maps.app.goo.gl/7A3dSyx8jAwg46aU6?g_st=aw"
            target="_blank"
            rel="noreferrer">
            Viale Sabotino 19/2, Milano
          </a>
        </p>
      </div>
      <p className={style.copy}>
        © {new Date().getFullYear()} Nara Milano Beauty Space. Tutti i diritti riservati.
      </p>
    </div>
  );
};

export default ContactSection;
