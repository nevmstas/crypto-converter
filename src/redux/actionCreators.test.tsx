import * as actions from "./actions";

describe("actions", () => {
  it("should create an action to fetch coins", () => {
    const coins = [
      {
        id: "1",
        name: "TC",
        fullName: "TestCoin",
        imageUrl: "/images",
        price: 1000,
        volume24hour: 50000,
      },
      {
        id: "2",
        name: "TC2",
        fullName: "TestCoin2",
        imageUrl: "/images2",
        price: 2000,
        volume24hour: 60000,
      },
    ];

    const expectedAction = {
      type: actions.FETCH_COINS,
      payload: coins,
    };
    expect(actions.fetchCoins(coins)).toEqual(expectedAction);
  });

  it("should create an action to set selected coin", () => {
    const seletedCoin = { name: "TC", price: 1000 };

    const expectedAction = {
      type: actions.SET_SELECTED_COIN,
      payload: seletedCoin,
    };
    expect(actions.setSelectedCoin(seletedCoin)).toEqual(expectedAction);
  });

  it("should create an action to set second selected coin", () => {
    const seletedCoin = { name: "TC", price: 1000 };

    const expectedAction = {
      type: actions.SET_SELECTED_COIN_BOT,
      payload: seletedCoin,
    };
    expect(actions.setSelectedCoinBot(seletedCoin)).toEqual(expectedAction);
  });
});
