import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route expact path="/" component={Home} />
    </div>
  );
}

export default App;
