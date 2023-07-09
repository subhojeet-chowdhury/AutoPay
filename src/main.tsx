import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>
);
