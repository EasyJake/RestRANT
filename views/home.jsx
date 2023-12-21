
const React = require('react')
const Def = require('./default')

function Home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <h2>home.jsx</h2>
                <div>
                  <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                  <div>
                    Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                  </div>
                </div>
                {/* <a href="/places" className="btn btn-primary">Places Page</a> */}
            
            
            </main>

        </Def>
    )
}

module.exports = Home
