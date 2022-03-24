import "./App.css";
// import { bootstrap } from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Global from "./Components/Global";
import Country from "./Components/Country";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/global" element={<Global />} />
          <Route path="/search" element={<Search />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
