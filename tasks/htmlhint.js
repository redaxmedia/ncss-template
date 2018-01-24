module.exports = () =>
{
	'use strict';

	const config =
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