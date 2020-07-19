import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import {useSelector} from 'react-redux'


import {TCoin} from '../../types/types'

interface IConverterBlock{
    classes: any
}

export const ConverterBlock: React.FC<IConverterBlock> = ({ classes }) =>{
    const [selectedOutCoin, setSelectedOutCoin] = useState('USD')
    const allCoins = useSelector((state: any) => state.coins.coins)
    const selectedCoin = useSelector((state: any) => state.converter.selectedCoin)
    
    return (
        <Paper className={classes.paper}>
            <div className= {classes.inputCurrencyBox}>

              <TextField className={classes.currencyInput} id="standard-basic" label="Summ"/>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                  className= {classes.selectEmpty}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCoin.name || 0}
                >

                  {allCoins.map((coin: TCoin) => <MenuItem key={coin.id} value={coin.name}>{coin.name}</MenuItem>)}
                </Select>
              </FormControl>
            </div>

            <div className= {classes.inputCurrencyBox}>

              <TextField className={classes.currencyInput}id="standard-basic" label="Summ" />

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                  className= {classes.selectEmpty}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedOutCoin}
                  onChange={(e : any)=>{setSelectedOutCoin(e.target.value)}}
                >
                <MenuItem  value='USD'>USD</MenuItem>
                  {allCoins.map((coin: TCoin) => <MenuItem key={coin.id} value={coin.name}>{coin.name}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
          </Paper>
    )
}


