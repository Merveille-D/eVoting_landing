import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    // body: "Open Sans, sans-serif",
    body: "Montserrat, sans-serif",
    // ajouter autant de font family que vous voulez
  },
  colors: {
    brandBlue: {
      50: "#e2eef5",
      100: "#b8d5e8",
      200: "#8dbbd9",
      300: "#66a1ca",
      400: "#4b8fc1",
      500: "#337eb7",
      600: "#2a72ac",
      700: "#20629b",
      800: "#185289",
      900: "#0a376a",
    },
    brandGreen: {
      50: "#e6f7ee",
      100: "#c3ead5",
      200: "#9cddba",
      300: "#71d09f",
      400: "#4dc58a",
      500: "#1dbb75",
      600: "#14ab6a",
      700: "#07985d",
      800: "#008751",
      900: "#00673b",
    },
    brandYellow: {
      50: "#FFFAE6",
      100: "#FEF1B9",
      200: "#FEE88B",
      300: "#FDDF5E",
      400: "#FCD631",
      500: "#FCCD03",
      600: "#C9A403",
      700: "#977B02",
      800: "#655201",
      900: "#322901",
    },
    brandRed: {
      50: "#FDE8E8",
      100: "#F9BEBE",
      200: "#F59494",
      300: "#F16A6A",
      400: "#ED4040",
      500: "#E91616",
      600: "#BA1212",
      700: "#8C0D0D",
      800: "#5D0909",
      900: "#2F0404",
    },
  },
});

export default theme;
