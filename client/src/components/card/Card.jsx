import { Link, defer } from "react-router-dom";
import styles from './Card.module.css';

function Card({driver}) {

    const { name, image, teams} = driver;
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt="" width="200px" height="200px"/>
        </div>
    )
}

export default Card