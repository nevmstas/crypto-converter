import { FETCH_COINS } from "./actions";
import { TCoin } from "./../types/types";
import { fetchCoins } from "./actions";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "./rootReducer";

type initialStateType = {
  coins: Array<TCoin>;
};

const initialState: initialStateType = {
  coins: [],
};

export const coinsReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case FETCH_COINS:
      return { ...state, coins: [...action.payload] };
    default:
      return state;
  }
};

export const fetchCoinsAsync = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<void>
> => async (dispatch: any) => {
  const data = await axios
    .get(
      "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
    )
    .then((response) => response.data);
  const coins: Array<TCoin> = data.Data.map((coin: any) => {
    const obj: TCoin = {
      id: coin.CoinInfo.Id,
      name: coin.CoinInfo.Name,
      fullName: coin.CoinInfo.FullName,
      imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
      price: coin.RAW.USD.PRICE.toFixed(3),
      volume24hour: coin.RAW.USD.VOLUME24HOUR.toFixed(3),
    };
    return obj;
  });
  dispatch(fetchCoins(coins));
};
