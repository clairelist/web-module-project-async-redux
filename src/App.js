import React from 'react';
import './App.css';
import DogForm from './components/DogForm';

import {data} from './dogData/doggoData';

function App(props) {

  const doggos= data;

  return (
    <div className="App">
      Async Redux Project!
      <h2>The DOG database search funcy!</h2>

      <div className='loading'>Loading your dog(s), please wait...</div>
      <form>Search for a DOG BREED
        <input 
        placeholder='find a breed'
        />
        <button>FETCH BOY!</button>
      </form>
    
      <DogForm doggos={doggos} />

      </div>
   
  );
}

export default App;