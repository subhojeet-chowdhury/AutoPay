import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import ErrorPage from "./Components/ErrorPage";
import LoginChoice from "./Routes/LoginChoice";
import LoginRider from "./Routes/LoginRider";
import SignupRider from "./Routes/SignupRider";
import RiderHome from "./Routes/RiderHome";
import RiderHomeMain from "./Components/RiderHomeMain";
import RiderProfile from "./Components/RiderProfile";
import LoginPartner from "./Routes/LoginPartner";
import PartnerHome from "./Routes/PartnerHome";

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
    path: "/rider",
    element: <LoginRider />,
  },
  {
    path: "/signup-rider",
    element: <SignupRider />,
  },
  {
    path: "/rider/:id/home",
    element: (
      <RiderHome>
        <RiderHomeMain />
      </RiderHome>
    ),
  },
  {
    path: "/rider/:id/profile",
    element: (
      <RiderHome>
        <RiderProfile />
      </RiderHome>
    ),
  },
  {
    path: "/partner",
    element: <LoginPartner />,
  },
  {
    path: "/partner/:id/home",
    element: <PartnerHome>Home</PartnerHome>,
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
