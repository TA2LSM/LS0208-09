const fs = require("fs"); //file-system module included
const http = require("http");
const url = require("url");

// // //Blocking, synchronous way
// // const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //open file and read it with a utf-8 format
// // console.log(textIn);

// // //const textOut = `` 'this is: ' + textIn;  //old methode
// // //const textOut = `This is what we know about the avocado: ${textIn}`; //${textIn}. ile ek özelliklere erişim de var
// // const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`; //.\n = new line
// // //console.log(textOut);

// // fs.writeFileSync("./txt/output.txt", textOut);
// // console.log("File written!");

// //Non-blocking, asynchronous way
// //3rd parameter is a callback function. When main function ends this callback will be called...
// //Callback function's 1st parameter is error, 2nd one is data. This is very typical in node.js
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   //ES6 syntax "(err, data) =>..."
//   if (err) {
//     console.log("Error: " + err);
//   } else {
//     console.log("Readed with no error :)");
//   }
//   console.log(data);
// });

// console.log("The file will be readed...");

// //check lesson 02-06 codes for multiple read and write

/*----------------------------------------*/
// SERVER

const server = http.createServer((req, res) => {
  //console.log(req);
  console.log(req.url); //ana url'den sonra gelen parametre kısmını parse eder

  const pathName = req.url;

  // ROUTING...
  if (pathName === "/") {
    res.end("Hello from TA2LSM server!\n\n> _");
  } else if (pathName === "/overview") {
    res.end("Overview Section...");
  } else if (pathName === "/product") {
    res.end("Product Section...");
  } else {
    //res.writeHead(404);
    //res.end("Invalid parameter. Page not found !!!");

    // these codes below must be written before res.end !!!
    res.writeHead(404, {
      "Content-type": "text/html",
      "My-own-header": "Hello World!",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

//Local host, 8000 port
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port: 8000");
});
