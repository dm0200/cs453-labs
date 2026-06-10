## Discussion Questions

1. Which program is the server?
server.js

2. Which program is the client?
client.js

3. What happens when the client sends `QUIT`?
client closes connection while server continues to run

4. What happens if two clients connect at the same time?
both clients successfully connect while server handles both clients messages one

5. How is this different from HTTP?
Unlike HTTP, which uses structured requests and responses with methods (GET/POST), headers, and status codes, this TCP server sends and receives raw text with no formatting. HTTP connections also typically close after each request, while this TCP connection stays open persistently.