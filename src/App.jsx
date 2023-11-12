import { BrowserRouter, Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import ForSell from "./pages/ForSell"
import ForRent from "./pages/ForRent"
import Agencies from "./pages/Agencies"
import UnitConvertor from "./pages/UnitConvertor"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home/>}/>
        <Route path="/for-buy" element={<ForSell/>}/>
        <Route path="/for-rent" element={<ForRent/>}/>
        <Route path="/agencies" element={<Agencies/>}/>
        <Route path="/unit-convertor" element={<UnitConvertor/>}/>
        <Route path="/about" element={<About/>}/>
      </Router>
    </BrowserRouter>
  )
}
