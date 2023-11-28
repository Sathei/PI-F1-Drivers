import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from 'axios';
import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import { get_all_drivers } from "../../redux/actions/actions";

function Home () {

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_drivers());
    }, [])
    const allDrivers = useSelector((state) => state.allDrivers);
    console.log(allDrivers);
    return(
        <div>
            <h1>Componente home</h1>
            <Navbar/>
            <Cards allDrivers= {allDrivers}/>
        </div>
    )
}

export default Home
