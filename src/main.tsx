import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeProvider from "./providers/ThemeProvider";

import "./index.scss";

import App from "./components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
