const app = document.getElementById('Coffee-Shop-Cards');
const container = document.createElement('div');
container.setAttribute('class', 'container');
const apiKey = 'prj_live_pk_32283390146f458ed6a90d2499e7bff510911e0f';

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.radar.io/v1/search/autocomplete?query=brooklyn+roasting&near=40.70390,-73.98670', true);
request.setRequestHeader("Authorization",apiKey)
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(addresses => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = person.name;

      const p = document.createElement('p');
      var text = document.createTextNode("Gender: " + person.gender);
      p.appendChild(text);
      // movie.description = movie.description.substring(0, 300);
      // p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
