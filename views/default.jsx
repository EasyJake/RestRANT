const React = require('react');

function Default({ children }) {
  return (
    <html>
      <head>
        <title>RestRANT</title>
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
