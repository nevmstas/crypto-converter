import {SET_SELECTED_COIN} from './actions'
import {TSelectedCoin} from './../types/types'

type initialStateType = {
    selectedCoin: TSelectedCoin
}

const initialState: initialStateType = {
    selectedCoin: {
        name: '',
        price: 0
    }  
}

export const converterReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_SELECTED_COIN:
            return { ...state, selectedCoin: {...action.payload, name: action.payload.name, price: action.payload.price}}
        default:
            return state
    }
}