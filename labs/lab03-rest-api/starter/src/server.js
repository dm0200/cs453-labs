import express from "express";

export function createApp() {
  const app = express();

  app.use(express.json());

  // Starter data. This data is stored in memory and will reset when the
  // server restarts.
  let nextId = 3;
  const items = [
    { id: 1, name: "keyboard", quantity: 10 },
    { id: 2, name: "mouse", quantity: 5 }
  ];

  // Return a simple health check response
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // TODO: Return all items.
  app.get("/items", (req, res) => {
    //res.status(501).json({ error: "Not implemented yet" });
    res.json(items); // Returns an array of items.
  });

  // TODO: Return one item by ID.
  app.get("/items/:id", (req, res) => {
    //res.status(501).json({ error: "Not implemented yet" });
    const id = Number(req.params.id);

    const item = items.find(i => i.id === id);

    if (!item) { // If the item does not exist, return a 404 response.
      return res.status(404).json({error: "Item not found"});
    }

    res.json(item); // Returns the matching item if it exists.
  });

  // TODO: Create a new item.
  app.post("/items", (req, res) => {
    //res.status(501).json({ error: "Not implemented yet" });
    const{ name, quantity } = req.body; // The client should send a JSON request body with name and quantity.

    // Check if name and quantity are valid
    if (!name || !quantity) { // If the request body is missing required fields or contains invalid data, return a 400 response with a JSON error message.
      return res.status(400).json({error: "name and quantity are required"});
    }

    // Creates a new item. The server should assign the id.
    const newItem = {
      id: nextId,
      name,
      quantity
    };

    nextId++;
    items.push(newItem);

    return res.status(201).json(newItem); // A successful create request should return status code 201.
  });

  // TODO: Update an existing item.
  app.put("/items/:id", (req, res) => {
    //res.status(501).json({ error: "Not implemented yet" });

    const id = Number(req.params.id);

    const item = items.find(i => i.id === id);

    if (!item) { // If the item does not exist, return a 404 response.
      return res.status(404).json({ error: "Item not found" });
    }

    const { name, quantity } = req.body; //  The request body should include both name and quantity.

    // Check if name and quantity are valid
    if (!name || !quantity) { // If the request body is missing required fields or contains invalid data, return a 400 response with a JSON error message.
      return res.status(400).json({error: "name and quantity are required"});
    }

    // Now update to the new item
    // PUT /items/:id should replace the name and quantity values for the item.
    item.name = name;
    item.quantity = quantity;

    res.json(item); // If the item exists, return the updated item.
  });

  // TODO: Delete an existing item.
  app.delete("/items/:id", (req, res) => {
    //res.status(501).json({ error: "Not implemented yet" });
    const id = Number(req.params.id);

    const index = items.findIndex(i => i.id === id);

    if (index == -1) { // If the item does not exist, return a 404 response.
      return res.status(404).json({error: "Item not found"});
    }

    // Deleting item
    // If the item exists, delete it and return status code 204.
    items.splice(index, 1);

    res.status(204).send(); // A 204 response does not need to include a response body.
  });

  // Don't worry about
  app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  return app;
}

const isMainModule = process.argv[1] === new URL(import.meta.url).pathname;

if (isMainModule) {
  const PORT = process.env.PORT || 3000;
  const app = createApp();

  app.listen(PORT, () => {
    console.log(`Lab 3 REST API listening on port ${PORT}`);
  });
}

// Testing to run terminal

const PORT = process.env.PORT || 3000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Lab 3 REST API listening on port ${PORT}`);
});