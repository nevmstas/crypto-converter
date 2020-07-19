import React from 'react'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import {useSelector} from 'react-redux'


import {TCoin} from '../../types/types'

interface IConverterBlock{
    classes: any
}

export const ConverterBlock: React.FC<IConverterBlock> = ({ classes }) =>{

    const allCoins = useSelector((state: any) => state.coins.coins)

    return (
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

                  {allCoins.map((coin: TCoin) => <MenuItem value={coin.name}>{coin.name}</MenuItem>)}
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
                  {allCoins.map((coin: TCoin) => <MenuItem value={coin.name}>{coin.name}</MenuItem>)}
                </Select>
              </FormControl>

            </div>
            <Typography variant="h6" component="h1">
                0,014 USD
            </Typography>
          </Paper>
    )
}


