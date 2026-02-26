import './Hero.scss';

import heroTitle from '../assets/maxence-title.svg';
import photoMaxence from '../assets/maxence.png';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__titles">
          <h1 id="hero-title" className="hero__title" aria-label="Maxence Jeudy">
            <img
              src={heroTitle}
              className="hero__title-firstname"
              alt="Maxence"
              aria-hidden="true"
            />
            <span className="hero__title-lastname" aria-hidden="true">
              Jeudy
            </span>
          </h1>
          <p className="hero__subtitle">
            <span>Un coach sportif</span>
            <span>à l'écoute de vos besoins</span>
          </p>
        </div>
        <div className="hero__actions">
          {/* TODO : REMOVE DISABLED ATTRIBUTES AND ADD ONCLICK HANDLER */}

          <button type="button" className="hero__action-btn hero__action-btn--primary" disabled>
            Offres de coaching
          </button>
          <button type="button" className="hero__action-btn hero__action-btn--secondary" disabled>
            Prendre rendez-vous
          </button>

          {/* TODO END */}
        </div>
      </div>
      <div className="hero__image">
        <img src={photoMaxence} alt="Photo de Maxence Jeudy, le coach sportif" loading="eager" />
      </div>
    </section>
  );
};

export default Hero;
