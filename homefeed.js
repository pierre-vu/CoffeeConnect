const yelp = require('yelp-fusion');

const apiKey = 'szhgoYUtJ9ueJRjzpQdrreAMJD3s1qEN1LPcjx2kZEWWgqxhcQvgqghFNLgtg4X3dTbgb3PMet9CDshWCo9V_L8ZveySGXj1As42vBNxRCzQ8yonIxZ_N-crtIF4YHYx';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const searchRequest = {
    term: 'coffee',
    location: 'college station, tx'
};
applicationCache.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.yelp.com/v3/businesses/search', true);
request.onload = function () {

    var data = JSON.parse(this.repsonse);
    if (request.status >= 200 && request.status < 400){
        data.forEach(business.location)

    }
}