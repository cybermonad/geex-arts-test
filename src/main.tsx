import * as React from "react"
import ReactDOM from "react-dom/client"
import "./styles/globals.scss"
import "./styles/reset.scss"
import "./styles/fonts.scss"
import "./styles/constants.scss"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

