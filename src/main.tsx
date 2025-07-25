import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import App from "./assets/components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
