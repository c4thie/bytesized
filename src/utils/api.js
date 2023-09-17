function fetchMatch(drinkCode) {
  const apiUrl = "http://localhost:3000";
  console.log("fetchmatch in api called");

  const fetchMatchApiUrl = `${apiUrl}/drink/${drinkCode}`;

  fetch(fetchMatchApiUrl)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Network response was not 200");
      }
      return response.json();
    })
    .then((response) => {
      console.log("response =>>>>>" + JSON.stringify(response));
      return response;
      // const data = JSON.stringify(response);
      // return data;
      // console.log(response);
      // return response.json();
    })
    .catch((error) => {
      console.error("API Error:", error);
    });
}

export default fetchMatch;
