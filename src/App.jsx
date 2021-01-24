import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';

import Catalog from './components/Catalog';
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Catalog />
          <Cart />
        </div>
      </Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
