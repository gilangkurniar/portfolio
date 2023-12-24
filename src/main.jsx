import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/css/style.css'
import 'boxicons'

let icon = document.getElementById("toggle-icon")
let logo = document.getElementById("logo")

window.onload = function () {
  icon.onclick = function () {
    const nav = document.querySelector(".navbar-toggler")

    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
      nav.classList.toggle("navbar-dark")
      icon.src = "/img/sun.png"

      logo.style.fill = "white"
    } else {
      nav.classList.remove("navbar-dark")
      nav.classList.toggle("navbar-light")
      icon.src = "/img/moon.png"

      logo.style.fill = "black"
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
