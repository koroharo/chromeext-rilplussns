var extoption = {};

var OptionBase = function(name, defaultValue) {
	var self = this;
	self.name = name;
	self.defaultValue = defaultValue;
	self.serialize   = function(jsvalue){ return jsvalue; };
	self.deserialize = function(textvalue){ return textvalue; };
	self.write = function(value){
		if (value !== undefined || value === null) {
			return localStorage.setItem(self.name, self.serialize(value));
		} else {
			return undefined;
		}
	};
	self.read  = function(){
		var textvalue = localStorage.getItem(self.name);
		if (textvalue === undefined || textvalue === null || textvalue === '') {
			return self.defaultValue;
		} else {
			return self.deserialize(textvalue);
		}
	};
};
extoption.BoolOption = function(name, defaultValue) {
	OptionBase.call(this, name, defaultValue);
	this.serialize    = function(jsvalue){ return ""+jsvalue; };
	this.deserialize  = function(textvalue){ return textvalue === 'true'; };
};
extoption.TextOption = function(name, defaultValue) {
	OptionBase.call(this, name, defaultValue);
};

extoption.define = function() {
	var optionenum = Array.prototype.slice.call(arguments, 0);
	var options = function(){
		return optionenum.slice(0);;
	};
	for (var i in optionenum) {
		options[arguments[i].name] = arguments[i];
	}
	return options;
};

extoption.load = function(options) {
	var optionPanes = document.querySelectorAll('.option-pane');
	function writeOption(option, block) {
		return function() {
			var optionPane = document.querySelector('#'+option.name+'.option-pane');
			var messageDialog = document.createElement('div');
			messageDialog.className = 'message-dialog';
			optionPane.appendChild(messageDialog);
			try {
				block.call(this, option);
				messageDialog.className = 'message-dialog success';
			} catch(e) {
				messageDialog.className = 'message-dialog error';
			} finally {
				messageDialog.addEventListener('webkitAnimationEnd', function(){
					optionPane.removeChild(messageDialog);
				});
			}
		};
	};
	for (var i in optionPanes) {
		var optionPane = optionPanes[i];
		var option = options[optionPane.id];
		if (option instanceof extoption.BoolOption) {
			optionPane.classList.add('bool');
			var checkbox = optionPane.querySelector('.option-value input[type="checkbox"]');
			checkbox.checked = option.read();
			checkbox.addEventListener('change', writeOption(option, function(option){
				//console.log('this', this, this.checked);
				option.write(this.checked);
			}));
		} else if (option instanceof extoption.TextOption) {
			optionPane.classList.add('text');
			var textarea = optionPane.querySelector('.option-value textarea');
			textarea.value = option.read();
			textarea.addEventListener('change', writeOption(option, function(option){
				//console.log('this', this, this.value);
				option.write(this.value);
			}));
		}
	}
};









