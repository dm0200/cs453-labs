## Reflection Questions

Answer the following questions in your submission:

1. What is the difference between a TCP message and an HTTP request?
The difference between a TCP message and an HTTP request is a TCP message comes from sending raw bytes with no structure whereas an HTTP request follows a standard format.

2. What does the `Content-Type: application/json` header tell the server?
The `Content-Type: application/json` header tells the server there is a JSON string withing the requested body & tells the server how to interpret the body for parsing.

3. Why should a server return different HTTP status codes for different situations?
A server should return different HTTP status codes for different situations because it allows a destinction of errors, successes, and redirects that allows a network, clients, and tools to identify.

4. What happens if the client sends invalid JSON?
If the client sends invalid JSON, the server will be unable to interpret it and will reject the request like a 400 error message.

5. How is this lab different from Lab 1?
This lab different from Lab 1 because the server/client are comminicating via HTTP rather than TCP like in Lab 1. This lab adds structure and status codes rather than raw bytes and no structure.