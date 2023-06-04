import {useContext, useEffect, useState} from "react";
import HomeView from "./view";
import {SessionContext} from "../../context/sesion-context";
import {Redirect} from "wouter";
import {getUsers} from "../../services/users";

function Home() {
  const {session} = useContext(SessionContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, [session]);

  return !session.logEd ? <Redirect to="/" /> : <HomeView>{users}</HomeView>;
}

export default Home;
