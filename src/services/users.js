import axios from "axios";
import axiosRetry from "axios-retry";
import {API_URL} from "../config";
import {refreshToken} from "./auth";
import {setAuthorization} from "./setAutorizathion";

const usersInstance = axios.create({baseURL: `${API_URL}/v1/users`});

usersInstance.interceptors.request.use(setAuthorization);

axiosRetry(usersInstance, {
  retries: 1,
  retryCondition: (condition) => {
    const {status} = condition.response;

    if (status === 401) {
      return refreshToken().then((status) => console.log(status));
    }
  },
});

export function getUsers() {
  return usersInstance
    .get("/")
    .then(({data}) => data.data)
    .catch(({response}) => response.data.statusCode);
}

export function getUser(userId) {
  return usersInstance
    .get(`/${userId}`)
    .then(({data}) => data.data)
    .catch(({response}) => response.data.statusCode);
}

export function createUser(newUser) {
  return usersInstance
    .post("/", newUser)
    .then((response) => response.data)
    .catch(({response}) => response.data.statusCode);
}
