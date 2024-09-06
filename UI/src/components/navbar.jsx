import './css/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Navbar() {
    return (
        <div className='navbar'>
            <h1>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }}>
                    Patrimoine
                </Link>
            </h1>
            <div>
                <Link className="link1" to="/possession" style={{
                    textDecoration: 'none',
                }}>
                    Possession
                </Link>
                <Link className="link2" to="/patrimoine" style={{
                    textDecoration: 'none',

                }}>
                    Patrimoine
                </Link>
            </div>
        </div>
    );
}