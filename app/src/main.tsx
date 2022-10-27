import { MsalProvider } from "@azure/msal-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import msalInstance from "./aadConfig";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
