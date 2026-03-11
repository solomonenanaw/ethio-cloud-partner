import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Runtime environment diagnostics
if (typeof window !== "undefined") {
  console.log("Application initialized at:", new Date().toISOString());
  console.log("Current Hostname:", window.location.hostname);
  console.log("Current Protocol:", window.location.protocol);
}