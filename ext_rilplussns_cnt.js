if (!jQuery) {
	throw new Error('jQuery is not found.');
}

var RIL_URL_PREFIX = 'http://readitlaterlist.com/a';
var HBM_ENTRY_URL = 'http://b.hatena.ne.jp/entry/';
var HBM_ADD_URL = 'http://b.hatena.ne.jp/entry/add/';
var HBM_IMAGEL_URL = 'http://b.hatena.ne.jp/entry/image/large/';
var HBM_IMAGEM_URL = 'http://b.hatena.ne.jp/entry/image/';
var HBM_IMAGES_URL = 'http://b.hatena.ne.jp/entry/image/small/';

var QS = function() {
	if (arguments.length < 1) throw new Error('Not enough arguments');
	var dom = arguments[0];
	var args = null;
	if (dom && dom.querySelector) {
		args = Array.prototype.slice.call(arguments, 1);
		if (args.length < 1) throw new Error('Not enough arguments');
	} else {
		dom = document;
		args = arguments;
	}
	return dom.querySelector.apply(dom, args);
}
var QSA = function() {
	if (arguments.length < 1) throw new Error('Not enough arguments');
	var dom = arguments[0];
	var args = null;
	if (dom && dom.querySelectorAll) {
		args = Array.prototype.slice.call(arguments, 1);
		if (args.length < 1) throw new Error('Not enough arguments');
	} else {
		dom = document;
		args = arguments;
	}
	return Array.prototype.slice.call(dom.querySelectorAll.apply(dom, args), 0);
}

var settingList = [
	{
		targetSelector: 'div.reader_head li.original > a:first-child',
		_monitorSelector: 'div.text_body > *:first-child',
		type: 'jquery',
	},
	{
		targetSelector: 'ul#queue > li.item a.link[href^="http"]',
		_monitorSelector: 'ul#queue > li.info',
		type: 'jquery',
	},
];

