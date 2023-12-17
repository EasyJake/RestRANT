const React = require('react');
const Def = require('../default');

function New() {
    const currentYear = new Date().getFullYear();
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
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
                        
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            type="number" 
                            id="founded" 
                            name="founded" 
                            required 
                            min="1600"  // Adjust the year as needed
                            max={currentYear} 
                            defaultValue={currentYear} 
                        />

                        <button type="submit">Add Place</button>
                    </fieldset>
                </form>
                <h2>views/places/new.jsx</h2>
            </main>
        </Def>
    );
}

module.exports = New;
