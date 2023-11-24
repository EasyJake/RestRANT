const React = require('react');
const Def = require('../default');

function New() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    {/* Form inputs will go here */}
                </form>

                <h2>new.jsx</h2>
            </main>
        </Def>
    );
}

module.exports = New;
