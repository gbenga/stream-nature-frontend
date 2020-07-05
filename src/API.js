const eventsURL = "http://localhost:3000/events";
const usersURL = "http://localhost:3000/users";
const locationsURL = "http://localhost:3000/locations";

// const nasaURL =
// "https://api.nasa.gov/planetary/apod?api_key=THzcMuvjDbxkCgkCVecMAx4h5vIirCQkOUoqlu5v";

// function fetchNasaData() {
//   return fetch(nasaURL)
//     .then((response) => response.json())
//     .catch((error) => alert("fetching NASA data didn't work"));
// }
// const sstk = require("shutterstock-api");

// const applicationConsumerId = "jgQYbRMGedakE8BXDcNZemkk9LTK8p45";
// const applicationConsumerSecret = "9nbDRXwp5B6Uk5UR";
// sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);

// const imagesApi = new sstk.ImagesApi();

// const queryParams = {
//   query: "kites",
//   image_type: "photo",
//   page: 1,
//   per_page: 5,
//   sort: "popular",
//   view: "minimal",
// };

// imagesApi
//   .searchImages(queryParams)
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

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

  fetch(usersURL, configObject)
    .then((resp) => resp.json())
    .then((object) => console.log(object))
    .catch((error) => alert("Creating a new user didn't work"));
}
export default {
  fetchEvents,
  fetchLocations,
  fetchUsers,
  postToUsers,
  fetchNasaData,
};
