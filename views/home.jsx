const React = require('react');

function Home() {
  return (
    <html>
      <head>
        <title>Home Page</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/style.css" />

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
          <h1>home.jsx</h1>
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
