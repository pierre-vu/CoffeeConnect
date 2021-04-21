const apiKey = 'oFbPtqK9V0ZXYX3KPL6d-cOWgTbbqoZbHVMF0gDvVoiiIY9sWkawhPp8yf6yV3XQsq8pvCRq3ZdYHMW7Y6IC44GqHs6kLqmfZE9CsaKlz9VnkWx51pYPwY4l0e95YHYx';

const app = document.getElementById('Coffee-Shop-Cards');

const container = document.createElement('div');
container.setAttribute('class', 'container');
console.log("1");
navigator.geolocation.getCurrentPosition(getPosition);
function getPosition(position){
    lat = position.coords.latitude;
    console.log(lat);
    long = position.coords.longitude;
    console.log(long);
}
var request = new XMLHttpRequest();
console.log("2");
request.open('GET', 'https://api.yelp.com/v3/businesses/search?location=77840&term=coffee', true);
// request.open('GET', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&key='+ apiKey, true);
console.log("3");
request.setRequestHeader("Authorization", apiKey);
console.log("4");
request.onload = function () {
    console.log("5");
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(businesses => {
        const post = document.createElement('div');
        post.setAttribute('class', 'post');

        const h2 = document.createElement('h2');
        h2.textContent = "name: " + businesses.name;
        const span = document.createElement('span');
        span.textContent = "distance: " + businesses.distance;

        container.appendChild(post);
        post.appendChild(h2);
        post.appendChild(span);
      });
    }   else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
  }
  request.send();