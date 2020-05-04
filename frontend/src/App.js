import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './config/store';
import EventForm from './components/EventForm';


const App = () => {
  return (
    <Provider store={store}>
      <EventForm />
    </Provider>
  );
}

export default App;
