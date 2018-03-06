module.exports = () =>
{
	'use strict';

	const config =
	{
		templates:
		{
			src:
			[
				'templates/**/assets/**/*.{css,js}'
			]
		}
	};

	return config;
};