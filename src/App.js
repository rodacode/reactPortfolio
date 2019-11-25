import React from 'react';
import './App.scss';
import Home from './views/home/Home';
import { Provider } from 'react-redux';
import { store } from './store/redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
