import {TCoin} from './../types/types'
export const FETCH_COINS = "FETCH_COINS"

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
