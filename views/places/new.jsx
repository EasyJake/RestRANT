const React = require('react');
const Def = require('../default');

function New() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {/* The form tag defines a form that is submitted to the server */}
                <form method="POST" action="/places">
                    {/* The fieldset groups related elements in a form */}
                    <fieldset>
                        <legend>Add a New Place</legend>

                        {/* The label represents a caption for an item in a user interface */}
                        <label htmlFor="name">Place Name</label>
                        {/* The input represents a typed data field, usually with a form control to allow the user to edit the data */}
                        <input id="name" name="name" required />

                        <label htmlFor="pic">Place Image URL</label>
                        <input id="pic" name="pic" type="url" />

                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" required />

                        <label htmlFor="city">City</label>
                        <input id="city" name="city" />

                        <label htmlFor="state">State</label>
                        <input id="state" name="state" />

                        {/* The button with type="submit" submits the form to the server */}
                        <button type="submit">Add Place</button>
                    </fieldset>
                </form>
                <h2>new.jsx</h2>
            </main>
        </Def>
    );
}

module.exports = New;
