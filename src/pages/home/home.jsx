import {useContext, useEffect, useState} from "react";
import HomeView from "./view";
import {SessionContext} from "../../context/sesion-context";
import {Redirect} from "wouter";
import {getUsers} from "../../services/users";

function Home() {
  const {session, refresh} = useContext(SessionContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(session.accessToken).then((response) => {
      if (response.statusCode === 401) {
        refresh();
        return;
      }
      setUsers(response.data);
    });
  }, [session]);

  return !session.logEd ? <Redirect to="/" /> : <HomeView>{users}</HomeView>;
}

export default Home;
