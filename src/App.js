import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Logement from "./components/Logement/Logement";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"  element = {<Home />} />
        <Route path="/about"  element = {<About />} />
        <Route path="/logement/*" element={<Logement />} />
        <Route path="*"  element = {<Error />} />
      </Routes>
    </div>
  );
}

export default App;
