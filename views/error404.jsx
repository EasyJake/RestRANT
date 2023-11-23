const React = require('react');
const Default = require('./default'); // Adjust the path if necessary

function Error404() {
  return (
    <Default>
   
      <main>
        <h1>404: PAGE NOT FOUND views/places/error404.jsx</h1>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Default>
  );
}

module.exports = Error404;
