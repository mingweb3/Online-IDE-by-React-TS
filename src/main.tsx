import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@material-tailwind/react"; // https://www.material-tailwind.com/docs/react/guide/vite

import "react-folder-tree/dist/style.css";
import "./index.css";
import { AppProvider } from "./contexts/AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <HelmetProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </HelmetProvider>
  </ThemeProvider>
);
