const React = require('react');

function Default({ children }) {
  return (
    <html>
      <head>
        <title>RestRANT</title>
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
      {/* <li><a href="/places/edit" className="btn btn-primary">Edit Place</a></li> <!-- If you have an Edit route -->
      <li><a href="/places/show" className="btn btn-primary">Show Place</a></li> <!-- If you have a Show route --> */}
      // ... any other routes you have for places
    </ul>
  </nav>
  <h1>REST-Rant</h1>
</header>

        {/* Navigation and other elements common to all pages */}
        {children}
        {/* Footer and other elements common to all pages */}
      </body>
    </html>
  );
}


module.exports = Default;
