const React = require('react');
const Default = require('./default'); // Adjust the path if necessary

function Error404() {
  return (
    <Default>
    <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/places">Places</a></li>
              <li><a href="/places/new">Add Place</a></li>
            </ul>
          </nav>
          <h1>REST-Rant</h1>
        </header>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Default>
  );
}

module.exports = Error404;
