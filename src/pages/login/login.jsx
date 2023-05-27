import {useRef, useContext, useState, useEffect} from "react";
import LoginView from "./view";
import {SessionContext} from "../../context/sesion-context";
import {navigate} from "wouter/use-location";

function LogIn() {
  const {session, logIn} = useContext(SessionContext);

  useEffect(() => {
    if (session.logEd) {
      navigate("/home");
    }
  }, [session]);

  const userNameRef = useRef();
  const passwordRef = useRef();

  const [faildeLogIn, setFaildeLogIn] = useState(false);

  function handleSubmitForm(e) {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    logIn(userName, password).then((code) => {
      if (code !== "OK") {
        setFaildeLogIn(true);
      }
    });
  }

  return <LoginView userNameRef={userNameRef} passwordRef={passwordRef} onSubmitForm={handleSubmitForm} failedLogin={faildeLogIn} />;
}

export default LogIn;
