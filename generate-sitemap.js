const SitemapGenerator = require("sitemap-generator");

// Initialize the generator
const generator = SitemapGenerator("https://www.getboast.co/", {
  stripQuerystring: false, // optional
});

// Register event listeners
generator.on("done", () => {
  console.log("Sitemap generated");
});

// Start the generator
generator.start();
