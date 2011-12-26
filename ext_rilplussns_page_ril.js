insertContainer(SNS_SETTING_LIST, [
	{
		id: 'ril-reader-view',
		sns: ['twtr','fb','gplusone','evn','hbm2'],
		snsParams: {
			'evn': { contentId: 'page_reader' },
		},
		useAjax: true,
		targetSelector: {
			container:'div.reader_head',
			link: 'li.original > a:first-child',
			title: 'h1:first-child',
			inject: 'div.clear',
		},
		monitorSelector: 'div.text_body > *:first-child',
	},
	/*
	{
		id: 'ril-list-view',
		useAjax: true,
		sns: ['hbm'],
		targetSelector: {
			container:'ul#queue > li.item a.link[href^="http"]',
			link: null,
			title: 'span.title > span',
			inject: null,
		},
		monitorSelector: 'ul#queue > li.info',
	},
	*/
]);
