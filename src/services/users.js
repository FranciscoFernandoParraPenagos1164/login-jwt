import axios from "axios";
import axiosRetry from "axios-retry";
import API_URL from "./baseApiUrl";
import {refreshToken} from "./auth";

const usersInstance = axios.create({baseURL: `${API_URL}/v1/users`});

usersInstance.interceptors.request.use((request) => {
  const userAccesToken = localStorage.getItem("user-access-token");
  request.headers.setAuthorization(`Bearer ${userAccesToken}`);
  return request;
});

axiosRetry(usersInstance, {
  retries: 1,
  retryCondition: (condition) => {
    const {status} = condition.response;

    if (status === 401) {
      return refreshToken();
    }
  },
});

export function getUsers() {
  return usersInstance
    .get("/")
    .then(({data}) => data.data)
    .catch(({response}) => response.data);
}

export function getUser(userId) {
  return usersInstance
    .get(`/${userId}`)
    .then(({data}) => data.data)
    .catch(({response}) => response.data);
}

export function createUser(newUser) {
  return usersInstance
    .post("/", newUser)
    .then((response) => response.data)
    .catch(({response}) => response.data);
}
