insertContainer(SNS_SETTING_LIST, [
	{
		id: 'ril-reader-view',
		sns: ['twtr','fb','gplusone', 'mixicheck', 'mixilike','evn', 'tmblr', 'lkin', 'dlcs', 'digg', 'hbm2', 'ldclip', 'yjbm'],
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
]);
