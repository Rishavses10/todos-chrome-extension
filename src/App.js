import React from 'react';
import { createStore } from 'redux';
import { useState } from 'react';
import { Provider } from 'react-redux';

import rootReducer from './store/Reducers/rootReducer';
import Wrapper from './views/Wrapper';
import './App.css';


function App() {
  const [themeState, toggleThemeState] = useState('light');
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Wrapper/>
    </Provider>
  );
}

export default App;
