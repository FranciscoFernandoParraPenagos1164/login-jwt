import {useRef, useContext} from "react";
import {SessionContext} from "../../context/sesion-context";
import CreateUserView from "./view";
import {createUser} from "../../services/users";
import {navigate} from "wouter/use-location";
import {Redirect} from "wouter";

function CreateUser() {
  const {session} = useContext(SessionContext);

  const userRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const profileRef = useRef();

  function handleSubmitForm(e) {
    e.preventDefault();
    const newUser = {
      username: userRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      profile: Number.parseInt(profileRef.current.value),
    };

    createUser(newUser, session.accessToken).then(({code}) => {
      if (code === "OK") {
        navigate("/home");
      }
    });
  }

  return !session.logEd ? <Redirect to="/" /> : <CreateUserView userReference={userRef} emailReference={emailRef} nameReference={nameRef} passwordReference={passwordRef} profileReference={profileRef} onSubmitForm={handleSubmitForm}></CreateUserView>;
}

export default CreateUser;
