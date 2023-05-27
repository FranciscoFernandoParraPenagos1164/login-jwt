import "./App.css";
import {Route} from "wouter";
import {SesionContextProvider} from "./context/sesion-context";
import LogIn from "./pages/login/login";
import Home from "./pages/home/home";

function App() {
  return (
    <div>
      <SesionContextProvider>
        <Route path="/" component={LogIn} />
        <Route path="/home" component={Home} />
      </SesionContextProvider>
    </div>
  );
}

export default App;
