import React from 'react';
import Routing from './utils/Routing'

import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux'
import reducers from './redux/reducers/index'
import thunk from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

function App() {
  return (
    <div>
       <Provider store={store}>
           <Routing/>
       </Provider>
    </div>
       
  );
}

export default App;
