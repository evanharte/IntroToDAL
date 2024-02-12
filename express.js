const e = require("express");
const express = require("express");
const app = express();

const { getActors, getActorById } = require("./services/actors.dal");

const PORT = 3000;

global.DEBUG = true;

// ***** Create Read Update Delete (CRUD) *****
// app.post          // CREATE html
// app.get           // READ html
// app.put           // UPDATE
// app.patch         // UPDATE
// app.delete        // DELETE

// need to set what the view engine is - just knows that views are in the views folder??? Supposed to be in views folder by default when using express...
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  console.log("root route");
  response.send("the route for the sites root /.");
});

app.get("/about", (request, response) => {
  console.log("/about route was accessed.");
  response.send("the /about route.");
});

// just knows that it's in the views folder???
app.get("/page", (request, response) => {
  console.log("rendered a web page at route /page.");
  response.render("page");
});

app.get("/darth", (request, response) => {
  console.log("rendered a web page at route /darth.");
  // call database to get data, hardcoding for now
  response.render("darth", { name: "Darth Vader" });
});

// can use whatever you want for :id, doesn't have to be 'id' can use pancake if you want.
app.get("/actors/:id", async (request, response) => {
  console.log("/actors/:id route was accessed.");
  // response.send(`the id is ${request.params.id}`);
  // getActorById(request.params.id);
  let theActor = await getActorById(request.params.id);
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(theActor));
  response.end();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
