import {TCoin} from './../types/types'
import {TSelectedCoin} from './../types/types'



export const FETCH_COINS = 'FETCH_COINS'
export const SET_SELECTED_COIN = 'SET_SELECTED_COIN'



type TFetchCoins = {
    type: typeof FETCH_COINS
    payload: Array<TCoin>
}

export const fetchCoins = (coins: Array<TCoin>): TFetchCoins =>{
    return{
        type: FETCH_COINS,
        payload: coins
    }
}

type TsetSelectedCoin = {
    type: typeof SET_SELECTED_COIN
    payload: TSelectedCoin
}

export const setSelectedCoin = (selectedCoin: TSelectedCoin): TsetSelectedCoin =>{
    return{
        type: SET_SELECTED_COIN,
        payload: selectedCoin
    }
}


