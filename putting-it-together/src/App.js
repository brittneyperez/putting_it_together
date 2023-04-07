import './App.css';
import React from 'react';
import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Person 
        lastName={"Doe"}
        firstName={"Jane"}
        age={ 45 } // to be changed state
        hairColor={"Black"}
      />
      <Person 
        lastName={"Smith"}
        firstName={"John"}
        age={ 88 } // to be changed state
        hairColor={"Brown"}
      />
      <Person 
        lastName={"Fillmore"}
        firstName={"Millard"}
        age={ 50 } // to be changed state
        hairColor={"Brown"}
      />
      <Person 
        lastName={"Smith"}
        firstName={"Maria"}
        age={ 62 } // to be changed state
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
