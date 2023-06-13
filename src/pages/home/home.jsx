import {useContext, useEffect, useState} from "react";
import HomeView from "./view";
import {SessionContext} from "../../context/sesion-context";
import {Redirect} from "wouter";
import {getUsers} from "../../services/users";

function Home() {
  const {session} = useContext(SessionContext);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((users) => {
        if (users === 401) {
          setError(true);
          return;
        }
        setUsers(users);
      })
      .finally(() => setIsLoading(false));
  }, [session]);

  return !session.logEd ? (
    <Redirect to="/" />
  ) : (
    <HomeView isLoading={isLoading} error={error}>
      {users}
    </HomeView>
  );
}

export default Home;
