var SNS_SETTING_LIST = [
	{
	/*
	<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://example.com" data-text="TweetText" data-hashtags="rilplussns">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
	*/
		id: 'twtr',
		setup: function(parentElem, url, title, rowTs) {

			var twLink = DCE('a');
			twLink.classList.add('twitter-share-button');
			twLink.addClass('twtr-link');
			twLink.setAttribute('href', 'https://twitter.com/share');
			twLink.setAttribute('data-url', url);
			twLink.setAttribute('data-text', title);
			twLink.setAttribute('data-lang', navigator.language || 'en');
			twLink.setAttribute('data-hashtags', 'rilplussns');
			twLink.innerHTML = 'Tweet';
			
			parentElem.appendChild(twLink);

			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src="//platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document,"script","twitter-wjs");

		},
	},
	{
		id: 'fb',
		setup: function(parentElem, url, title, rowTs) {
			/*
			<div id="fb-root"></div>
			<script>(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
			</script>

			<div class="fb-like"
				data-href="http://creazy.net/2010/09/howto_setup_social_media_button.html"
				data-send="true"
				data-layout="button_count"
				data-width="450"
				data-show-faces="false"
				data-font="arial"></div>
			*/

			var fbElem = DCE('div');
			fbElem.classList.add('fb-like');
			fbElem.addClass('fb-element');
			fbElem.setAttribute('data-href', url);
			fbElem.setAttribute('data-send', 'false');
			fbElem.setAttribute('data-layout', 'button_count');
			fbElem.setAttribute('data-width', '130');
			fbElem.setAttribute('data-show-faces', 'false');
			
			parentElem.appendChild(fbElem);

			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document, 'script', 'facebook-jssdk');
		},
	},
	{
		id: 'gplusone',
		setup: function(parentElem, url, title, pageParams) {
			/*
				<!-- このタグを +1 ボタンを表示する場所に挿入してください -->
				<g:plusone size="medium" href="http://creazy.net/2010/09/howto_setup_social_media_button.html"></g:plusone>
				
				<!-- この render 呼び出しを適切な位置に挿入してください -->
				<script type="text/javascript">
				  window.___gcfg = {lang: 'ja'};
				
				  (function() {
				    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
				    po.src = 'https://apis.google.com/js/plusone.js';
				    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
				  })();
				</script>
			*/
			var gplusoneElem = DCE('g:plusone');
			gplusoneElem.setAttribute('size', 'medium');
			gplusoneElem.setAttribute('href', url);
			
			parentElem.appendChild(gplusoneElem);
			
			var scriptElem = DCE('script');
			scriptElem.innerHTML = 
				"window.___gcfg = {lang: 'ja'};"
				+ "(function() {"
				+ "var po = document.createElement('script');"
				+ "po.type = 'text/javascript';"
				+ "po.async = true;"
				+ "po.src = 'https://apis.google.com/js/plusone.js';"
				+ "var s = document.getElementsByTagName('script')[0];"
				+ "s.parentNode.insertBefore(po, s);"
				+ "})();"
			
			parentElem.appendChild(scriptElem);
		},
	},
	{
		id: 'mixicheck',
		setup: function(parentElem, url, title, pageParams) {
			/*
				<a href="http://mixi.jp/share.pl" class="mixi-check-button">mixiチェック</a>
				<script type="text/javascript" src="http://static.mixi.jp/js/share.js"></script>
			*/
			var mixiCheckLink = DCE('a');
			mixiCheckLink.classList.add('mixi-check-button');
			mixiCheckLink.addClass('mixi-check-link');
			mixiCheckLink.setAttribute('href', 'http://mixi.jp/share.pl');
			mixiCheckLink.setAttribute('data-url', url);
			mixiCheckLink.setAttribute('data-key', '2b1c77126d531ff18ca3c70f1f19bf80b73fd10c');
			mixiCheckLink.setAttribute('data-button', 'button-3');
			
			parentElem.appendChild(mixiCheckLink);

			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src = "//static.mixi.jp/js/share.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document, 'script', 'mixi-check-js');

		},
	},
	{
		id: 'mixilike',
		setup: function(parentElem, url, title, pageParams) {
			/*
			<div data-plugins-type="mixi-favorite"
				data-service-key="2b1c77126d531ff18ca3c70f1f19bf80b73fd10c"
				data-size="medium"
				data-href="http://d.hatena.ne.jp/"
				data-show-faces="false"
				data-show-count="true"
				data-show-comment="true"
				data-width=""></div>
			<script type="text/javascript">(function(d) {var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true;s.src = '//static.mixi.jp/js/plugins.js#lang=ja';d.getElementsByTagName('head')[0].appendChild(s);})(document);</script>
			*/

			var mixiLikeElem = DCE('div');
			mixiLikeElem.addClass('mixi-like-elem');
			mixiLikeElem.setAttribute('data-plugins-type', "mixi-favorite");
			mixiLikeElem.setAttribute('data-service-key', "2b1c77126d531ff18ca3c70f1f19bf80b73fd10c");
			mixiLikeElem.setAttribute('data-size', "medium");
			mixiLikeElem.setAttribute('data-href', url);
			mixiLikeElem.setAttribute('data-show-faces', "false");
			mixiLikeElem.setAttribute('data-show-count', "true");
			mixiLikeElem.setAttribute('data-show-comment', "true");
			mixiLikeElem.setAttribute('data-width', "");
			
			parentElem.appendChild(mixiLikeElem);

			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.async = true;
					js.src = "//static.mixi.jp/js/plugins.js#lang="+navigator.language;
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document, 'script', 'mixi-like-js');
		}
	},
	{
		id: 'evn',
		setup: function(parentElem, url, title, pageParams) {
			/*
			<script type="text/javascript" src="http://static.evernote.com/noteit.js"></script>
			<a href="#"
				onclick="Evernote.doClip({contentId:'page_reader'}); return false;">
				<img src="http://static.evernote.com/article-clipper.png" alt="Clip to Evernote" />
			</a>
			*/
			
			var evnLink = DCE('a');
			evnLink.addClass('evn-link');
			evnLink.setAttribute('onclick', "Evernote.doClip({contentId:'"+pageParams.contentId+"'}); return false;");
			
			var evnImg = DCE('img');
			evnImg.setAttribute('src', 'http://static.evernote.com/article-clipper.png');
			evnImg.setAttribute('alt', 'Clip to Evernote');
			
			evnLink.appendChild(evnImg);
			
			parentElem.appendChild(evnLink);
			
			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src = "//static.evernote.com/noteit.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document, 'script', 'evernote-noteit');
		}
	},
	{
		id: 'tmblr',
		setup : function(parentElem, url, title, pageParams) {
			/*
				<script type="text/javascript" src="http://platform.tumblr.com/v1/share.js"></script>
			*/

			var tmblrLink = DCE('a');
			tmblrLink.addClass('tmblr-link');
			tmblrLink.setAttribute('href', "http://www.tumblr.com/share/link?url=" + encodeURIComponent(url) + "&name=" + encodeURIComponent(title) + "&description=");
			tmblrLink.setAttribute("title", "Share on Tumblr");
			tmblrLink.setAttribute("style", "display:inline-block; text-indent:-9999px; overflow:hidden; width:81px; height:20px; background:url('http://platform.tumblr.com/v1/share_1.png') top left no-repeat transparent;");
			tmblrLink.innerHTML = "Share on Tumblr";

			parentElem.appendChild(tmblrLink);

			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src = "//platform.tumblr.com/v1/share.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document, 'script', 'tmblr-share-js');

		},
	},
	{
		id: 'lkin',
		setup : function(parentElem, url, title, pageParams) {
			/*
				<script src="http://platform.linkedin.com/in.js" type="text/javascript"></script>
				<script type="IN/Share" data-counter="right"></script>
			*/

			var lkinScript = DCE('script');
			lkinScript.addClass('lkin-script');
			lkinScript.setAttribute('type', 'IN/Share');
			lkinScript.setAttribute('data-counter', 'right');
			lkinScript.setAttribute('data-url', url);

			parentElem.appendChild(lkinScript);
			
			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src = "//platform.linkedin.com/in.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document, 'script', 'lkin-js');
		},
	},
	{
		id: 'digg',
		setup : function(parentElem, url, title, pageParams) {
			/*
				<script type="text/javascript">
				(function() {
				var s = document.createElement('SCRIPT'), s1 = document.getElementsByTagName('SCRIPT')[0];
				s.type = 'text/javascript';
				s.async = true;
				s.src = 'http://widgets.digg.com/buttons.js';
				s1.parentNode.insertBefore(s, s1);
				})();
				</script>

				<a class="DiggThisButton DiggCompact"></a>
			*/

			var diggLink = DCE('a');
			diggLink.addClass('digg-link');
			diggLink.classList.add('DiggThisButton');
			diggLink.classList.add('DiggCompact');
			diggLink.setAttribute('href', "http://digg.com/submit?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title));

			parentElem.appendChild(diggLink);

			(function(d,s,id){
				var se = d.getElementById(id);
				if (se) {
					se.parentNode.removeChild(se);
				}

				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src = "//widgets.digg.com/buttons.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document, 'script', 'digg-buttons-js');

		},
	},
	{
		id: 'dlcs',
		setup : function(parentElem, url, title, pageParams) {
			/*
				<img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" />
		        <a href="http://www.delicious.com/save" onclick="window.open('http://www.delicious.com/save?v=5&noui&jump=close&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title), 'delicious','toolbar=no,width=550,height=550'); return false;"> Save this on Delicious</a>
			*/
			
			var dlcsImg = DCE('img')
			dlcsImg.addClass('dlcs-img');
			dlcsImg.setAttribute('src', '//www.delicious.com/static/img/delicious.gif');
			dlcsImg.setAttribute('height', '18');
			dlcsImg.setAttribute('width', '18');
			dlcsImg.setAttribute('alt', 'Delicious');

			var dlcsLink = DCE('a')
			dlcsLink.addClass('dlcs-link');
			//dlcsLink.setAttribute('href', 'http://www.delicious.com/save');
			dlcsLink.setAttribute('onclick', "window.open('http://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent(url)+"&title="+encodeURIComponent(title)+"', 'delicious','toolbar=no,width=550,height=550'); return false;");
			dlcsLink.appendChild(dlcsImg);

			parentElem.appendChild(dlcsLink);
		},
	},
	{
		id: 'hbm',
		HBM_ENTRY_URL : 'http://b.hatena.ne.jp/entry/',
		HBM_ADD_URL : 'http://b.hatena.ne.jp/entry/add/',
		HBM_IMAGEL_URL : 'http://b.hatena.ne.jp/entry/image/large/',
		HBM_IMAGEM_URL : 'http://b.hatena.ne.jp/entry/image/',
		HBM_IMAGES_URL : 'http://b.hatena.ne.jp/entry/image/small/',
		setup : function(parentElem, url, title, pageParams) {
			var hbmEntryUrl = this.HBM_ENTRY_URL + url;
			var hbmImageUrl = this.HBM_IMAGES_URL + url;
			var hbmAddUrl = this.HBM_ADD_URL + url;
	
			var hbmEntryLink = DCE('a');
			hbmEntryLink.addClass('hbm-entry-link');
			hbmEntryLink.setAttribute('target', '_blank');
			hbmEntryLink.setAttribute('href', hbmEntryUrl);
			
			var hbmEntryImg = DCE('img');
			hbmEntryImg.setAttribute('src', hbmImageUrl);
			
			var hbmAddLink = DCE('a');
			hbmAddLink.addClass('hbm-add-link');
			hbmAddLink.setAttribute('target', '_blank');
			hbmAddLink.setAttribute('href', hbmAddUrl);
			
			var hbmAddImg = DCE('img');
			
			hbmEntryLink.appendChild(hbmEntryImg);
			hbmAddLink.appendChild(hbmAddImg);
			
			parentElem.appendChild(hbmEntryLink);
			parentElem.appendChild(hbmAddLink);
		},
	},
	{
		id: 'hbm2',
		setup: function(parentElem, url, title, pageParams) {
			/*
				<a
					href="http://b.hatena.ne.jp/entry/http://creazy.net/2010/09/howto_setup_social_media_button.html"
					class="hatena-bookmark-button"
					data-hatena-bookmark-title="SiteTitle"
					data-hatena-bookmark-layout="standard"
					title="このエントリーをはてなブックマークに追加">
						<img
							src="http://b.st-hatena.com/images/entry-button/button-only.gif"
							alt="このエントリーをはてなブックマークに追加"
							width="20"
							height="20"
							style="border: none;" />
				</a>
				<script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
			*/
			var hbmLink = DCE('a');
			hbmLink.addClass('hbm2-link');
			hbmLink.classList.add('hatena-bookmark-button');
			hbmLink.setAttribute('href', 'http://b.hatena.ne.jp/entry/'+url);
			hbmLink.setAttribute('data-hatena-bookmark-title', title);
			hbmLink.setAttribute('data-hatena-bookmark-layout', 'standard');
			hbmLink.setAttribute('title', 'Add this entry to Hatena Bookmark');
			
			var hbmImg = DCE('img');
			hbmImg.setAttribute('src', 'http://b.st-hatena.com/images/entry-button/button-only.gif');
			hbmImg.setAttribute('alt', 'Add this entry to Hatena Bookmark');
			hbmImg.setAttribute('width', '20');
			hbmImg.setAttribute('height', '20');
			hbmImg.style.border = 'none';
			
			hbmLink.appendChild(hbmImg);
			
			parentElem.appendChild(hbmLink);
			
			var scriptElem = DCE('script');
			scriptElem.src = '//b.st-hatena.com/js/bookmark_button.js';
			scriptElem.setAttribute('charset', 'utf-8');
			scriptElem.setAttribute('async', 'async');
			parentElem.appendChild(scriptElem);
		},
	},
	{
		id: 'yjbm',
		setup : function(parentElem, url, title, pageParams) {
			/*
			<a href="javascript:void window.open('http://bookmarks.yahoo.co.jp/bookmarklet/showpopup?t='+encodeURIComponent(document.title)+'&amp;u='+encodeURIComponent(location.href)+'&amp;ei=UTF-8','_blank','width=550,height=480,left=100,top=50,scrollbars=1,resizable=1',0);"><img src="http://i.yimg.jp/images/ybm/blogparts/addmy_btn.gif" width="125" height="17" alt="Yahoo!ブックマークに登録" style="border:none;"></a>
			*/
			var yjbmLink = DCE('a');
			yjbmLink.addClass('yjbm-link');
			yjbmLink.setAttribute('href', "javascript:void window.open('http://bookmarks.yahoo.co.jp/bookmarklet/showpopup?t="+encodeURIComponent(title)+"&amp;u="+encodeURIComponent(url)+"&amp;ei=UTF-8','_blank','width=550,height=480,left=100,top=50,scrollbars=1,resizable=1',0);");
			
			var yjbmImg = DCE('img');
			yjbmImg.setAttribute('src', 'http://i.yimg.jp/images/ybm/blogparts/addmy_btn.gif');
			yjbmImg.setAttribute('width', '125');
			yjbmImg.setAttribute('height', '17');
			yjbmImg.setAttribute('alt', 'Yahoo!ブックマークに登録');
			yjbmImg.setAttribute('style', 'border: none;');
			
			yjbmLink.appendChild(yjbmImg);
			
			parentElem.appendChild(yjbmLink);

		},
	},
	{
		id: 'ldclip',
		setup : function(parentElem, url, title, pageParams) {
			/*
				<a href="http://clip.livedoor.com/redirect?link=<$ArticlePermalink$>&title=<$BlogTitle URIESCAPE$>%20-%20<$ArticleTitle URIESCAPE$>&ie=<$BlogCharset$>" class="ldclip-redirect" title="この記事をクリップ！"><img src="http://parts.blog.livedoor.jp/img/cmn/clip_16_16_w.gif" width="16" height="16" alt="この記事をクリップ！" style="border: none;vertical-align: middle;" /></a>
			*/

			var ldclipLink = DCE('a');
			ldclipLink.addClass('ldclip-link');
			ldclipLink.setAttribute('href', "http://clip.livedoor.com/redirect?link="+encodeURIComponent(url)+"&title="+encodeURIComponent(title)+"&ie=UTF-8");
			ldclipLink.setAttribute('target', '_blank');

			var ldclipImg = DCE('img');
			ldclipImg.setAttribute('src', 'http://parts.blog.livedoor.jp/img/cmn/clip_16_16_w.gif');
			ldclipImg.setAttribute('width', '16');
			ldclipImg.setAttribute('height', '16');
			ldclipImg.setAttribute('alt', 'この記事をクリップ！');
			ldclipImg.setAttribute('style', 'border: none;vertical-align: middle;');
			
			ldclipLink.appendChild(ldclipImg);
			
			parentElem.appendChild(ldclipLink);
		},
	},
];
