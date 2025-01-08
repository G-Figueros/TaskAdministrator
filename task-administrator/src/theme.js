import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      light: "rgb(235, 235, 214)", // Fondo claro
      dark: "rgb(26, 32, 44)", // Fondo oscuro
    },
    text: {
      light: "rgb(26, 32, 44)", // Texto oscuro en modo claro
      dark: "rgb(247, 250, 252)", // Texto claro en modo oscuro
    },
    button: {
      light: "rgb(94, 28, 93)", // Botón púrpura en modo claro
      dark: "rgb(172, 79, 127)", // Botón rosa en modo oscuro
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "primary.light" : "primary.dark",
        color: props.colorMode === "light" ? "text.light" : "text.dark",
      },
    }),
  },
});

export default theme;
