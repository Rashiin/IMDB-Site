import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaThumbsUp, FaImdb } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Exclusive = ({ setCrudPage }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://663e7a53e1913c476797c189.mockapi.io/exclusive');
            setData(result.data);
        };
        fetchData();
    }, []);

    const handleGoToCrud = () => {
        setCrudPage(true);
    };

    return (
        <div className='mt-5 '>
            <div className=" text-3xl  mx-5 p-1 font-bold text-gray-200 mb-4" style={{overflowX:"hidden"}}>IMDb Originals</div>
            <div className="flex flex-wrap  pb-5 px-4 justify-around">
                {data.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 rounded-lg overflow-hidden shadow-sm shadow-yellow-200 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-amber-300 overflow-y-hidden" style={{overflowX:"hidden"}}>
                        <div className="relative overflow-x-hidden" style={{overflowX:"hidden"}}>
                            <img src={item.image} alt={item.name} className="w-full h-auto" />
                            <div className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 flex items-center">
                                <FaThumbsUp className="mr-1" /> {item.likes}
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="font-bold  text-gray-300">{item.name}</h2>
                            <p className=' text-gray-300'>{item.description}</p>
                            <div className="flex items-center mt-2 text-yellow-400">
                                <FaImdb className="mr-1" /> IMDB Team
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
            <Link to="/crud"><button className='p-2 bg-amber-400 rounded-md mx-10 hover:bg-yellow-500'>Go to Edit</button></Link>

        </div>
    );
};

export default Exclusive;
