import {useRef, useContext, useState} from "react";
import LoginView from "./view";
import {SessionContext} from "../../context/sesion-context";
import {Redirect} from "wouter";

function LogIn() {
  const {session, logIn} = useContext(SessionContext);

  const userNameRef = useRef();
  const passwordRef = useRef();

  const [faildeLogIn, setFaildeLogIn] = useState(false);

  function handleSubmitForm(e) {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    logIn(userName, password).then((isLoged) => {
      if (!isLoged) {
        setFaildeLogIn(true);
      }
    });
  }

  return session.logEd ? <Redirect to="/home" /> : <LoginView userNameRef={userNameRef} passwordRef={passwordRef} onSubmitForm={handleSubmitForm} failedLogin={faildeLogIn} />;
}

export default LogIn;
