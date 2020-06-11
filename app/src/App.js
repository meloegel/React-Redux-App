import React from 'react';
import './App.css';
import ComicForm from './components/ComicForm';
import DailyComic from './components/DailyComic'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {comicReducer as reducer} from './reducers/comicReducer'


const store = createStore(reducer, applyMiddleware(thunk));


export default function App() {
  return(
    <Provider store={store}>
      <div className='apps'>
        <h1>Dogs</h1>
        <ComicForm />
        <DailyComic />
      </div>
    </Provider>
  )
}