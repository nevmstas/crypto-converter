import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedCoin } from "./../../redux/actions";
import { setSelectedCoinBot } from "./../../redux/actions";

import { TCoin } from "../../types/types";

interface IConverterBlock {
  classes: any;
}

export const ConverterBlock: React.FC<IConverterBlock> = ({ classes }) => {
  const dispatch = useDispatch();
  const allCoins = useSelector((state: any) => state.coins.coins);

  const selectedCoin = useSelector(
    (state: any) => state.converter.selectedCoin
  );
  const selectedCoinBot = useSelector(
    (state: any) => state.converter.selectedCoinBot
  );

  function findPriceByName(name: string): number {
    const price = allCoins.find((x: any) => x.name === name)?.price;
    return price;
  }

  const [firstValue, setFirstValue] = useState<number>(1);
  const [secondValue, setSecondValue] = useState<number>(1);

  function calculate(count: number) {
    const result = (count * selectedCoin.price) / selectedCoinBot.price;
    setSecondValue(parseFloat(result.toFixed(4)));
  }

  function botInputCalculate(count: number) {
    const result = (count * selectedCoinBot.price) / selectedCoin.price;
    setFirstValue(parseFloat(result.toFixed(4)));
  }

  useEffect(() => {
    const obj = {
      name: allCoins.length ? Object.values(allCoins[0])[1] : null,
      price: allCoins.length ? Object.values(allCoins[0])[4] : null,
    };
    dispatch(setSelectedCoin(obj));
    dispatch(setSelectedCoinBot(obj));
  }, [allCoins.length]);

  useEffect(() => {
    calculate(firstValue);
  }, [selectedCoin, selectedCoinBot]);

  return (
    <Paper className={classes.paper}>
      <div className={classes.inputCurrencyBox}>
        <TextField
          className={classes.currencyInput}
          id="standard-basic"
          type="number"
          label="Summ"
          value={firstValue}
          onChange={(e: any) => {
            setFirstValue(e.target.value);
            calculate(e.target.value);
          }}
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            className={classes.selectEmpty}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCoin.name}
            onChange={(e: any) => {
              dispatch(
                setSelectedCoin({
                  name: e.target.value,
                  price: findPriceByName(e.target.value),
                })
              );
            }}
          >
            {allCoins.map((coin: TCoin) => (
              <MenuItem key={coin.id} value={coin.name}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={classes.inputCurrencyBox}>
        <TextField
          className={classes.currencyInput}
          id="standard-basic"
          type="number"
          label="Summ"
          value={secondValue || 0}
          onChange={(e: any) => {
            setSecondValue(e.target.value);
            botInputCalculate(e.target.value);
          }}
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            className={classes.selectEmpty}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCoinBot.name}
            onChange={(e: any) => {
              dispatch(
                setSelectedCoinBot({
                  name: e.target.value,
                  price: findPriceByName(e.target.value),
                })
              );
            }}
          >
            {allCoins.map((coin: TCoin) => (
              <MenuItem key={coin.id} value={coin.name}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
};
