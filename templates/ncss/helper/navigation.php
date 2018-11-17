<?php
namespace Redaxscript;

$navigationArray = [];
$whereArray =
[
	'author' => 'documentation-sync',
	'status' => 1
];
$categories = Db::forTablePrefix('categories')->where($whereArray)->orderBySetting('rank')->findMany();
$articles = Db::forTablePrefix('articles')->where($whereArray)->orderBySetting('rank')->findMany();

/* process categories */

foreach ($categories as $category)
{
	if (!$category->parent)
	{
		$parentAlias = $category->alias;
		$navigationArray[$parentAlias] =
		[
			'title' => $category->title,
			'alias' => $category->alias,
			'route' => $category->alias
		];
	}
	else
	{
		$categoryAlias = $category->alias;
		$navigationArray[$parentAlias]['children'][$categoryAlias] =
		[
			'title' => $category->title,
			'alias' => $category->alias,
			'route' => $parentAlias . '/' . $category->alias
		];

		/* process articles */

		foreach ($articles as $article)
		{
			if ($article->category === $category->id)
			{
				$navigationArray[$parentAlias]['children'][$categoryAlias]['children'][$article->alias] =
				[
					'title' => $article->title,
					'alias' => $article->alias,
					'route' => $parentAlias . '/' . $category->alias . '/' . $article->alias
				];
			}
		}
	}
}

return $navigationArray;