// scripts/patch-node-build.js
import fs from "fs";
import path from "path";

const file = path.resolve(process.cwd(), "dist/server/node-build.mjs");
let src = fs.readFileSync(file, "utf8");

if (src.includes('app.get("*"')) {
  src = src.replace('app.get("*", (req, res) => {', 'app.get("/{*splat}", (req, res) => {');
  fs.writeFileSync(file + ".bak", fs.readFileSync(file, "utf8"));
  fs.writeFileSync(file, src, "utf8");
  console.log("Patched node-build.mjs (backup em node-build.mjs.bak).");
} else {
  console.log("Nada pra patchar.");
}
