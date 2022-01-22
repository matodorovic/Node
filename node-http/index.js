import http from "http";

/*
function handleRequest(request, response) {
    console.log(request);
};
*/

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url == "/hello") {
    response.statusCode = 200;
    response.write("Hello, world!");
    response.end();
  } else if (request.url == "/goodbye") {
    response.statusCode = 200;
    response.write("Goodbye, world!");
    response.end();
  }
});
server.listen(5080);
