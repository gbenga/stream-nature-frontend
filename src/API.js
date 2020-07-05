const eventsURL = "http://localhost:3000/events";
const usersURL = "http://localhost:3000/users";
const locationsURL = "http://localhost:3000/locations";

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

export default { fetchEvents, fetchLocations, fetchUsers };
