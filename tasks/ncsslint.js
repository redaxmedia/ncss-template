module.exports = function ()
{
	'use strict';

	var config =
	{
		templates:
		{
			options:
			{
				path: 'templates/*/*.phtml',
				namespace: 'rs',
				loglevel: 'info',
				haltonerror: true
			}
		}
	};

	return config;
};