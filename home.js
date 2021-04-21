const apiKey = 'prj_live_pk_32283390146f458ed6a90d2499e7bff510911e0f';

const app = document.getElementById('Coffee-Shop-Cards');
var lat = 30.615514500000003;
var long = -96.3332523;
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
navigator.geolocation.getCurrentPosition(getPosition);
function getPosition(position){
  lat = position.coords.latitude;
  console.log(lat);
  long = position.coords.longitude;
  console.log(long);
}
var request = new XMLHttpRequest();
request.open('GET', 'https://api.radar.io/v1/search/places?categories=coffee-shop&near=' + lat + '%2C' + long, true);
request.setRequestHeader("Authorization", apiKey);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(request.response);
  // var data = JSON.stringify(this.response);
  // data = JSON.parse(data);

  if (request.status >= 200 && request.status < 400) {
    data.places.forEach(places => {
      const post = document.createElement('div');
      post.setAttribute('class', 'post');

      const h2 = document.createElement('h2');
      h2.textContent = places.name;
      const span = document.createElement('span');
      span.textContent = places.location.coordinates;

      // const p = document.createElement('p');
      // var text = document.createTextNode("Gender: " + person.gender);
      // p.appendChild(text);
      // movie.description = movie.description.substring(0, 300);
      // p.textContent = `${movie.description}...`;

      container.appendChild(post);
      post.appendChild(h2);
      post.appendChild(span);
    });

    console.log(data);

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();