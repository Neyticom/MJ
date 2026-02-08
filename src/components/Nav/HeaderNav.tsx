import './HeaderNav.scss';

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="header-nav__item">
          <a href="#qui-suis-je" className="header-nav__link">
            Qui suis-je ?
          </a>
        </li>
        <li className="header-nav__item">
          <a href="#offres" className="header-nav__link">
            Mes offres
          </a>
        </li>
        <li className="header-nav__item">
          <a href="#vision" className="header-nav__link">
            Ma vision du sport
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
