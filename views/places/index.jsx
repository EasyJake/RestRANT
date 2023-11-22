


// // index.js or routes.js or a similar file
// const express = require('express');
// const path = require('path');
// const app = express();
// const Places = require('./views/places/'); // Adjust the path as necessary

// // ... other setup ...

// app.get('/places', (req, res) => {
//     res.render('Places'); // Use the Places component for this route
// });

// // ... other routes and app.listen ...


const React = require("react");
const Def = require("../default.jsx");

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`}>{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img className="places-image" src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;