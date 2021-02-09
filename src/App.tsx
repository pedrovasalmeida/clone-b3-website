/** Packages */
import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';

/** Components */
import Routes from './routes';
import Header from './components/Header';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </>
  );
};

export default App;
