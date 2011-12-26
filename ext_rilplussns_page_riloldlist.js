insertContainer(SNS_SETTING_LIST, [
	{
		id: 'rilold-list-view',
		sns: ['hbm'],
		useAjax: false,
		targetSelector: {
			container:'ul#list > li',
			link: 'a.item',
			title: 'a.item',
			inject: 'small',
		},
	},
	{
		id: 'rilold-list-view',
		sns: ['hbm'],
		useAjax: true,
		targetSelector: {
			container:'ul#list > li',
			link: 'a.item',
			title: 'a.item',
			inject: 'small',
		},
		monitorSelector: 'ul#list > li#pt',
	},
]);
