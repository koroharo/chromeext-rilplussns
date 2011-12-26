insertContainer(SNS_SETTING_LIST, [
	{
		id: 'rilold-text-view',
		sns: ['twtr','fb','gplusone','evn','hbm2'],
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

