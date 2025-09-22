import './Hero.scss'

function Hero() {

  return (
    <div className="hero">
      <header className='header'>
        <ul className='header_list'>
          <li className='header_item'>Qui suis-je ?</li>
          <li className='header_item'>Mes offres</li>
          <li className='header_item'>Ma vision du sport</li>
        </ul>
        <button className='header_button'>Espace Client</button>
      </header>
      <div className="hero__content">
        <div className="hero__info">
          <h1 className="hero__title">
            <span className="sr-only">Maxence Jeudy</span>
            <img
              src="../src/assets/maxence-title.svg"
              alt="Maxence"
              className="hero__title-svg"
              aria-hidden="true"
            />
            <br />
            <span className="hero__title--solid">Jeudy</span>
          </h1>
          <p className="hero__subtitle">
            Un coach sportif<br />
            à l'écoute de vos besoins
          </p>
          <div className="hero__actions">
            <button className="hero__action-btn hero__action-btn--outline">
              Offres de coaching
            </button>
            <button className="hero__action-btn hero__action-btn--solid">
              Prendre rendez-vous
            </button>
          </div>
        </div>
        <div className="hero__image">
          <img src="/src/assets/maxence.png" alt="Photo de Maxence Jeudy, le coach sportif" />
        </div>
      </div>
    </div>
  )
}

export default Hero
