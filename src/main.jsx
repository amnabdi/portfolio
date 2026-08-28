import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// Self-hosted fonts. Each sheet carries unicode-range per subset, so the
// browser only fetches the ranges the page actually uses.
import "@fontsource-variable/inter/wght.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource-variable/jetbrains-mono/wght.css";

import { router } from "./routes/Router";
import "../index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
