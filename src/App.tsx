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
    <div className={classes.mainContainer}>
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <div>
                <div className={classes.description}>
                  <h2 className={classes.heading}>crypto-converter</h2>
                  <p>
                    This app will be helpfull for people who want to convert
                    some cryptocurrency to another easily. Also you can monitor
                    currently price, because of it updates every 60sec. If price
                    up, currency block'll be{" "}
                    <span className={classes.greenPrice}>green</span>, otherwise{" "}
                    <span className={classes.redPrice}>red</span>. You can click
                    on table row to automatically choose first field of
                    currency. Once you filled any field, programm'll
                    automatically calculate result!
                  </p>
                  <div>
                    <p>Also you can check my other projects on github</p>
                    <a href="https://github.com/nevmstas">
                      <img
                        alt="github"
                        className={classes.ghIcon}
                        src={GitHubIcon}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <ConverterBlock classes={classes} />
          </Grid>
          <Grid item xs={12}>
            <CryptoTable classes={classes} items={allCoins} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
