import "./App.css";
import {Route} from "wouter";
import {SesionContextProvider} from "./context/sesion-context";
import LogIn from "./pages/login/login";
import Home from "./pages/home/home";
import CreateUser from "./pages/create-user/create-user";

function App() {
  return (
    <div>
      <SesionContextProvider>
        <Route path="/" component={LogIn} />
        <Route path="/home" component={Home} />
        <Route path="/create-user" component={CreateUser} />
      </SesionContextProvider>
    </div>
  );
}

export default App;
