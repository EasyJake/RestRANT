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
          <li><a href="/" className="btn btn-primary">Home</a></li>
          <li><a href="/places" className="btn btn-primary">Places Page</a></li>
          <li><a href="/places/new" className="btn btn-primary">Add Place</a></li>
        </ul>
          </nav>
          <h1>RestRANT/views/home.jsx</h1>
        </header>
        <main>
        <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Drink" />

        
          
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
