import axios from "axios";
import API_URL from "./baseApiUrl";

const authInstance = axios.create({baseURL: `${API_URL}/v1/auth`});

export function signIn(username, password) {
  const userLogin = {username, password};
  return authInstance
    .post("/signin", userLogin)
    .then(({data}) => {
      const {code} = data;
      const {photo, name, refreshToken, accessToken, id} = data.data;

      localStorage.setItem("user-refresh-token", refreshToken);
      localStorage.setItem("user-access-token", accessToken);
      localStorage.setItem("user-id", id);

      return {photo, name, id, code};
    })
    .catch(({response}) => response.data);
}

export function refreshToken() {
  const refreshToken = localStorage.getItem("user-refresh-token");

  return authInstance
    .get("/refresh", {headers: {Authorization: `Bearer ${refreshToken}`}})
    .then(({data}) => localStorage.setItem("user-access-token", data.data.accessToken))
    .catch(({response}) => response.data);
}
