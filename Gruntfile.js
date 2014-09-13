var grunt = require("grunt");

grunt.loadNpmTasks("grunt-contrib-less");
grunt.loadNpmTasks("grunt-contrib-watch");

grunt.initConfig({
	less: {
		development: {
			options: {
				paths: ["less"],
				sourceMap: true,
				sourceMapFilename: "style.css.map",
				sourceMapRootpath: "/"
			},
			files: {
				"style.css": "less/style.less"
			}
		}
	},
	watch: {
		scripts: {
			files: ["less/*.less"],
			tasks: ["less"],
			options: {
				spawn: false
			}
		}
	}
});

grunt.registerTask("default", ["less", "watch"]);

