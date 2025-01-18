import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import DescriptionPage from "./pages/DescriptionPage.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";


function App() {

  return (
      <div>
          <Routes>
              <Route path={"/home"} element={<Home/>}/>
              <Route path={"/description/:id"} element={<DescriptionPage/>}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/signUp"} element={<Register/>}/>
              <Route path={"/*"} element={<ErrorPage/>}/>
          </Routes>
          {/*<Octo/>*/}
      </div>

  )
}

export default App
