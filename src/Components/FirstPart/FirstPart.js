import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const FirstPart = () => {
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://rashiin.github.io/api/db.json');
                setCarouselData(response.data);
            } catch (error) {
                console.error('Error fetching carousel data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="carousel-container">
            <Carousel>
                {carouselData.map((item) => (
                    <Carousel.Item key={item.id} className="carousel-item">
                        <img className="d-block w-100 carousel-image" src={item.imgbg} alt={item.name} />
                        <Carousel.Caption className="carousel-caption">
                            <h3 className="carousel-title">{item.name}</h3>
                            <p className="carousel-details">{item.details}</p>
                            <p className="carousel-time">{item.time}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default FirstPart;
