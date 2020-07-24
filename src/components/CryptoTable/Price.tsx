import React from "react";
import TableCell from "@material-ui/core/TableCell";
import usePrevious from "./../hooks/usePrevious";
type TPriceComponent = {
  price: number;
  classes: any;
};
const Price: React.SFC<TPriceComponent> = ({ price, classes }) => {
  const prevPrice = usePrevious(price);

  function defineColor(oldPrice: number | undefined, newPrice: number) {
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
};

export default Price;
