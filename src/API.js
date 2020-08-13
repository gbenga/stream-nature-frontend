const baseURL = "https://stream-nature.herokuapp.com/api/v1";
const eventsURL = `${baseURL}/events`;
const usersURL = `${baseURL}/users`;
const locationsURL = `${baseURL}/locations`;
const validateURL = `${baseURL}/validate`;

function fetchEvents() {
  return fetch(eventsURL)
    .then((response) => response.json())
    .catch((error) => alert("fetching events from API didn't work"));
}
function fetchUsers() {
  return fetch(usersURL)
    .then((resp) => resp.json())
    .catch((error) => alert("fetching users from API didn't work"));
}
function fetchLocations() {
  return fetch(locationsURL)
    .then((resp) => resp.json())
    .catch((error) => alert("fetching locations from API didn't work"));
}
function postToUsers(userObj) {
  const configObject = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(userObj),
  };

  return fetch(usersURL, configObject)
    .then((resp) => resp.json())
    .catch((error) => alert("Creating a new user didn't work"));
}
function fetchUser(userId) {
  return fetch(`${usersURL}/${userId}`)
    .then((response) => response.json())
    .catch((error) => alert(`fetching data for user ${userId} didn't work"`));
}
function fetchLocation(locationId) {
  return fetch(`${locationsURL}/${locationId}`)
    .then((response) => response.json())
    .catch((error) =>
      alert(`fetching data for location ${locationId} didn't work"`)
    );
}
function patchToUser(userId) {
  const configObject = { method: "PATCH" };

  return fetch(`${usersURL}/${userId}/follow`, configObject)
    .then((resp) => resp.json())
    .catch((err) => alert("updating this user didn't work"));
}
function patchToEvent(eventId) {
  const configObject = { method: "PATCH" };

  return fetch(`${eventsURL}/${eventId}/like`, configObject)
    .then((resp) => resp.json())
    .catch((err) => alert("updating this event didn't work"));
}
function fetchEvent(eventId) {
  return fetch(`${eventsURL}/${eventId}`)
    .then((response) => response.json())
    .catch((error) => alert(`fetching data for event ${eventId} didn't work"`));
}

// Auth
function getUserIdFromJwtToken(url, token) {
  const configObject = { headers: { Authorization: token } };
  return fetch(url, configObject);
}

function validate() {
  const configObject = { headers: { Authorization: localStorage.token } };
  return fetch(validateURL, configObject)
    .then((response) => response.json())
    .catch((error) => alert("Validating JWT token failed"));

  // return getUserIdFromJwtToken(validateURL, token).then((response) =>
  //   response.json()
  // );
}

export default {
  fetchEvents,
  fetchLocations,
  fetchUsers,
  postToUsers,
  fetchUser,
  fetchLocation,
  patchToUser,
  fetchEvent,
  patchToEvent,
  getUserIdFromJwtToken,
  validate,
};
