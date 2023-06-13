export function setAuthorization(request) {
  const userAccesToken = localStorage.getItem("user-access-token");
  request.headers.setAuthorization(`Bearer ${userAccesToken}`);
  return request;
}
