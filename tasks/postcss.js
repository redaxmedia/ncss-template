module.exports = () =>
{
	const config =
	{
		templateNCSS:
		{
			src:
			[
				'templates/ncss/assets/styles/_ncss.css'
			],
			dest: 'templates/ncss/dist/styles/ncss.min.css'
		},
		stylelint:
		{
			src:
			[
				'templates/*/assets/styles/*.css'
			],
			options:
			{
				processors:
				[
					require('stylelint'),
					require('postcss-reporter')(
					{
						throwError: true
					})
				]
			}
		},
		stylefmt:
		{
			src:
			[
				'templates/*/assets/styles/*.css'
			],
			options:
			{
				processors:
				[
					require('stylefmt')
				]
			}
		},
		colorguard:
		{
			src:
			[
				'templates/*/dist/styles/*.css'
			],
			options:
			{
				processors:
				[
					require('colorguard')(
					{
						threshold: 2,
						allowEquivalentNotation: true
					}),
					require('postcss-reporter')(
					{
						throwError: true
					})
				]
			}
		},
		options:
		{
			processors:
			[
				require('postcss-import'),
				require('postcss-custom-properties')(
				{
					preserve: false
				}),
				require('postcss-custom-media'),
				require('postcss-custom-selectors'),
				require('postcss-nesting'),
				require('postcss-extend'),
				require('postcss-color-gray')(
				{
					preserve: false
				}),
				require('postcss-color-function'),
				require('postcss-rtl'),
				require('autoprefixer'),
				require('cssnano')
			]
		}
	};

	return config;
};
