import React from "react";
import TableCell from "@material-ui/core/TableCell";
import usePrevious from "./../hooks/usePrevious";

function Price({ price, classes }) {
  const prevPrice = usePrevious(price);

  function defineColor(oldPrice, newPrice) {
    return oldPrice === newPrice || oldPrice === undefined
      ? null
      : oldPrice > newPrice
      ? classes.redPrice
      : classes.greenPrice;
  }

  return (
    <TableCell align="left" className={defineColor(prevPrice, price)}>
      ${price}
    </TableCell>
  );
}

export default Price;
