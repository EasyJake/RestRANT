const React = require('react');
const Default = require('../default'); // Make sure this path is correct

function Index({places}) { // Destructure places from props
  let placesFormatted = places.map((place ) => {
    return (
      <div className="col-sm-6 my-3">
        <h2> <a href={`/places/${place.id}`}>{place.name}</a></h2>
        <p className="">{place.cuisines}</p>
        <p className="text-left">
          Located in {place.city}, {place.state}
          
        </p>
        
        <img src={place.pic} alt={place.name} className="img-fluid" />
       
      </div>
    );
  });

  return (
    <Default> {/* Use the correct name of the imported component */}
  
      <main>
        <h1>Places to Rant or Rave About</h1>
        <h2>views/places/index.jsx</h2>
        
        {/* <ul>
          {places.map((place, index) => (
            <h2 key={index}>
              <a href={`/places/${place.id}`}>{place.name}</a>
            </h2>
          ))}
        </ul> */}

        <div className="row">
          {placesFormatted}
        </div>
      
      </main>
      
    </Default>
  );
}

module.exports = Index;
