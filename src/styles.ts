import { makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    backgroundColor: "#e6e6e6",
    color: "#666666",
  },
  root: {
    padding: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  chartContainer: {
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: 70,
  },
  currencyInput: {
    width: "85%",
  },
  inputCurrencyBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  table: {
    minWidth: 650,
  },
  iconStyle: {
    width: 30,
    borderRadius: "50%",
  },
  redPrice: {
    backgroundColor: "#ff9999",
  },
  greenPrice: {
    backgroundColor: "#c6ffb3",
  },
  coinRow: {
    cursor: "pointer",
  },

  description: {
    fontSize: "17px",
    color: "#666666",
  },
  heading: {
    textTransform: "uppercase",
    color: "#404040",
  },
  ghIcon: {
    width: "50px",
    cursor: "pointer",
  },
  ghContainer: {
    display: "flex",
    textDecoration: "none",
    justifyContent: "center",
  },
}));
