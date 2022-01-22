import http from "http";

/*
function handleRequest(request, response) {
    console.log(request);
};
*/

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.statusCode = 200;

  if (request.url == "/hello") {
      if (request.method == "GET") {
        response.write("Hello, world!");
      } else {
          response.statusCode = 405;
      }
  } else if (request.url == "/goodbye") {
    if (request.method == "GET") {
        response.write("Goodbye, world!");
      } else {
          response.statusCode = 405;
      }
    
  } else {
      response.statusCode = 404;
  }

  response.end();
});
server.listen(5080);
