//npm install bcrypt     :-   command to install bcrypt;
//npm i jsonwebtoken      :-  command to install instance of JWT;
//npm install cookie-parser


const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;


app.use(express.json());

const dbConnect = require("./config/database");
dbConnect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//activate
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})

 









/*

*********
When it comes to web development, security is of utmost importance. One of the most popular methods of securing web applications is through 
authentication and authorization. This is where tokens and cookies come into play. In this article, we will discuss two of the most commonly
 used authentication methods: JWT tokens and cookies.

**JSON Web Tokens (JWT) -> JSON Web Tokens (JWT) is an open standard that defines a compact and self-contained way for securely transmitting
 information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be used
  to securely authenticate users,verify their identity, and provide access to authorized resources.

JWTS are composed of three parts: a header, a payload, and a signature.

The header typically contains the type of the token (JWT), and the signing algorithm used. The payload contains the data being transmitted, 
such as the user's ID or email address. The signature is created by hashing the header and payload using a secret key, which can be used to
 verify the authenticity of the token. When a user logs into a web application, the server generates a JWT and sends it to the client as a 
 response. The client can then include the JWT in the headers of subsequent requests to the server. The server can verify the authenticity 
 of the token by checking the signature and decoding the payload.

JWTs are commonly used in Single Sign-On (SSO) systems, where a user can authenticate once and access multiple web applications without having
to re-enter their credentials. They are also used in token-based authentication systems, where the token is used instead of a username and 
password.

**Cookies ->  Cookies are small text files that are stored on a user's computer when they visit a website. They are commonly used to store user
preferences, shopping cart items, and session data. Cookies can also be used for authentication and authorization.
When a user logs into a web application, the server can create a cookie that contains a unique identifier for the user's session. This cookie 
can then be sent to the client as a response. The client can include the cookie in subsequent requests to the server, allowing the server to 
identify the user and provide access to authorized resources.
Cookies can be either session cookies or persistent cookies. Session cookies are stored in memory and are deleted when the user closes their 
browser. Persistent cookies are stored on the user's computer and are not deleted when the user closes their browser.
Cookies have some disadvantages, including the fact that they can be easily tampered with and that they can be blocked by the user's browser.
 They also require additional server-side processing to store and retrieve the cookie data. 
 
Conclusion
JWT tokens and cookies are both popular methods of authentication and authorization in web development. JWTS are self-contained and can be 
easily transmitted between parties, while cookies are stored on the user's computer and require additional server-side processing. Both methods 
have their advantages and disadvantages, and developers should choose the method that best fits their application's security and performance
needs.
********* 


**** Bcrypt :- Bcrypt turns a simple password into fixed-length characters called a hash. Before hashing a password, bcrypt applies
 a salt — a unique random string that makes the hash unpredictable. bcrypt offers better security due to its built-in salting and 
 adaptive, slower hashing process.


**Error: \\?\C:\Users\owner\desktop\msci444\no-scraps\node_modules\bcrypt\lib\binding\napi-v3\bcrypt_lib.node is not a valid Win32 application.
\\?\C:\Users\owner\desktop\msci444\no-scraps\node_modules\bcrypt\lib\binding\napi-v3\bcrypt_lib.node
 
There are different possibilities how to resolve:
1) "npm rebuild bcrypt --build-from-source" (as stated in the comments already) check that your node version for recompiling matches the test/production version
2) "npm install node-pre-gyp -g" then "npm rebuild bcrypt --build-from-source"
3) Delete the folder containing npm-bcrypt on the deployment server inside your project folder node_modules (..programs\server\node_modules). On the deployment server, run npm install bcrypt
  
*/