module.exports = function (eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
