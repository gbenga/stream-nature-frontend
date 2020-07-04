const eventsURL = "http://localhost:3001/events";

function fetchEvents() {
  return fetch(eventsURL)
    .then((response) => response.json())
    .catch((error) => alert("fetching events from API didn't work"));
}

export default { fetchEvents };
