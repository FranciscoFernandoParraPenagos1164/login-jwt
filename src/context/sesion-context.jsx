import {useState, createContext} from "react";
import {signIn, getRefreshToken} from "../services/auth";

const SessionContext = createContext({});

const refreshToken = localStorage.getItem("user-refresh-token");
const accessToken = sessionStorage.getItem("user-access-token");

export function SesionContextProvider({children}) {
  const [session, setSesion] = useState({
    logEd: Boolean(refreshToken),
    refreshToken,
    accessToken,
  });

  function logIn(username, password) {
    return signIn(username, password).then(({code, data}) => {
      if (code === "OK") {
        localStorage.setItem("user-refresh-token", data.refreshToken);
        sessionStorage.setItem("user-access-token", data.accessToken);

        setSesion({
          logEd: true,
          refreshToken: data.refreshToken,
          accessToken: data.accessToken,
        });
      }
      return code;
    });
  }

  function refresh() {
    getRefreshToken(session.refreshToken).then(({data}) => {
      sessionStorage.setItem("user-access-token", data.accessToken);
      setSesion({...session, accessToken: data.accessToken});
    });
  }

  return <SessionContext.Provider value={{session, logIn, refresh}}>{children}</SessionContext.Provider>;
}

export {SessionContext};
