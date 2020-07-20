import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import "./App.css";

import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinsAsync } from "./redux/coinsReducer";
import { CryptoTable } from "./components/CryptoTable/CryptoTable";
import { ConverterBlock } from "./components/ConverterBlock/ConverterBlock";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allCoins = useSelector((state: any) => state.coins.coins);

  useEffect(() => {
    dispatch(fetchCoinsAsync());
    setInterval(() => {
      dispatch(fetchCoinsAsync());
    }, 30 * 1000);
  }, []);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ConverterBlock classes={classes} />
        </Grid>
        <Grid item xs={12}>
          <CryptoTable classes={classes} items={allCoins} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
