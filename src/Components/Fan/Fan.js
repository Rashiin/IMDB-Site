import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarIcon, PlayIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import "./fan.css"
const Fan = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/Fan')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    return (
        <motion.div className="container mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">Featured Movies</h2>
        <Carousel>
            {Array(Math.ceil(movies.length / 4)).fill().map((_, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4" style={{ overflowY: 'hidden' }}>
                            {movies.slice(slideIndex * 4, (slideIndex + 1) * 4).map(movie => (
                                <motion.div className="p-4 flex flex-col justify-between h-full" key={movie.id} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                        <img className="w-full h-64 sm:h-auto object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-stone-200">{movie.title}</h3>
                                            <p className="text-gray-400 line-clamp-3">{movie.overview}</p>
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="flex items-center space-x-1 text-sm text-gray-300">
                                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                                    <p>{movie.imdb}</p>
                                                </div>
                                                <button className="px-3 py-1 border-1 border-solid border-yellow-400 text-white rounded hover:bg-yellow-600 transition duration-300 flex items-center space-x-1">
                                                    <PlayIcon className="h-4 w-4" />
                                                    <span className='hover:bg-yellow-600'>Watch Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </motion.div>
    );
}

export default Fan;
