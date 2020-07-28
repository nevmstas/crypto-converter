import React from "react";
import * as actions from "./actions";
import { TCoin } from "./../types/types";

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
});
