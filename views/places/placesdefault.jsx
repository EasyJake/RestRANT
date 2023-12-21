const React = require('react');

function Default({ children }) {
  return (
    <html>
      <head>
        <title>Places</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* other head elements */}
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/" className="btn btn-primary">Home</a></li>
              <li><a href="/places" className="btn btn-primary">Places Index</a></li>
              <li><a href="/places/new" className="btn btn-primary">Add Place</a></li>
              {/* Additional routes can be added here if necessary */}
            </ul>
          </nav>
          <h1>REST-Rant</h1>
        </header>

        {/* Content will be injected here from the children */}
        {children}

     
      </body>
    </html>
  );
}

module.exports = Default;

// The show function/component should be in its own file, for example: show.jsx
