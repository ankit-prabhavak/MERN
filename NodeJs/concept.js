/**
 * Node.js Core Concepts Demo
 * Run: node concept.js
 */

// ================================
// 1. Global Objects
// ================================
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

// ================================
// 2. Modules (require / export)
// ================================
const path = require("path");

console.log("File extension:", path.extname(__filename));

// ================================
// 3. File System (fs)
// ================================
const fs = require("fs");

// Write file
fs.writeFileSync("demo.txt", "Hello from Node.js");

// Read file
const data = fs.readFileSync("demo.txt", "utf8");
console.log("File content:", data);

// ================================
// 4. Asynchronous Code (Callback)
// ================================
fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Async read:", data);
});

// ================================
// 5. Promises
// ================================
const readFilePromise = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

readFilePromise("demo.txt")
  .then(data => console.log("Promise read:", data))
  .catch(err => console.error(err));

// ================================
// 6. Async / Await
// ================================
const readAsync = async () => {
  try {
    const data = await fs.promises.readFile("demo.txt", "utf8");
    console.log("Async/Await read:", data);
  } catch (err) {
    console.error(err);
  }
};
readAsync();

// ================================
// 7. Events
// ================================
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(`${user} logged in`);
});

emitter.emit("login", "Ankit");

// ================================
// 8. HTTP Server
// ================================
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// ================================
// 9. Process & Environment
// ================================
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);

// ================================
// 10. Error Handling
// ================================
try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.error("Caught error:", err.message);
}
