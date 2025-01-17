import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import DescriptionPage from "./pages/DescriptionPage.tsx";


function App() {

  return (
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/description/:id"} element={<DescriptionPage/>}/>
      </Routes>
  )
}

export default App
