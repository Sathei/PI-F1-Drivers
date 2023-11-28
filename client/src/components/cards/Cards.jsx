import { Link } from "react-router-dom";
import Card from "../card/Card";
import styles from './Cards.module.css';

function Cards({ allDrivers }) {
    const driverList = allDrivers;
    return (
        <div>
            {driverList?.map((driver) => (
                <Link key={driver.id}>
                    <Card driver={driver} />
                </Link>
            ))}
        </div>
    );
}

export default Cards;