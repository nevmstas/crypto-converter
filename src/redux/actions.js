export const FETCH_COINS = "FETCH_COINS"

export const fetchCoins = (coins) =>{
    return{
        type: FETCH_COINS,
        payload: coins
    }
}
