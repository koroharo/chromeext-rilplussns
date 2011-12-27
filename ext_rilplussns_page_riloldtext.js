insertContainer(SNS_SETTING_LIST, [
	{
		id: 'rilold-text-view',
		sns: ['twtr','fb','gplusone', 'mixicheck', 'mixilike','evn', 'tmblr', 'lkin', 'dlcs', 'digg', 'hbm2', 'ldclip', 'yjbm'],
		snsParams: {
			'evn': { contentId: 'text_header' },
		},
		useAjax: false,
		targetSelector: {
			container:'div#RIL_header',
			link: 'cite > a',
			title: 'h1',
			inject: 'span#header_cite',
		},
	},

]);

