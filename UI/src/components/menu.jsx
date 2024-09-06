import './css/style.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './navbar';

export default function Menu() {


    return (
        <>
            <Navbar />
            <div className='header'>

                    <div>
                        <h2>Best way to optimize</h2>
                        <h2>Your wealth</h2>
                        <p>Best solution for you and your family, Choose the best choice</p>
                    </div>
                    <div>
                        <Button><Link className='getStarted' to='/possession'>Get Started</Link></Button>
                        <a className="glightbox btn-watch-video d-flex align-items-center">
                            <div className='me-5'>
                                <i className="playButton bi bi-play-circle me-2"></i>
                                Watch Video
                            </div>
                        </a>
                        
                    </div>
                    <div className='img'>

</div>
            </div >
        </>
    );
}