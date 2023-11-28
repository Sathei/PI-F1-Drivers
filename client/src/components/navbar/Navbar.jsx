import { Link, useLocation } from 'react-router-dom';
import Searchbar from '../searchbar/Searchbar';
import styles from './Navbar.module.css';

function Navbar () {
    return(
        <div>
            <Searchbar/>
        </div>
    )
}

export default Navbar