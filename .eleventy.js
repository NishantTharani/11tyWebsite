module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy("assets");

  // Without this, "" and 0 are truthy values in Liquid
  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });
};
