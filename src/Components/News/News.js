import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaImdb } from 'react-icons/fa';
import { Link } from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://663e7a53e1913c476797c189.mockapi.io/news');
                setNews(response.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mx-5 mb-2 mt-5 text-gray-200">Top news</h1>
            <div className="flex flex-wrap justify-center gap-5 p-4">
                {news.slice(0, 3).map(item => ( 
                    <div key={item.id} className="w-80 p-4 animate-fade-in-up" style={{ animation: 'fadeIn 1s' }}> 
                        <div className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 ">
                            <img className="w-full h-36 object-cover p-1" src={item.image} alt={item.name} />
                            <div className="flex-grow p-4">
                                <h2 className="text-xl font-bold text-gray-500 mb-2">{item.name}</h2>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-400 text-sm">{item.date}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <span className="text-yellow-600 font-semibold">{item.rating}</span>
                                        <FaImdb className="text-orange-400 ml-2" />
                                        <span className="text-orange-500 font-semibold">{item.imdbRating}</span>
                                    </div>
                                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/crud2"><button className='p-2 bg-amber-400 rounded-md mx-10 hover:bg-yellow-500'>Go to Edit</button></Link>

        </div>
    );
};

export default News;
