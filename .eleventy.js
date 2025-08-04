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
  const { DateTime } = require("luxon");

    eleventyConfig.addFilter("date", (value, format = "LLL dd, yyyy") => {
    return DateTime.fromJSDate(value).toFormat(format);
  });

  eleventyConfig.addFilter("readableDate", (value, format = "LLL dd, yyyy") => {
    return DateTime.fromJSDate(value).toFormat(format);
  });
    // Add a filter for date formatting
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    let dt;

    if (value === "now") {
      dt = DateTime.now();
    } else if (value instanceof Date) {
      dt = DateTime.fromJSDate(value);
    } else if (typeof value === "string") {
      dt = DateTime.fromISO(value);
    }

    return dt && dt.isValid ? dt.toFormat(format) : "Invalid Date";
  });

  // 4. Optional: truncate filter for excerpts
  eleventyConfig.addFilter("truncate", function(str, len) {
    if (!str) return "";
    return str.length > len ? str.substring(0, len) + "…" : str;
  });

  return {
    pathPrefix: "/", // 👈 this is the key
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    }
  };
};
