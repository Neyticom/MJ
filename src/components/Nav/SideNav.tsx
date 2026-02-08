import './SideNav.scss';

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul className="side-nav__list">
        <li className="side-nav__item side-nav__item--current">
          <a href="#accueil" className="side-nav__link">
            Accueil
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#debuter" className="side-nav__link">
            Débuter le sport
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#offres" className="side-nav__link">
            Les offres
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#qui-suis-je" className="side-nav__link">
            Qui suis-je ?
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#contact" className="side-nav__link">
            Me contacter
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
