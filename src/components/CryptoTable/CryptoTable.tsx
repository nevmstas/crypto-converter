import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

import {TCoin} from '../../types/types'

interface ICryptoTable{
    items: Array<TCoin>
    classes: any
}

export const CryptoTable: React.FC<ICryptoTable> = ({ items, classes }) =>{
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">Fullname</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="right">Volume 24 hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { !items.length ? <CircularProgress color="secondary" /> : items.map((coin) => (
                  
                  <TableRow key={coin.id}>
                    <TableCell component="th" scope="row"><img className={classes.iconStyle} src={coin.imageUrl}></img></TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">${coin.price}</TableCell>
                    <TableCell align="left">${coin.volume24hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    )
}

export default CryptoTable
