const http = require("http");
const events = require("events");

const myEmitter = require("./logEvents");

const port = 3000;

global.DEBUG = true;

const server = http.createServer((request, response) => {
  if (request.url === "/favicon.ico") {
    response.writeHead(200, { "Content-Type": "image/x-icon" });
    response.end();
    return;
  }
  // myEmitter.emit("log", "Server started");
  // response.end("Welcome to the DAL");
  myEmitter.emit("event", request.url, "INFO", "Welcome to the DAL");
  myEmitter.emit("route", request.url);
  response.end("Welcome to the DAL");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
