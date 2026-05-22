// Post-build: SSR the homepage using the built server bundle → dist/client/index.html
import { writeFileSync } from "fs";

try {
  const server = (await import("../dist/server/index.js")).default;

  const response = await server.fetch(
    new Request("http://localhost/"),
    {},
    { waitUntil: () => {}, passThroughOnException: () => {} },
  );

  if (!response.ok) {
    throw new Error(`Server responded with ${response.status}`);
  }

  const html = await response.text();
  writeFileSync("dist/client/index.html", html, "utf-8");
  console.log("✅ index.html generated via SSR (" + html.length + " bytes)");
} catch (err) {
  console.error("❌ SSR pre-render failed:", err.message);
  console.error(err);
  process.exit(1);
}
