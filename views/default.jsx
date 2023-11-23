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
        {/* Navigation and other elements common to all pages */}
        {children}
        {/* Footer and other elements common to all pages */}
      </body>
    </html>
  );
}


module.exports = Default;
