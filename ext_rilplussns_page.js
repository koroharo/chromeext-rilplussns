var filterSnsByOptions = function(options, snsSettingList) {
	var newList = [];
	snsSettingList.forEach(function(snsSetting) {
		if (options[snsSetting.id] && options[snsSetting.id]) {
			newList.push(snsSetting);
		}
	});
	return newList;
};

var insertContainer = function(globalSnsSettingList, pageSettingList) {
	chrome.extension.sendRequest('getEnableSnsOptions', function(options){
		_insertContainer(
			filterSnsByOptions(options, globalSnsSettingList),
			pageSettingList);
	});
};

var _insertContainer = function(enableSnsSettingList, pageSettingList) {

	pageSettingList.forEach(function(pageSetting) {
		var timestampProcessed = 0;
		var nodefound = false;
		var eventType = pageSetting.useAjax ? 'DOMNodeInserted' : 'load';
		var snsSettingList = (pageSetting.sns === 'all') ? enableSnsSettingList
		               : pageSetting.sns instanceof Array ? enableSnsSettingList.filter(function(snsSetting) {
		                 	return pageSetting.sns.indexOf(snsSetting.id) > -1;
		                 })
		               : [];
		pageSetting.snsParams = pageSetting.snsParams ? pageSetting.snsParams : {};

		(pageSetting.useAjax ? document : window).addEventListener(eventType, function(e){
			var _noticeChanged = function() {
				//console.log('QSA(pageSetting.targetSelector).length:' + QSA(pageSetting.targetSelector).length);

				QSA(pageSetting.targetSelector.container).forEach(function(targetContainerElem) {
					var targetLinkElem = pageSetting.targetSelector.link
					            ? QS(targetContainerElem, pageSetting.targetSelector.link)
					            : targetContainerElem;
					var url = targetLinkElem.href;
					if (!url) return false;

					var title = pageSetting.targetSelector.title
					            ? QS(targetContainerElem, pageSetting.targetSelector.title).innerHTML
					            : targetContainerElem.innerHTML;

					var targetElem = pageSetting.targetSelector.inject
					            ? QS(targetContainerElem, pageSetting.targetSelector.inject)
					            : targetLinkElem;

					var containerElem = targetElem.nextSibling;

					var needUpdate = false;
					if (!containerElem  || !containerElem.classList || !containerElem.classList.contains('rilplussns-container')) {
						containerElem = DCE('div');
						containerElem.addClass(
						    'container',
						    'container-'+pageSetting.id);
						var iconElem = DCE('div');
						iconElem.addClass('icon');
						iconElem.setAttribute('alt', 'ReadItLater+SNS');
						iconElem.setAttribute('title', 'ReadItLater+SNS');
						containerElem.appendChild(iconElem);

						targetElem.parentNode.insertBefore(containerElem, targetElem.nextSibling);
						needUpdate = true;
					} else {
						var oldUrl = containerElem.getAttribute('data-rilplussns-url');
						if (url !== oldUrl) {
							needUpdate = true;
						} else {
							var oldTimestampUpdated = Number(containerElem.getAttribute('data-rilplussns-timestamp-updated'));
							if (nowTimestamp - oldTimestampUpdated > 10 * 1000) {
								needUpdate = true;
							}
						}
					}

					if (needUpdate) {
						console.log('[DOMNodeInserted]['+ pageSetting.targetSelector +']', e.target.constructor.name);

						Array.prototype.slice.call(containerElem.childNodes, 1).forEach(function(cn) {
							containerElem.removeChild(cn);
						});
						containerElem.setAttribute('data-rilplussns-url', url);
						containerElem.setAttribute('data-rilplussns-timestamp-updated', nowTimestamp);
						
						
						if (snsSettingList.length) {
							var snsListElem = DCE('ul');
							snsListElem.addClass('sns-list');

							snsSettingList.forEach(function(snsSetting) {
								var snsContainerElem = DCE('li');
								snsContainerElem.addClass(
								    'sns-container'
								    ,'sns-container-' + snsSetting.id);
			
								snsSetting.setup.apply(snsSetting,
									[snsContainerElem, url, title, pageSetting.snsParams[snsSetting.id]]);
								
								snsListElem.appendChild(snsContainerElem);
							});
							containerElem.appendChild(snsListElem);

							var clearElem = DCE('div');
							clearElem.addClass('clear');
							containerElem.appendChild(clearElem);
						} else {
							containerElem.addClass('hidden');
						}
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

			var monitorElems = (pageSetting.useAjax ? QSA(pageSetting.monitorSelector) : [document]);
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

					//console.log('Found same elements: ' + pageSetting.monitorSelector);
					nodefound = _noticeChanged();
					
					break;
				}
			}
		});
	});
};
