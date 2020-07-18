import React, { useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import axios from 'axios'
import {useStyles} from './styles'
import Grid from '@material-ui/core/Grid';

import {TCoin} from './types/types'

import { CryptoTable } from './components/CryptoTable/CryptoTable'
import { ConverterBlock } from './components/ConverterBlock/ConverterBlock'

function App() {
  const classes = useStyles();
  const ClassesContext = React.createContext(classes)
  const [allCoins, setallCoins] = useState<Array<TCoin>>([])

  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) =>{
      const coins: Array<TCoin> = data.Data.map((coin: any) => {
        const obj: TCoin = {
          id: coin.CoinInfo.Id,
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(2),
          volume24hour: coin.RAW.USD.VOLUME24HOUR.toFixed(2)
        }
        return obj
      })
      setallCoins(coins)
    })
  }, [classes])

  return (
    <ClassesContext.Provider value={classes}>
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ConverterBlock classes = {classes}/>      
          </Grid>
          <Grid item xs={12}>
            <CryptoTable classes={classes} items={allCoins}/>
          </Grid>
        </Grid>
      </Container>
    </ClassesContext.Provider>
  );
}

export default App;
