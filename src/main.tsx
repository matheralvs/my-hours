import React from "react"
import ReactDOM from "react-dom/client"

import { ThemeProvider } from "@/providers/theme-provider"

import { App } from "./App"
import { RegisterHoursProvider } from "./contexts"

import "./styles/globals.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RegisterHoursProvider>
        <App />
      </RegisterHoursProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
