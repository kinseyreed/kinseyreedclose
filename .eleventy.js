const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Let content editors use friendly YAML data files (src/_data/*.yaml)
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy static assets straight through, unchanged
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/site.js": "site.js" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
};
