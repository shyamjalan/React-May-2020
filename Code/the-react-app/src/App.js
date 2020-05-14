import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListCustomers from './components/ListCustomers';





function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        
       
      
        <ListCustomers/>

          {/* <Counter/>
          <Counter title="The Counter"/> */}

           {/* <Hello message="React" />
          <Hello message="JSX"/>
          <Hello message="App">
             Hello World React!!
          </Hello> */}

      </section>
    </div>
  );
}

export default App;
