import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ForSell from "./pages/ForSell"
import ForRent from "./pages/ForRent"
import Agencies from "./pages/Agencies"
import UnitConvertor from "./pages/UnitConvertor"
import About from "./pages/About"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-m ml-6 mr-6">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/for-buy" element={<ForSell/>}/>
            <Route path="/for-rent" element={<ForRent/>}/>
            <Route path="/agencies" element={<Agencies/>}/>
            <Route path="/unit-convertor" element={<UnitConvertor/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}
