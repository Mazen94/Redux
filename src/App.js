import React from 'react';
import Home from './pages/Home/Home';
import store from './store.js'
import { Provider } from 'react-redux'
import reducers from "./redux/reducers";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import NavBar from './components/NavBar';
function App() {
  return (
    <Provider store={createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    )}>
      <NavBar />
      <Home />
    </Provider>
  );
}

export default App;
