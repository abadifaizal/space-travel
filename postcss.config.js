module.exports = {
	plugins: [
		require("postcss-import")(),
		// require("cssnano")({ preset: ["default"] }),
		require("autoprefixer")("last 2 versions, not ie > 0, not ie_mob > 0"),
		require("postcss-combine-media-query")(),
	],
};
