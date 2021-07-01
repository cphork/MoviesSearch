import { useEffect, useState } from 'react'
import './App.css';
import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"



function App() {

  const apiKey = '45bfa027';

  const [movie, setMovie] =useState(null)

  const getMovie = async (searchTerm) => {

      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
         )
        
      const data = await response.json()

      setMovie(data)

    };

    // ****This is used to generate specific title to appear when page is uploaded******
    // useEffect (() => {getMovie('Spice Girls')}, [])

    useEffect (() => {

      const movies = ['Wonder Woman 1984', 'Spice Girls', 'Devil Wears Prada', 'Wonder Woman',]

      const index = Math.floor(Math.random() * movies.length)

      getMovie(movies[index])
    }, [])

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}


export default App;