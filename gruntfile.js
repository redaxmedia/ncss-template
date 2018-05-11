module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		htmlhint: require('./tasks/htmlhint')(grunt),
		jsonlint: require('./tasks/jsonlint')(grunt),
		ncsslint: require('./tasks/ncsslint')(grunt),
		postcss: require('./tasks/postcss')(grunt),
		tocgen: require('./tasks/tocgen')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'jsonlint',
		'stylelint',
		'colorguard',
		'ncsslint',
		'htmlhint'
	]);
	grunt.registerTask('stylelint',
	[
		'postcss:stylelint'
	]);
	grunt.registerTask('stylefmt',
	[
		'postcss:stylefmt'
	]);
	grunt.registerTask('colorguard',
	[
		'postcss:colorguard'
	]);
	grunt.registerTask('build',
	[
		'build-styles'
	]);
	grunt.registerTask('build-styles',
	[
		'postcss:templateNCSS'
	]);
};
