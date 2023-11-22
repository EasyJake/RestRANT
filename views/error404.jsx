const React = require('react'); // Import React to use JSX
const Def = require('./default'); // Import the Def layout component

// Define the error404 function as a React component
function Error404() {
    // Return JSX content wrapped in the Def component.
    // The Def component is assumed to be a layout wrapper that includes common elements like headers and footers.
    return (
        <Def>
            <main>
                {/* Display a 404 error message */}
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    );
}

module.exports = Error404; // Export the Error404 component for use in other files
