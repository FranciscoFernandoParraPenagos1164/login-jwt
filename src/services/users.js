import axios from "axios";
import API_URL from "./baseApiUrl";

const authInstance = axios.create({baseURL: `${API_URL}/users`, timeout: 1000, headers: {"X-Custom-Header": "foobar"}});

export function getUsers(accesToken) {
  return authInstance
    .get("/", {headers: {Authorization: `Bearer ${accesToken}`}})
    .then((response) => response.data)
    .catch(({response}) => response.data);
}
