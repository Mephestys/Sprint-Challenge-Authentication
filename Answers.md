1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    * **Middleware:** In terms of Express, middleware refers to functions which have access to request and response objects, as well as the next middleware function in the request-response cycle.
    * **Express Sessions:** Used to store a unique session for a user, allowing access to data. The session is stored on the server, while a unique ID is stored in a cookie given to the user, validating access to the session.
    * **bcrypt:** A password hashing/salting function.
    * **JWT:** JSON Web Token, a Base64 encoded JSON object used to verify integrity of claims. Unlike sessions, a JWT is simply a compact token generated and provided to an authorized user, where it can be stored and then sent in request headers to verify authorization.
1.  What does bcrypt do in order to prevent attacks?
    * Salting hashed passwords helps protect against rainbow table attacks, and the number of salt iterations can be increased, which can help resist brute-force search attacks.
1.  What are the three parts of the JSON Web Token?
    * **Header:** Contains the type of token (JWT), and the hashing algorithm in use.
    * **Payload:** Contains claims (anything like the name of the user, whether they have admin rights, etc.) and any additional metadata. Base64Url encoded.
    * **Signature:** Used to verify the token wasn't altered en route. Can also be signed with a private key (to verify sender).