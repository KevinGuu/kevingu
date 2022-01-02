import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#eeeeee",
    },
    heroButton: {
      main: "#fafafa",
    },
  },
  // overrides: {
  //   AppBar: {
  //     root: {
  //       minHeight: 10,
  //     },
  //   },
  // },
});

export default theme;
