const path = require('path');

module.exports = {
  mode: 'production',
	entry: {
		index: "./src/js/home.js",
		projectPage: "./src/js/project-page.js"
	},
	output: {
		filename: "[name].min.js"
	},
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, './assets/js')],
        loader: 'babel-loader',
      },
    ],
  },
};
