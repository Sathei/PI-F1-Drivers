import React from "react";
import { Link } from 'react-router-dom';
import styles from './Landingpage.module.css';

function Landingpage() {
    return(
        <div>
            <Link to="/home">
                <button>
                    <span>Get in</span>
                </button>
            </Link>
        </div>
    )
}

export default Landingpage