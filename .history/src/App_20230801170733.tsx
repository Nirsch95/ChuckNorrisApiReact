import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const url = 'https://api.chucknorris.io/jokes/categories';
    
    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          setButtons(json);
      } catch (error) {
          console.log("error", error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div className="App">
      <header className="App-header">
        <p>Chuck Norris Jokes</p>
          <div className="btn-wrapper">
            {buttons.map((item) => {
              return (
                <button 
                  key={item}
                  className="btn"
                  onClick={() => getJoke}
                >{item}</button>
              )
            })}
          </div>
      </header>
    </div>
  );
}

export default App;
