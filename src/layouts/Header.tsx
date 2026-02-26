import HeaderNav from '../components/Nav/HeaderNav';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <HeaderNav />
      <button type="button" className="header__client-button" disabled>
        Espace Client
      </button>
    </header>
  );
};

export default Header;
