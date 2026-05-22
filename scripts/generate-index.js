// Post-build script: reads dist/client/assets and generates index.html for Vercel SPA mode
import { readdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const assetsDir = join(process.cwd(), "dist", "client", "assets");
const outFile = join(process.cwd(), "dist", "client", "index.html");

if (!existsSync(assetsDir)) {
  console.error("dist/client/assets not found — run vite build first");
  process.exit(1);
}

const files = readdirSync(assetsDir);

// Main entry JS files (exclude chunk files that start with _)
const jsFiles = files.filter(
  (f) => f.endsWith(".js") && !f.startsWith("_") && !f.startsWith("chunk")
);
// CSS
const cssFiles = files.filter((f) => f.endsWith(".css"));

const cssLinks = cssFiles
  .map((f) => `  <link rel="stylesheet" crossorigin href="/assets/${f}" />`)
  .join("\n");

const jsScripts = jsFiles
  .map((f) => `  <script type="module" crossorigin src="/assets/${f}"></script>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vartika Ojha — Advocate &amp; Legal Consultant</title>
    <meta name="description" content="Office of Vartika Ojha — Advocate and Legal Consultant offering counsel in constitutional, corporate, criminal, competition, consumer and international trade law." />
    <meta property="og:title" content="Vartika Ojha — Advocate &amp; Legal Consultant" />
    <meta property="og:description" content="Premium legal counsel and advocacy across constitutional, corporate, criminal and trade law." />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
${cssLinks}
  </head>
  <body>
    <div id="root"></div>
${jsScripts}
  </body>
</html>
`;

writeFileSync(outFile, html, "utf-8");
console.log(`✅ Generated ${outFile}`);
console.log(`   JS: ${jsFiles.join(", ")}`);
console.log(`   CSS: ${cssFiles.join(", ")}`);
