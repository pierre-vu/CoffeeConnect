const axios = require("axios")

let API_KEY = "szhgoYUtJ9ueJRjzpQdrreAMJD3s1qEN1LPcjx2kZEWWgqxhcQvgqghFNLgtg4X3dTbgb3PMet9CDshWCo9V_L8ZveySGXj1As42vBNxRCzQ8yonIxZ_N-crtIF4YHYx"

// REST
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})

yelpREST(ENDPOINT, { params: { key: value } }).then(({ data }) => {

})

yelpREST("/businesses/search", {
    params: {
      location: "college station, tx",
      term: "coffee",
      limit: 10,
    },
  }).then(({ data }) => {
    let { businesses } = data
    businesses.forEach((b) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h2 = document.createElement('h2');
        h2.textContent = b.name;
       console.log("Name: ", b.name)
    })
  })