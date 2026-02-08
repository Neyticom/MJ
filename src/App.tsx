import Header from './layouts/Header';
import SideNav from './components/Nav/SideNav';
import Hero from './views/Hero';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <SideNav />
        <Hero />
        {/* Autres sections */}
      </main>
      {/* Footer */}
    </div>
  );
};

export default App;
