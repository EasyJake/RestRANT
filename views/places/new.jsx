const React = require('react');
const Def = require('../default');

function New() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
  <div>
    <label htmlFor="name">Place Name</label>
    <input id="name" name="name" required />
  </div>
  <div>
    <label htmlFor="pic">Place Image URL</label>
    <input id="pic" name="pic" />
  </div>
  <div>
    <label htmlFor="cuisines">Cuisines</label>
    <input id="cuisines" name="cuisines" required />
  </div>
  <div>
    <label htmlFor="city">City</label>
    <input id="city" name="city" required />
  </div>
  <div>
    <label htmlFor="state">State</label>
    <input id="state" name="state" required />
  </div>
  <div>
    <input type="submit" value="Add Place" />
  </div>
</form>


                <h2>new.jsx</h2>
            </main>
        </Def>
    );
}

module.exports = New;
