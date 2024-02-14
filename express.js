const e = require("express");
const express = require("express");
const app = express();

const { getActors, getActorById } = require("./services/actors.dal");
const { getAllFilmsForAllActors } = require("./services/films.dal");

const PORT = 3000;

global.DEBUG = false;

// ***** Create Read Update Delete (CRUD) *****
// app.post          // CREATE html
// app.get           // READ html
// app.put           // UPDATE
// app.patch         // UPDATE
// app.delete        // DELETE

// need to set what the view engine is - just knows that views are in the views folder??? Supposed to be in views folder by default when using express...
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  if (DEBUG) console.log("root route");
  response.send("the route for the sites root /.");
});

app.get("/about", (request, response) => {
  if (DEBUG) console.log("/about route was accessed.");
  response.send("the /about route.");
});

// // just knows that it's in the views folder???
// app.get("/page", (request, response) => {
//   console.log("rendered a web page at route /page.");
//   response.render("page");
// });

// app.get("/darth", (request, response) => {
//   console.log("rendered a web page at route /darth.");
//   // call database to get data, hardcoding for now
//   response.render("darth", { name: "Darth Vader" });
// });

app.get("/actors", async (request, response) => {
  if (DEBUG) console.log("/actors route was accessed.");
  let theActors = await getActors();
  response.write(JSON.stringify(theActors));
  response.end();
});

app.get("/films", async (request, response) => {
  if (DEBUG) console.log("/films route was accessed.");
  let theActors = await getAllFilmsForAllActors();
  response.write(JSON.stringify(theActors));
  response.end();
});

// can use whatever you want for :id, doesn't have to be 'id' can use pancake if you want.
app.get("/actors/:id", async (request, response) => {
  if (DEBUG) console.log("/actors/:id route was accessed.");
  // response.send(`the id is ${request.params.id}`);
  // getActorById(request.params.id);
  let theActor = await getActorById(request.params.id);
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(theActor));
  response.end();
});

app.use((request, response) => {
  if (DEBUG) console.log("404 route was accessed.");
  response.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
