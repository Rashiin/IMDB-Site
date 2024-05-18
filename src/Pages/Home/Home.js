import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaStar, FaPlayCircle, FaImdb } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../../Components/MovieList/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then(response => response.json())
            .then(data => setMovies(data.results));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <Carousel fade indicators={false} interval={3000}>
                {movies.map(movie => (
                    <Carousel.Item key={movie.id}>
                  <img
    className="d-block w-full object-cover h-96 md:h-128 lg:h-160 xl:h-192 2xl:h-224 rounded-lg shadow-lg"
    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    alt={movie.title}
/>


                        <Carousel.Caption className="text-left p-4 rounded-r-lg bg-black bg-opacity-50">
                            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-yellow-300 bg-transparent">{movie.title}</h3>
                            <p className="hidden md:block lg:text-lg xl:text-xl text-yellow-300 opacity-40">{movie.overview}</p>
                            <div className="flex items-center space-x-2 mt-2 bg-transparent">
                                <FaStar color="yellow" /> <span className="text-yellow-300 text-lg lg:text-xl">{movie.vote_average}</span>
                                <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer">
                                    <FaPlayCircle color="red" size="2em" className="lg:text-3xl xl:text-4xl bg-transparent" />
                                </a>
                                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer">
                                    <FaImdb color="yellow" size="2em" className="lg:text-3xl xl:text-4xl bg-transparent " />
                                </a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* <MovieList/> */}
        </div>
    );
}

export default Home;
