module.exports = () =>
{
	const config =
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
				'.ncsslintrc',
				'.stylelintrc'
			]
		}
	};

	return config;
};
