import { shibaConstants } from './shibaActionTypes';

const initialState = {shibasLoading: false, shibasFetched: false};

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
        default:
            return state
    }
}

export default reducer;