import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from "./components/Header.tsx";
import {BrowserRouter} from "react-router";
import Comets from "./components/Comets.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Header/>
          <App />
          <Comets/>
      </BrowserRouter>

  </StrictMode>,
)
