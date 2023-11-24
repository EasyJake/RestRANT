const React = require('react');
const Def = require('../default'); // Adjust the path as necessary.

function New() {
  return (
    <Def>
      <main>
        <h1>Add a New Place    <img src="public/images/coffee-cat.jpg" alt="Default Image" /> </h1>
        <form method="POST" action="/places">
          {/* Form inputs will go here */}
       

        </form>
      </main>
    </Def>
  );

  <input type="text" name="name" required />

}

module.exports = New;


<form method="POST" action="/places">
  {/* form inputs for name, city, state, cuisines, pic */}
</form>
