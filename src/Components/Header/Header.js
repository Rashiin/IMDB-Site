import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        axios.get('https://rashiin.github.io/store/menu')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setMenuItems(response.data);
                } else {
                    console.error('Unexpected format in response: ', response.data);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <header className="bg-black text-white py-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className={`w-full lg:w-auto ${isOpen ? 'block' : 'hidden'} lg:flex`}>
                        {menuItems && menuItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex items-center space-x-2 cursor-pointer transition duration-300 hover:bg-gray-800 p-2 rounded"
                            >
                                {index === 0 && (
                                    <img
                                        src={item.imgSrc}
                                        alt={item.name}
                                        className="w-8 h-8 object-contain rounded-full"
                                    />
                                )}
                                <span className="font-semibold text-lg">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        className="rounded p-2 bg-white text-black w-64 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Search..."
                    />
                    <button className="ml-4 bg-yellow-600 text-black rounded px-4 py-2 transition duration-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                        Admin
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
