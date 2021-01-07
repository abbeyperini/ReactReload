import { shibaConstants } from './shibaActionTypes';

const initialState = {shibasLoading: false, shibasFetched: false, counter: 1};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case shibaConstants.SHIBES_REQUESTED:
            return {
                ...state,
                shibasLoading: true,
                shibasFetched: false
            }
        case shibaConstants.SHIBES_FETCHED:
            return {
                ...state,
                shibasLoading: false,
                shibasFetched: true,
                shibas: action.payload
            }
        case shibaConstants.SHIBE_FETCH_FAIL:
            return {
                ...state,
                shibasLoading: false,
                shibasFetched: false
            }
        case shibaConstants.ADD_ONE:
            return {
                ...state,
                counter: action.payload
            }
        case shibaConstants.SUB_ONE:
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state
    }
}

export default reducer;