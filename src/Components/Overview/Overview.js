import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaFilm, FaImdb, FaPlayCircle, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './over.css'

const Overview = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://rashiin.github.io/api/db.json');
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <div className='slick-list overflow-hidden' style={{ overflowY: 'hidden' }}> 
            <h1 className="p-4 mx-3 text-3xl font-bold my-4 text-yellow-400">IMDB Overview</h1>
            <Slider {...settings} className="overflow-y-hidden" style={{ overflowY: 'hidden' }}>
                {data.map((item) => (
                    <motion.div key={item.id} className="p-3 items-center object-center overflow-y-hidden" 
                        whileHover={{ scale: 1.05 }} 
                        transition={{ duration: 0.3 }}
                        style={{ overflowY: 'hidden' }}
                    > 
                        <div className=" overflow-y-hidden overflow-hidden m-3 text-slate-200 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105" style={{ maxWidth: '300px' , overflowY:"hidden"}}>
                            <img
                                className="w-full h-56 object-cover p-1" 
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={item.title}
                            />
                            <div className="p-3 flex flex-col h-48 bg-gradient-to-t from-stone-900 via-transparent rounded-b-lg" style={{ overflowY: 'hidden' }}>
                                <h2 className="text-lg font-bold  mb-2"> 
                                    {truncateText(item.title, 25)} {}
                                </h2>
                                <p className="text-sm  overflow-hidden mb-2"> 
                                    {truncateText(item.overview, 50)} 
                                </p>
                                <div className="flex justify-between items-center ">
                                    <div className="flex items-center text-sm"> 
                                        <FaStar className="text-yellow-500 mr-1" /> {item.vote_average}
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <FaFilm className="mr-1" /> {item.original_language}
                                    </div>
                                    <div className="flex items-center text-sm"> 
                                        <FaImdb className="text-yellow-500 mr-1" /> {item.popularity}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-1 px-2 rounded text-xs sm:text-sm md:text-base">
                                        <FaPlayCircle className=' bg-transparent' /> Watch Trailer
                                    </button>
                                    <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-1 px-2 rounded text-xs sm:text-sm md:text-base">
                                        <FaInfoCircle  className=' bg-transparent'/> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
};

export default Overview;
