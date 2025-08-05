const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // ✅ Passthrough Copy
    // 1. Passthrough for assets (images, CSS, JS, etc.)
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("src/CNAME");


  // ✅ Date Filters (using Luxon)
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

  eleventyConfig.addFilter("readableDate", (value, format = "LLL dd, yyyy") => {
    let dt;

    if (value instanceof Date) {
      dt = DateTime.fromJSDate(value);
    } else if (typeof value === "string") {
      dt = DateTime.fromISO(value);
    }

    return dt && dt.isValid ? dt.toFormat(format) : "Invalid Date";
  });

  // ✅ Utility Filters
  eleventyConfig.addFilter("truncate", function (text, length) {
    if (!text) return "";
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + "...";
  });

  eleventyConfig.addFilter("limit", function (arr, count) {
    return arr.slice(0, count);
  });

  eleventyConfig.addFilter("url", function (url) {
    return url;
  });

  // ✅ Template formats and engine
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);

  return {
    pathPrefix: "/", // Change to "" if deploying to root
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
