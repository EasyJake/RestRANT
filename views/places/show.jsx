const React = require('react');
const DefaultLayout = require('./placesdefault'); // Ensure this is the correct path to your Default layout

function show (props) {
  return (
    <DefaultLayout> {/* Use the layout you've defined for your application */}
   
      <main>
        <h1>{props.place.name}</h1> {/* Display the name of the place */}
        <h2>show.jsx</h2>
        <p className="text-left">{props.place.cuisines}</p> {/* Display the type of cuisines */}
        <img src={props.place.pic} alt={props.place.name} /> {/* Display an image of the place */}
        <p className="text-left">
          Located in {props.place.city}, {props.place.state}
        </p> {/* Display the location of the place */}
      
        
        <a href={`/places/${props.place._id}/edit`} className="btn btn-warning">Edit</a> {/* Link to the Edit form */}
        <form method="POST" action={`/places/${props.place._id}?_method=DELETE`} style={{ display: 'inline' }}>
          <input type="hidden" name="_method" value="DELETE" />
          <button type="submit" className="btn btn-danger">Delete</button> {/* Form to Delete the place */}
        </form>
      </main>
    </DefaultLayout>
  );
}

module.exports = show;



