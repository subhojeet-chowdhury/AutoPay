import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import ErrorPage from "./Components/ErrorPage";
import LoginChoice from "./Routes/LoginChoice";
import SignupChoice from "./Routes/SignupChoice";
import LoginRider from "./Routes/LoginRider";
import SignupRider from "./Routes/SignupRider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login-choice",
    element: <LoginChoice />,
  },
  {
    path: "/signup-choice",
    element: <SignupChoice />,
  },
  {
    path: "/login-rider",
    element: <LoginRider />,
  },
  {
    path: "/signup-rider",
    element: <SignupRider />,
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
