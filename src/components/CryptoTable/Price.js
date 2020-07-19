import React, {useRef, useEffect} from 'react'
import TableCell from '@material-ui/core/TableCell';

function usePrevious(value){
    const ref = useRef()
    useEffect(()=>{
        ref.current = value
    })
    return ref.current
}

function Price({price, classes}) { 
    const prevPrice = usePrevious(price)
    
    function defineColor(oldPrice, newPrice){
        return oldPrice === newPrice || oldPrice === undefined? null:  oldPrice > newPrice? classes.redPrice : classes.greenPrice
    }
    
    return (
        <TableCell align="left" className={defineColor(prevPrice, price)}>${price}</TableCell>
    )
}

export default Price
