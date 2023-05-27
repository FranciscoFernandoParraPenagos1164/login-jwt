import axios from "axios";
import API_URL from "./baseApiUrl";

const authInstance = axios.create({baseURL: `${API_URL}/auth`, timeout: 1000, headers: {"X-Custom-Header": "foobar"}});

export function signIn(username, password) {
  const userLogin = {username, password};
  return authInstance
    .post("/signin", userLogin)
    .then((response) => response.data)
    .catch(({response}) => response.data);
}

export function getRefreshToken(refreshToken) {
  return authInstance
    .get("/refresh", {headers: {Authorization: `Bearer ${refreshToken}`}})
    .then((response) => response.data)
    .catch(({response}) => response.data);
}
