import { useState } from 'react';
import { Provider } from 'react-redux'; 
import { store } from './redux/store';
import Counter from './components/counter';

import './App.css'

function App() {

  return (
    <Provider store={store}>
      
      <h1>ToDo Redux Toolkit</h1>
      <Counter />
      
    </Provider>
  )
}

export default App
