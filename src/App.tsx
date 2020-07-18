import React, { useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  currencyInput:{
    width:'75%'
  },
  inputCurrencyBox:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:'10px'
  },
  table: {
    minWidth: 650,
  },
  iconStyle:{
    width: 30
  }
}));

function App() {
  const classes = useStyles();

  interface TCoin {
    id: number
    name: string
    fullName: string
    imageUrl: any
    price: number
    volume24hour: number
  }
  const [allCoins, setallCoins] = useState<Array<TCoin>>([])

  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) =>{
      const coins : Array<TCoin> = data.Data.map((coin: any) => {
        const obj = {
          id: coin.CoinInfo.Id,
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE,
          volume24hour: coin.RAW.USD.VOLUME24HOUR 
        }
        return obj
      })

      setallCoins(coins)
    })
  }, [classes])

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className= {classes.inputCurrencyBox}>
              <TextField className={classes.currencyInput}id="standard-basic" label="Summ" />
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                
              </FormControl>
            </div>
            <div className= {classes.inputCurrencyBox}>
            <TextField className={classes.currencyInput}id="standard-basic" label="Summ" />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </div>
            <Typography variant="h5" component="h1">
                0,014 Доллар США
            </Typography>
          </Paper>
       
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Volume 24 hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCoins.map(coin => (
                  
                  <TableRow key={coin.id}>
                    <TableCell component="th" scope="row"><img className={classes.iconStyle} src={coin.imageUrl}></img></TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">{coin.price}</TableCell>
                    <TableCell align="left">{coin.volume24hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
