import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './Components/App/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Router> {/* Wrap your App component with Router */}
        <App />
    </Router>,
    document.getElementById('root')
);
