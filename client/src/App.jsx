
import { BrowserRouter , Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisaDetailsPage from "./pages/VisaDetailsPage";
import ApplyFormpage from "./pages/ApplyFormpage";
import Login from "./components/user/auth/Login";
import Signup from "./components/user/auth/Signup";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path ="/login" element={<Login/>}></Route>
    <Route path ="/signup" element={<Signup/>}></Route>
    <Route path ="/visareq/:fromCountry/:toCountry" element={<VisaDetailsPage/>}></Route>
    <Route path ="/applyform/:fromCountry" element={<ApplyFormpage/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App


