const React = require('react');
const Def = require('../default');

function New() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {/* <form method="POST" action="/places">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Image URL</label>
                        <input id="pic" name="pic" type="url" />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" required />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <input type="submit" value="Add Place" />
                    </div>
                </form> */}
                

<fieldset>
<legend>Add a New Place</legend>

<label htmlFor="name">Place Name</label>
<input id="name" name="name" required />

<label htmlFor="pic">Place Image URL</label>
<input id="pic" name="pic" type="url" />

<label htmlFor="cuisines">Cuisines</label>
<input id="cuisines" name="cuisines" required />

<label htmlFor="city">City</label>
<input id="city" name="city" />

<label htmlFor="state">State</label>
<input id="state" name="state" />

<button type="submit">Add Place</button>
</fieldset>

                <h2>new.jsx</h2>
            </main>
        </Def>
    );
}

module.exports = New;

