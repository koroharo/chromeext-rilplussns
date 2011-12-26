
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
var DCE = function(n) {
	var elem = document.createElement(n);
	elem.classList.add('rilplussns-element');
	elem.addClass = function() {
		for (var i in arguments)
			elem.classList.add('rilplussns-'+arguments[i]);
	};
	return elem;
};
