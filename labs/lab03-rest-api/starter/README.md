# Lab 3 REST API

## How to Run

```bash
npm install
npm run server
```

The server runs on:

```text
http://localhost:3000
```

## How to Test

```bash
npm test
```

## API Routes

| Method | Route | Description |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/items` | Return all items |
| GET | `/items/:id` | Return one item |
| POST | `/items` | Create one item |
| PUT | `/items/:id` | Update one item |
| DELETE | `/items/:id` | Delete one item |

## Reflection Answers

### 1. What makes this API more REST-like than the previous HTTP/JSON lab?

This API is more REST-like than the previous HTTP/JSON lab because it organizes around a resource (/items) and uses 
standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on it. The previous lab used action based routes 
like /calculate and /echo which is not REST-style.

### 2. What is the purpose of a route parameter such as `/items/:id`?

The purpose of a route parameter such as `/items/:id` allows for variables to clearly been seen and handled in its route
and many others with various variations. It is efficient since it allows this URL like standard to be reuses instead of 
hardcoding routes every single time.

### 3. Why should `POST`, `PUT`, and `DELETE` use different HTTP methods?

The `POST`, `PUT`, and `DELETE` should use different HTTP methods because they can behave differently with different
verbs and patterns. Also, `POST` is non-idempotent whereas `PUT` and `DELETE` are.

### 4. What is the difference between a `400` error and a `404` error?

The difference between a `400` error and a `404` error is that a `400` error indicates the request was invalid whereas 
a `404` error means the server understood the request but the resource does not exist.

### 5. How does the OpenAPI file relate to your Express server code?

The OpenAPI file relates to my Express server code because the OpenAPI file documents the contract of the API (the 
routes, HTTP methods, request bodies, and expected responses) that the Express server implements. It can allow someone 
to understand how to use the API without reading the server code directly.

## Graduate Extension

TODO: Graduate students should describe their extension here.

NA