import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const preferredPort = Number(process.env.PORT ?? 4173);
const lastFallbackPort = preferredPort + 20;
let port = preferredPort;
const root = fileURLToPath(new URL("./src/", import.meta.url));
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = createServer((request, response) => {
  const requestedPath = request.url === "/" ? "/index.html" : request.url;
  const safePath = normalize(requestedPath.split("?")[0]).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(root, safePath);

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  if (statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && port < lastFallbackPort) {
    const unavailablePort = port;
    port += 1;
    console.warn(`Port ${unavailablePort} is in use; trying ${port}...`);
    server.listen(port);
    return;
  }

  throw error;
});

server.on("listening", () => {
  console.log(`Agent Lab Blog: http://localhost:${port}`);
});

server.listen(port);
