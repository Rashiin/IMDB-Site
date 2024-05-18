import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaImdb, FaEnvelope } from 'react-icons/fa';
import Modal from 'react-modal';


const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setModalIsOpen(true);
    }
    Modal.setAppElement('#root');

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#393939',
            color: 'white',
            width: '50%',
            border: '1px solid #282c34',
            borderRadius: '10px',
            padding: '20px'
        }
    };
    return (
        <footer className="footer  text-white px-6 py-8 space-y-8 mt-5 p-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">About</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-yellow-500">Company Info</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Jobs</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Advertising</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Help</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-yellow-500">IMDbPro</a></li>
                        <li><a href="#" className="hover:text-yellow-500">IMDb Developer</a></li>
                    </ul>
                </div>
                <div>
                <h3 className="text-lg font-semibold">Subscribe</h3>
                <form className="mt-2 space-y-2" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Your email" className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" />
                    <button type="submit" className="w-full px-3 py-2 bg-yellow-500 rounded hover:bg-yellow-600">Subscribe</button>
                </form>
            </div>
                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="mailto:info@imdb.com" className="hover:text-yellow-500"><FaEnvelope className="inline w-4 h-4 mr-1" />info@imdb.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                <div>
                    <h3 className="text-lg font-semibold">IMDb</h3>
                    <p className="mt-2 text-sm">© 1990-2024 by IMDb.com, Inc.</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://www.facebook.com/imdb" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
                        <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com/imdb" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/imdb" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.imdb.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500">
                        <FaImdb className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Subscription Modal"
            >
                <h2>Thank you for subscribing!</h2>
                <button onClick={() => setModalIsOpen(false)} style={{backgroundColor: '#f5c518', border: 'none', color: 'black', padding: '10px 20px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '5px'}}>Close</button>
            </Modal>
        </footer>
    );
}

export default Footer;
