const React = require('react');
const Default = require('../default'); // Make sure this path is correct

function Index({ places }) {
  return (
    <Default>
      <main>
      <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/places">Places</a></li>
              <li><a href="/places/new">Add Place</a></li>
            </ul>
          </nav>
          <h1>REST-Rant</h1>
        </header>
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
    </Default>
  );
}

module.exports = Index;
