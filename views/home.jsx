const React = require('react');

function Home() {
  return (
    <html>
      <head>
        <title>Home Page</title>
        {/* Link to your separate CSS file */}
        <link rel="stylesheet" type="text/css" href="/stylesheets/style.css" />
      </head>
      <body>
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
          <img src="http://placekitten.com/250/250" alt="Food Image" />
          {/* Add more content here */}
        </main>
        <footer>
          <p>Photo by Brenda Godinez on Unsplash</p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Home;
