import './App.css'
import {useState} from "react";
import {Movie} from "./components/Movie.jsx";

const movies = [{
    name: "Matrix"
}, {
    name: "Harry Potter"
}, {
    name: "Star Wars"
},
];

function App() {
    const [favourites, setFavourites] = useState([]);

    function addFavourite(movieName) {
        if (favourites.includes(movieName)) {
            setFavourites(favourites.filter((movie) =>
                movie !== movieName
            ))
        } else {
            setFavourites([...favourites, movieName])
        }
    }

    return (
        <>
            <h1>
                {favourites.length}
            </h1>
            {movies.map(function (movie) {
                return (
                    <Movie movieName={movie.name} addFavourite={addFavourite}/>
                )
            })}
        </>
    )
}

export default App
