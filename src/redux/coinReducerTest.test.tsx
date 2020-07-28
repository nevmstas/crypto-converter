import { coinsReducer as reducer } from "./coinsReducer";
import * as actions from "./actions";

const initialStateTest = {
  coins: [],
};

describe("coin reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ coins: [] });
  });

  it("should handle FETCH_COINS", () => {
    expect(
      reducer(initialStateTest, {
        type: actions.FETCH_COINS,
        payload: [
          {
            id: "2",
            name: "TC2",
            fullName: "TestCoin2",
            imageUrl: "/images2",
            price: 2000,
            volume24hour: 60000,
          },
        ],
      })
    ).toEqual({
      coins: [
        {
          id: "2",
          name: "TC2",
          fullName: "TestCoin2",
          imageUrl: "/images2",
          price: 2000,
          volume24hour: 60000,
        },
      ],
    });
  });
});
