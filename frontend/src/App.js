import Landing  from "./pages/landing";
import Login from "./pages/login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/signup" element={<Signup />}></Route> */}
        </Routes>
    </Router>
  </div>
  );
}

export default App;