settingList.forEach(function(setting) {
	if (setting.type === 'jquery') {
		(function(){
			var timestampProcessed = 0;
			var nodefound = false;
			document.addEventListener('DOMNodeInserted', function(e){
				var _noticeChanged = function() {
					console.log('QSA(setting.targetSelector).length:' + QSA(setting.targetSelector).length);
		
					QSA(setting.targetSelector).forEach(function(targetElem) {

						var url = targetElem.href;
						var hbmEntryUrl = HBM_ENTRY_URL + url;
		
						var containerElem = targetElem.nextSibling;
		
						var needUpdate = false;
						if (!containerElem  || !containerElem.classList || !containerElem.classList.contains('rilplussns-container')) {
							containerElem = document.createElement('div');
							containerElem.classList.add('rilplussns-element');
							containerElem.classList.add('rilplussns-container');
							targetElem.parentNode.insertBefore(containerElem, targetElem.nextSibling);
							needUpdate = true;
						} else {
							var oldHbmEntryUrl = QS(containerElem, 'a.rilplussns-hbm-entry-link').href;
							if (hbmEntryUrl !== oldHbmEntryUrl) {
								needUpdate = true;
							} else {
								var oldTimestampUpdated = Number(containerElem.getAttribute('data-rilplussns-timestamp-updated'));
								if (nowTimestamp - oldTimestampUpdated > 10 * 1000) {
									needUpdate = true;
								}
							}
						}
		
						if (needUpdate) {
							var hbmImageUrl = HBM_IMAGES_URL + url;
							var hbmAddUrl = HBM_ADD_URL + url;
		
							console.log('[DOMNodeInserted]['+ setting.monitorSelector +']', e.target.constructor.name);
							
							Array.prototype.slice.call(containerElem.childNodes, 0).forEach(function(cn) {
								containerElem.removeChild(cn);
							});
							containerElem.setAttribute('data-rilplussns-timestamp-updated', nowTimestamp);
							
							var hbmEntryLink = document.createElement('a');
							hbmEntryLink.classList.add('rilplussns-element');
							hbmEntryLink.classList.add('rilplussns-hbm-entry-link');
							hbmEntryLink.setAttribute('target', '_blank');
							hbmEntryLink.setAttribute('href', hbmEntryUrl);
							
							var hbmEntryImg = document.createElement('img');
							hbmEntryImg.classList.add('rilplussns-element');
							hbmEntryImg.setAttribute('src', hbmImageUrl);
							
							var hbmAddLink = document.createElement('a');
							hbmAddLink.classList.add('rilplussns-element');
							hbmAddLink.classList.add('rilplussns-hbm-add-link');
							hbmAddLink.setAttribute('target', '_blank');
							hbmAddLink.setAttribute('href', hbmAddUrl);
							
							var hbmAddImg = document.createElement('img');
							hbmAddImg.classList.add('rilplussns-element');
							
							hbmEntryLink.appendChild(hbmEntryImg);
							hbmAddLink.appendChild(hbmAddImg);
							
							containerElem.appendChild(hbmEntryLink);
							containerElem.appendChild(hbmAddLink);
						}
					});
					return true; // ok
				};//_noticeChanged

				var oldTimestamp = timestampProcessed;
				var nowTimestamp = Date.now();
				timestampProcessed = nowTimestamp;
				if (nowTimestamp - oldTimestamp < 50 && nodefound) {
					return;
				} else {
					nodefound = false;
				}

				var monitorElems = QSA(setting._monitorSelector);
				for (var i in monitorElems) {
					if (e.target == monitorElems[i]) {
						var modifiedElement = e.target;
						if (modifiedElement.nodeType == Node.ELEMENT_NODE
						 && modifiedElement.classList.contains('rilplussns-element')) {
							break;
						} else if (modifiedElement.nodeType = Node.TEXT_NODE
						        && modifiedElement.parentNode
						        && modifiedElement.classList
						        && modifiedElement.classList.contains('rilplussns-element')) {
							break;
						}

						console.log('Found same elements: ' + setting._monitorSelector);
						nodefound = _noticeChanged();;
						
						break;
					}
				}
			});
		})();

/*

		var timestampProcessed = 0;
		$(document).on('DOMNodeInserted', setting.monitorSelector, function(e){
			var oldTimestamp = timestampProcessed;
			var nowTimestamp = Date.now();
			timestampProcessed = nowTimestamp;
			if (nowTimestamp - oldTimestamp < 50) return;
			
			var modifiedElement = e.originalEvent.target;
			if (modifiedElement.nodeType == Node.ELEMENT_NODE
			 && modifiedElement.classList.contains('rilplussns-element')) {
				return;
			} else if (modifiedElement.nodeType = Node.TEXT_NODE
			        && modifiedElement.parentNode
			        && modifiedElement.classList
			        && modifiedElement.classList.contains('rilplussns-element')) {
				return;
			}

			QSA(setting.targetSelector).forEach(function(targetElem) {

				var url = targetElem.href;
				var hbmEntryUrl = HBM_ENTRY_URL + url;

				var containerElem = targetElem.nextSibling;

				var needUpdate = false;
				if (!containerElem  || !containerElem.classList || !containerElem.classList.contains('rilplussns-container')) {
					containerElem = document.createElement('div');
					containerElem.classList.add('rilplussns-element');
					containerElem.classList.add('rilplussns-container');
					targetElem.parentNode.insertBefore(containerElem, targetElem.nextSibling);
					needUpdate = true;
				} else {
					var oldHbmEntryUrl = QS(containerElem, 'a.rilplussns-hbm-entry-link').href;
					if (hbmEntryUrl !== oldHbmEntryUrl) {
						needUpdate = true;
					} else {
						var oldTimestampUpdated = Number(containerElem.getAttribute('data-rilplussns-timestamp-updated'));
						if (nowTimestamp - oldTimestampUpdated > 10 * 1000) {
							needUpdate = true;
						}
					}
				}

				if (needUpdate) {
					var hbmImageUrl = HBM_IMAGES_URL + url;
					var hbmAddUrl = HBM_ADD_URL + url;

					console.log('[DOMNodeInserted]['+ setting.monitorSelector +']', e.target.constructor.name);
					
					Array.prototype.slice.call(containerElem.childNodes, 0).forEach(function(cn) {
						containerElem.removeChild(cn);
					});
					containerElem.setAttribute('data-rilplussns-timestamp-updated', nowTimestamp);
					
					var hbmEntryLink = document.createElement('a');
					hbmEntryLink.classList.add('rilplussns-element');
					hbmEntryLink.classList.add('rilplussns-hbm-entry-link');
					hbmEntryLink.setAttribute('target', '_blank');
					hbmEntryLink.setAttribute('href', hbmEntryUrl);
					
					var hbmEntryImg = document.createElement('img');
					hbmEntryImg.classList.add('rilplussns-element');
					hbmEntryImg.setAttribute('src', hbmImageUrl);
					
					var hbmAddLink = document.createElement('a');
					hbmAddLink.classList.add('rilplussns-element');
					hbmAddLink.classList.add('rilplussns-hbm-add-link');
					hbmAddLink.setAttribute('target', '_blank');
					hbmAddLink.setAttribute('href', hbmAddUrl);
					
					var hbmAddImg = document.createElement('img');
					hbmAddImg.classList.add('rilplussns-element');
					
					hbmEntryLink.appendChild(hbmEntryImg);
					hbmAddLink.appendChild(hbmAddImg);
					
					containerElem.appendChild(hbmEntryLink);
					containerElem.appendChild(hbmAddLink);

				}
			});
		});
*/
	} else if (setting.type == 'dom') {
		$(document).on('DOMSubtreeModified', setting.selector , function(e){
			var e = e.originalEvent;
			console.log('[DOMSubtreeModified]['+ setting.selector +']', e.target.constructor.name);
		});
	}
});
