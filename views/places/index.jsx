const React = require('react');
const Default = require('../default'); // Make sure this path is correct

function Index({ places }) { // Destructure places from props
  let placesFormatted = places.map((place, index) => {
    return (
      <div key={index} className="col-sm-6 my-3">
        <h2>{place.name}</h2>
        <p className="text-center">{place.cuisines}</p>
        <img src={place.pic} alt={place.name} className="img-fluid" />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Default> {/* Use the correct name of the imported component */}
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">
          {placesFormatted}
        </div>
      </main>
    </Default>
  );
}

module.exports = Index;
