import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
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
      width: 30,
      borderRadius: '50%'
    }
  }));