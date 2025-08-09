import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
    </BrowserRouter>
  </StrictMode>
);
