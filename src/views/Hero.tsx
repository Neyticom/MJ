import './Hero.scss';

import heroTitle from '../assets/maxence-title.svg';
import photoMaxence from '../assets/maxence.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__titles">
          <h1 className="hero__title">
            <img src={heroTitle} className="hero__title-firstname" />
            <span className="hero__title-lastname">Jeudy</span>
          </h1>
          <p className="hero__subtitle">
            <span>Un coach sportif</span>
            <span>à l'écoute de vos besoins</span>
          </p>
        </div>
        <div className="hero__actions">
          <button type="button" className="hero__action-btn hero__action-btn--primary">
            Offres de coaching
          </button>
          <button className="hero__action-btn hero__action-btn--secondary">
            Prendre rendez-vous
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src={photoMaxence} alt="Photo de Maxence Jeudy, le coach sportif" />
      </div>
    </section>
  );
};

export default Hero;
