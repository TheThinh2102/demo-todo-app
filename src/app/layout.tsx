import './App.css';
import { Provider } from "react-redux";
import Todo from './components/Todo';
import React from 'react';
import store from '@/redux/store';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <Todo>
        
      </Todo>
    </Provider>
  );
}

export default App;
