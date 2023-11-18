const React = require('react');

function Def(html) {
  return (
    <html>
      <head>
        {/* Add any common elements like meta tags, title, link to CSS files */}
      </head>
      <body>
        {/* You can add a header, navigation, or any other common components here */}
        {html.children}
        {/* You can add a footer or any other common components here */}
      </body>
    </html>
  );
}

module.exports = Def;
