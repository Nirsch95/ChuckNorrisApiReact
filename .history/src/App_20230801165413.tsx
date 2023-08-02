import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    useEffect(() => {
      const url = 'https://api.chucknorris.io/jokes/categories';
  
      const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log("error", error);
        }
      };
  
      fetchData();
  
    }, []);
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
