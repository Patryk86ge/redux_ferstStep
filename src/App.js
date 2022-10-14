import React from 'react';
import './App.css';
import MovesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";


function App() {
  return (
    <div className="App">
      <MovesContainer />
      <MoviesForm />
    </div>
  );
}

export default App;
