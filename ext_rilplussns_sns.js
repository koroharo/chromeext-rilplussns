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
		setup: function(parentElem, url, title, pagePrams) {
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
		id: 'evn',
		setup: function(parentElem, url, title, pagePrams) {
			/*
			<script type="text/javascript" src="http://static.evernote.com/noteit.js"></script>
			<a href="#"
				onclick="Evernote.doClip({contentId:'page_reader'}); return false;">
				<img src="http://static.evernote.com/article-clipper.png" alt="Clip to Evernote" />
			</a>
			*/
			
			var evnLink = DCE('a');
			evnLink.addClass('evn-link');
			evnLink.setAttribute('onclick', "Evernote.doClip({contentId:'"+pagePrams.contentId+"'}); return false;");
			
			var evnImg = DCE('img');
			evnImg.setAttribute('src', 'http://static.evernote.com/article-clipper.png');
			evnImg.setAttribute('alt', 'Clip to Evernote');
			
			evnLink.appendChild(evnImg);
			
			parentElem.appendChild(evnLink);
			
			(function(d,s,id){
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
		id: 'hbm',
		HBM_ENTRY_URL : 'http://b.hatena.ne.jp/entry/',
		HBM_ADD_URL : 'http://b.hatena.ne.jp/entry/add/',
		HBM_IMAGEL_URL : 'http://b.hatena.ne.jp/entry/image/large/',
		HBM_IMAGEM_URL : 'http://b.hatena.ne.jp/entry/image/',
		HBM_IMAGES_URL : 'http://b.hatena.ne.jp/entry/image/small/',
		setup : function(parentElem, url, title, pagePrams) {
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
		setup: function(parentElem, url, title, pagePrams) {
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
];
