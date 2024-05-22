import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'; // Import framer-motion for animations

const Top = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/top');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h1 className="text-3xl font-bold my-8 text-stone-100 mx-5">Top on IMDb</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {movies.map(movie => (
                    <motion.div
                        key={movie.id}
                        className="rounded overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 border-solid border-yellow-300 border-1 bg-gray-800 text-white"
                        whileHover={{ scale: 1.05 }} 
                        transition={{ duration: 0.5 }}  
                    >
                        <img
                            className="w-full h-48 object-cover" 
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-yellow-300">{movie.title}</div>
                            <p className="text-sm">{movie.release_date}</p>
                            <p className="text-xs overflow-ellipsis overflow-hidden h-12">{movie.overview}</p>
                            <p className="flex items-center text-sm mt-2">
                                <StarIcon className="h-4 w-4 inline-block text-yellow-500 mr-1" />
                                {movie.vote_average} ({movie.vote_count} votes)
                            </p>
                            <div className="flex items-center mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-yellow-500 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-xs">Recommended</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Top;
