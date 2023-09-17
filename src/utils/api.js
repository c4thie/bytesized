// import axios from "axios";

// const fetchMatch = (drinkCode) => {
//   const apiUrl = "http://localhost:3000";
//   const fetchMatchApiUrl = `${apiUrl}/drink/${drinkCode}`;

//   // Return a promise that resolves with the response data
//   return axios
//     .get(fetchMatchApiUrl)
//     .then((response) => {
//       console.log("API Response:", response.data);
//       return response.data; // Resolve the promise with the response data
//     })
//     .catch((error) => {
//       console.error("API Error:", error);
//       throw error; // Reject the promise with the error
//     });
// };
// export default fetchMatch;

const fetchMatch = (drinkCode) => {
  const apiUrl = "http://localhost:3000"; // Replace with your backend API URL

  const fetchMatchApiUrl = `${apiUrl}/drink/${drinkCode}`;

  fetch(fetchMatchApiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Assuming the response is in JSON format
    })
    .then((data) => {
      // Handle the API response data
      console.log("API Response:", data);
    })
    .catch((error) => {
      // Handle errors
      console.error("API Error:", error);
    });
};

export default fetchMatch;
