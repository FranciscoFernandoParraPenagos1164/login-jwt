import {useContext, useEffect, useState} from "react";
import HomeView from "./view";
import {SessionContext} from "../../context/sesion-context";
import {navigate} from "wouter/use-location";
import {getUsers} from "../../services/users";

function Home() {
  const {session, refresh} = useContext(SessionContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!session.logEd) {
      navigate("/");
      return;
    }

    getUsers(session.accessToken).then((response) => {
      if (response.statusCode === 401) {
        refresh();
        console.log("refresh");
        return;
      }
      setUsers(response.data);
    });
  }, [session]);

  return <HomeView>{users}</HomeView>;
}

export default Home;
