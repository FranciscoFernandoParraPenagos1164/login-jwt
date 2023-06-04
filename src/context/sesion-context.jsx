import {useState, createContext, useEffect} from "react";
import {signIn} from "../services/auth";
import {getUser} from "../services/users";

const SessionContext = createContext({});

const userRefreshToken = localStorage.getItem("user-refresh-token");
const userId = localStorage.getItem("user-id");

export function SesionContextProvider({children}) {
  const [session, setSesion] = useState({
    logEd: Boolean(userRefreshToken) && Boolean(userId),
    userId,
  });

  useEffect(() => {
    if (!session.logEd) {
      return;
    }

    getUser(session.userId).then(({name, photo}) => {
      setSesion({...session, name, photo});
    });
  }, []);

  function logIn(username, password) {
    return signIn(username, password).then(({name, photo, id, code}) => {
      if (code !== "OK") {
        return false;
      }

      setSesion({
        logEd: true,
        userId: id,
        name,
        photo,
      });

      return true;
    });
  }

  return <SessionContext.Provider value={{session, logIn}}>{children}</SessionContext.Provider>;
}

export {SessionContext};
