import { converterReducer as reducer } from "./converterReducer";
import * as actions from "./actions";

const initialStateTest = {
  selectedCoin: {
    name: "",
    price: 0,
  },
  selectedCoinBot: {
    name: "",
    price: 0,
  },
};

describe("converter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialStateTest);
  });

  it("should handle SET_SELECTED_COIN", () => {
    expect(
      reducer(initialStateTest, {
        type: actions.SET_SELECTED_COIN,
        payload: { name: "TC", price: 1000 },
      })
    ).toEqual({
      selectedCoin: {
        name: "TC",
        price: 1000,
      },
      selectedCoinBot: {
        name: "",
        price: 0,
      },
    });
  });

  it("should handle SET_SELECTED_COIN_BOT", () => {
    expect(
      reducer(initialStateTest, {
        type: actions.SET_SELECTED_COIN_BOT,
        payload: { name: "TC", price: 1000 },
      })
    ).toEqual({
      selectedCoin: {
        name: "",
        price: 0,
      },
      selectedCoinBot: {
        name: "TC",
        price: 1000,
      },
    });
  });
});
