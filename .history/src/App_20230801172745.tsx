import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [buttons, setButtons] = useState([]);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const url = 'https://api.chucknorris.io/jokes/categories';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setButtons(json);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const getJokeCategory = async (category: never) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setJoke(json.value);
    } catch (error) {
      console.log("Error fetching joke:", error);
    }
  };

  const getJoke = async () => {
    const url = `https://api.chucknorris.io/jokes/random`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setJoke(json.value);
    } catch (error) {
      console.log("Error fetching joke:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Chuck Norris Jokes</p>
            <button
              className="btn"
              onClick={() => getJoke()}
            >
            </button>
        <div className="btn-wrapper">
          {buttons.map((item) => (
            <button
              key={item}
              className="btn"
              onClick={() => getJokeCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="joke-wrapper">
          {joke ? joke : "Select a category to get a Chuck Norris joke!"}
        </div>
      </header>
    </div>
  );
}

export default App;