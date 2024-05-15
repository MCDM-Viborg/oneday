import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { About } from "./pages/About";
import { Credits } from "./pages/Credits";
import { History } from "./pages/History";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/single/:id' element={<Single></Single>}></Route>
        {/* <Route path='/om' element={<About></About>}></Route> */}
        <Route path='/credits' element={<Credits></Credits>}></Route>
        <Route path='/historie' element={<History></History>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
