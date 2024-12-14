const fs = require('fs');
const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {

	eleventyConfig.setLibrary("handlebars", require("handlebars"));

	eleventyConfig.addWatchTarget("src/_includes/footer.hbs");

	eleventyConfig.addPlugin(handlebarsPlugin);

	eleventyConfig.addPassthroughCopy("src/");

	//runs before every build
	eleventyConfig.on("eleventy.before", async ({ dir, runMode, outputMode }) => {
		//deletes dist folder and prints a message in console
		fs.rmSync(dir.output, { recursive: true, force: true });
		console.log("Dist successfully deleted!");
	});


	// Return your Object options:
	return {
		dir: {
			input: "src",
			output: "dist"
		}
	}
};