import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import "./App.css";

import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinsAsync } from "./redux/coinsReducer";
import { CryptoTable } from "./components/CryptoTable/CryptoTable";
import { ConverterBlock } from "./components/ConverterBlock/ConverterBlock";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "./icons/GitHub-Mark.png";
import CoinGraph from "./components/Graph/CoinGraph";

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
          <Paper elevation={0} className={classes.paper}>
            <a href="https://github.com/nevmstas">
              <img alt="github" className={classes.ghIcon} src={GitHubIcon} />
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ConverterBlock classes={classes} />
        </Grid>
        <Grid item xs={12}>
          <CryptoTable classes={classes} items={allCoins} />
        </Grid>

        <Grid item xs={12}>
          <CoinGraph items={allCoins} classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
