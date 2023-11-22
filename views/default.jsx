const React = require('react');

function Def({ children }) {
    return (
        <html>
            <head>
                {/* Meta tags, title, and other head elements */}
                <title>RestRANT</title>
            </head>
            <body>
                {/* Navigation and other elements common to all pages */}
                {children}
                {/* Footer and other elements common to all pages */}
            </body>
        </html>
    );
}

module.exports = Def;







// const React = require('react');

// function Def({ children }) {
//     return (
//         <html>
//             <head>
//                 {/* Meta tags, title, and other head elements */}
//                 <title>RestRANT</title>
//             </head>
//             <body>
//                 {/* Navigation and other elements common to all pages */}
//                 {children}
//                 {/* Footer and other elements common to all pages */}
//             </body>
//         </html>
//     );
// }

// module.exports = Def;
