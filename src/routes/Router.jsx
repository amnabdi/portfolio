import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";

const repoName = import.meta.env.VITE_REPO_NAME || "";

// Main and Home together are the entire app, so there is nothing for a lazy
// boundary to defer — it only put a spinner in front of the first paint.
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [{ index: true, element: <Home /> }],
    },
  ],
  { basename: `/${repoName}` }
);
