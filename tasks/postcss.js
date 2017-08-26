module.exports = function ()
{
	'use strict';

	var config =
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
				require('postcss-custom-properties'),
				require('postcss-custom-media'),
				require('postcss-custom-selectors'),
				require('postcss-nesting'),
				require('postcss-extend'),
				require('postcss-color-gray'),
				require('postcss-color-function'),
				require('autoprefixer')(
				{
					browsers: 'last 2 versions'
				}),
				require('cssnano')(
				{
					autoprefixer: false,
					colormin: false,
					zindex: false
				})
			]
		}
	};

	return config;
};