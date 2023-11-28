import { GET_ALL_DRIVERS } from "../actions/action-types"

const initialState = {
    allDrivers: [],
    allDriversBackup: [],

}

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: [...action.payload],
                allDriversBackup: action.payload,
            }

        default: 
            return state;
    }
}

export default reducer