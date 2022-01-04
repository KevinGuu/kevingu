import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#e91e63",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        },
      },
    },
  },
});

export default theme;
