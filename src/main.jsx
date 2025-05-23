import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuProvider } from "./MenuProvider.jsx";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>
);
