import axios from 'axios';
import {
    GET_ALL_DRIVERS
} from './action-types';

export const get_all_drivers = () => {
    return async function(dispatch){
        try {
            const apiData = await axios.get('http://localhost:3001/drivers');
            const drivers = apiData.data;
            console.log(drivers); // Agrega este log
            dispatch({
                type: GET_ALL_DRIVERS,
                payload: drivers
            });
        } catch (error) {
            console.error("Error fetching drivers:", error);
        }
    }
}