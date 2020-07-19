import {FETCH_COINS} from './actions'

const initialState = {
    coins: []
}

export const coinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COINS:
            return { ...state, coins: action.payload }
        default:
            return state
    }
}

