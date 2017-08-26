module.exports = function ()
{
	'use strict';

	var config =
	{
		dependency:
		{
			src:
			[
				'composer.json',
				'package.json'
			]
		},
		ruleset:
		{
			src:
			[
				'.htmlhintrc',
				'.stylelintrc'
			]
		}
	};

	return config;
};