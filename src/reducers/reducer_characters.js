import { FETCH_CHARACTERS } from '../actions/types';

const INITIAL_STATE = {characters: null, character: null};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return {...state, characters: action.payload.data.results};
        default:
            return INITIAL_STATE;
    }
}
