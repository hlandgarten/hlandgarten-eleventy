const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 1. Passthrough for assets (images, CSS, JS, etc.)
  eleventyConfig.addPassthroughCopy("assets");
 
  // Add a 'limit' filter to Nunjucks (and Liquid too)
  eleventyConfig.addFilter("limit", function(arr, limit) {
    if (!Array.isArray(arr)) return [];
    return arr.slice(0, limit);
  });

  // 2. Collection for blog posts
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/*.md").reverse();
  });

  // 3. Optional: readable date filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("LLLL d, yyyy");
  });

  // 4. Optional: truncate filter for excerpts
  eleventyConfig.addFilter("truncate", function(str, len) {
    if (!str) return "";
    return str.length > len ? str.substring(0, len) + "…" : str;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    }
  };
};
