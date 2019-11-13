import {

    FETCH_SUCCESS,
    FETCH_FAILURE,
    START_FETCHING,
    POSTING_DATA,
    POSTING_DATA_SUCCESS,
    POSTING_DATA_FAILURE,
    DELETING_DATA,
    DELETING_DATA_SUCCESS,
    DELETING_DATA_FAILURE

} from '../action'


const initialState  = {
    friend: [],
    isgetting: false,
    error: ''
}

const reducer = (state = initialState , action) => {

    switch(action.type){

        case START_FETCHING:
            return{ ...state, isgetting: true }
    
        case FETCH_SUCCESS:
                return{ ...state, friend: action.payload, isgetting: false }

        case FETCH_FAILURE:
            return{ ...state, isgetting: false, error: action.payload }
        
        case POSTING_DATA:
                return{ ...state, isgetting: true }

        case POSTING_DATA_SUCCESS:
            return{ ...state, isgetting: false, friend: action.payload }

        case POSTING_DATA_FAILURE:
            return { ...state, error: action.payload, isgetting: false }

        case DELETING_DATA:
            return{ ...state, isgetting: true }

        case DELETING_DATA_SUCCESS:
            return { ...state, smurfs: action.payload, isgetting: false }

        case DELETING_DATA_FAILURE:
            return { ...state, error: action.payload, isgetting: false }


        default:
            return state
    }
}

export default reducer