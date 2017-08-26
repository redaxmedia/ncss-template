module.exports = function ()
{
	'use strict';

	var config =
	{
		templates:
		{
			src:
			[
				'templates/*/*.phtml'
			]
		},
		options:
		{
			htmlhintrc: '.htmlhintrc'
		}
	};

	return config;
};