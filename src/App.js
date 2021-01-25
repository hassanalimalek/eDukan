import React from 'react';
import Routing from './utils/Routing'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers/index'


const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
