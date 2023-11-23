const React = require('react');
const Def = require('../default'); // Adjust the path if necessary

function Places({ places }) {
  return (
    <Def>
      <main>
        <h1>Places</h1>
        <div className="places-list">
          {places.map((place, index) => (
            <div key={index} className="place-item">
              <img src={place.pic} alt={place.name} className="place-image" />
              <div className="place-details">
                <h2>{place.name}</h2>
                <p className="place-cuisines">{place.cuisines}</p>
                <p className="place-location">{`${place.city}, ${place.state}`}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Def>
  );
}

module.exports = Places;
