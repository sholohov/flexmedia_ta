(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
	"cards": [{
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, design, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "photography, animations",
		"filter": "all, design, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, illustration",
		"filter": "all, brochures, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "brochures, photography",
		"filter": "all, design, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, design",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, photography",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, illustrations, brochures",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, brochures, design",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, design, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "photography, animations",
		"filter": "all, design, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, illustration",
		"filter": "all, brochures, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "brochures, photography",
		"filter": "all, design, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, design",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, photography",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, illustrations, brochures",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, wallpapers",
		"link": "http://google.com"

	}, {
		"img": "https://placeimg.com/810/622/any",
		"title": "Cool app design",
		"descr": "design, animations",
		"filter": "all, brochures, design",
		"link": "http://google.com"

	}]
}
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var Cards = function () {
	function Cards() {
		_classCallCheck(this, Cards);
	}

	_createClass(Cards, null, [{
		key: "dataSet",
		value: function dataSet(data) {
			var listElem = document.querySelector("#portfolio");

			function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			listElem.innerHTML = data.map(function (item, index) {
				return "<li class=\"item\" data-category=\"" + item.filter + "\">\n\t\t\t\t\t<figure class=\"pic\" style=\"background-image:url(" + item.img + "?" + index + ")\"></figure>\n\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t<h3 class=\"title\">" + item.title + "</h3>\n\t\t\t\t\t\t<div class=\"description\">" + item.descr + "</div>\n\t\t\t\t\t\t<a class=\"link icon-right-big\" href=\"" + item.link + "\" title=\"" + item.link + "\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>";
			}).join('');
		}
	}]);

	return Cards;
}();

exports.default = Cards;

},{}],3:[function(require,module,exports){
'use strict';

require('./libs/polyfils');

var _cards = require('../data/cards');

var _cards2 = _interopRequireDefault(_cards);

var _Card = require('./components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Filter = require('./logic/Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _NavBtn = require('./logic/NavBtn');

var _NavBtn2 = _interopRequireDefault(_NavBtn);

var _ThemeTuning = require('./logic/ThemeTuning');

var _ThemeTuning2 = _interopRequireDefault(_ThemeTuning);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

console.warn("Hello people!");

// import * as Tools from './tools'


document.addEventListener("DOMContentLoaded", function () {
	_Card2.default.dataSet(_cards2.default.cards);
	_Filter2.default.dataSet(_cards2.default.cards);
	_NavBtn2.default.init();
	_ThemeTuning2.default.init();
});

},{"../data/cards":1,"./components/Card":2,"./libs/polyfils":4,"./logic/Filter":5,"./logic/NavBtn":6,"./logic/ThemeTuning":7}],4:[function(require,module,exports){
"use strict";

if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
		    i = matches.length;
		while (--i >= 0 && matches.item(i) !== this) {}
		return i > -1;
	};
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

/**
 * Filter portfolio list
 */
var Filter = function () {
	function Filter() {
		_classCallCheck(this, Filter);
	}

	_createClass(Filter, null, [{
		key: 'dataSet',
		value: function dataSet(data) {
			var filterEl = document.querySelector('#filter');
			var filterItemsEl = document.querySelectorAll('#filter .link');

			function deactivateItems() {
				for (var i = 0; i < filterItemsEl.length; i++) {
					filterItemsEl[i].classList.remove('active');
				}
			}

			filterEl.addEventListener('click', function (ev) {
				var _t = ev.target;

				while (_t && _t != filter) {
					if (_t.matches('.link')) {
						var newArr;

						(function () {
							var keyWord = _t.dataset.keyword;
							newArr = data.filter(function (item) {
								return ~item.filter.indexOf(keyWord);
							});

							deactivateItems();
							_t.classList.add('active');
							_Card2.default.dataSet(newArr);
						})();
					}
					if (_t) {
						_t = _t.parentElement;
					}
				}
			});
		}
	}]);

	return Filter;
}();

exports.default = Filter;

},{"../components/Card":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var NavBtn = function () {
	function NavBtn() {
		_classCallCheck(this, NavBtn);
	}

	_createClass(NavBtn, null, [{
		key: 'init',
		value: function init() {
			var navBtnElem = document.querySelector('#nav-btn');
			var asideLeftElem = document.querySelector('#aside-left');

			navBtnElem.addEventListener('click', function () {
				var isActive = navBtnElem.classList.toggle('active');
				asideLeftElem.classList[isActive ? 'add' : 'remove']('open');
			});
		}
	}]);

	return NavBtn;
}();

exports.default = NavBtn;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var ThemeTuning = function () {
	function ThemeTuning() {
		_classCallCheck(this, ThemeTuning);
	}

	_createClass(ThemeTuning, null, [{
		key: 'init',
		value: function init() {
			var range = document.querySelector('#theme-tuning .range');
			var btn = document.querySelector('#theme-tuning .tuning-btn');

			btn.addEventListener('click', function () {
				var isActive = btn.classList.toggle('active');
				range.classList[isActive ? 'add' : 'remove']('active');
			});
		}
	}]);

	return ThemeTuning;
}();

exports.default = ThemeTuning;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS9jYXJkcy5qc29uIiwic3JjL2pzL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy9saWJzL3BvbHlmaWxzLmpzIiwic3JjL2pzL2xvZ2ljL0ZpbHRlci5qcyIsInNyYy9qcy9sb2dpYy9OYXZCdG4uanMiLCJzcmMvanMvbG9naWMvVGhlbWVUdW5pbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7Ozs7SUNBQSxjOzs7Ozs7O3lCQUNOO0FBQ2IsT0FBTSxRQUFRLFNBQUEsYUFBQSxDQUFkLHNCQUFjLENBQWQ7QUFDQSxPQUFNLE1BQU0sU0FBQSxhQUFBLENBQVosMkJBQVksQ0FBWjs7QUFFQSxPQUFBLGdCQUFBLENBQUEsT0FBQSxFQUE4QixZQUFNO0FBQ25DLFFBQUksV0FBVyxJQUFBLFNBQUEsQ0FBQSxNQUFBLENBQWYsUUFBZSxDQUFmO0FBQ0EsVUFBQSxTQUFBLENBQWdCLFdBQUEsS0FBQSxHQUFoQixRQUFBLEVBQUEsUUFBQTtBQUZELElBQUE7QUFJQTs7Ozs7O2tCQVRtQixXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwiY2FyZHNcIjogW3tcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcInBob3RvZ3JhcGh5LCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGlsbHVzdHJhdGlvblwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiYnJvY2h1cmVzLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgaWxsdXN0cmF0aW9ucywgYnJvY2h1cmVzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJwaG90b2dyYXBoeSwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBpbGx1c3RyYXRpb25cIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImJyb2NodXJlcywgcGhvdG9ncmFwaHlcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgcGhvdG9ncmFwaHlcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGlsbHVzdHJhdGlvbnMsIGJyb2NodXJlc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbFwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgYnJvY2h1cmVzLCBkZXNpZ25cIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fV1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRzIHtcclxuXHRzdGF0aWMgZGF0YVNldChkYXRhKSB7XHJcblx0XHRjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9ydGZvbGlvXCIpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHRcdH1cclxuXHJcblx0XHRsaXN0RWxlbS5pbm5lckhUTUwgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRgPGxpIGNsYXNzPVwiaXRlbVwiIGRhdGEtY2F0ZWdvcnk9XCIke2l0ZW0uZmlsdGVyfVwiPlxyXG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzcz1cInBpY1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtpdGVtLmltZ30/JHtpbmRleH0pXCI+PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3J9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibGluayBpY29uLXJpZ2h0LWJpZ1wiIGhyZWY9XCIke2l0ZW0ubGlua31cIiB0aXRsZT1cIiR7aXRlbS5saW5rfVwiPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59IiwiY29uc29sZS53YXJuKFwiSGVsbG8gcGVvcGxlIVwiKTtcclxuXHJcbi8vIGltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4vdG9vbHMnXHJcbmltcG9ydCAnLi9saWJzL3BvbHlmaWxzJztcclxuaW1wb3J0IGNhcmREYXRhIGZyb20gJy4uL2RhdGEvY2FyZHMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9sb2dpYy9GaWx0ZXInO1xyXG5pbXBvcnQgTmF2QnRuIGZyb20gJy4vbG9naWMvTmF2QnRuJztcclxuaW1wb3J0IFRoZW1lVHVuaW5nIGZyb20gJy4vbG9naWMvVGhlbWVUdW5pbmcnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cdENhcmQuZGF0YVNldChjYXJkRGF0YS5jYXJkcyk7XHJcblx0RmlsdGVyLmRhdGFTZXQoY2FyZERhdGEuY2FyZHMpO1xyXG5cdE5hdkJ0bi5pbml0KCk7XHJcblx0VGhlbWVUdW5pbmcuaW5pdCgpO1xyXG59KTsiLCJpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcclxuXHRFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cclxuXHRcdEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fFxyXG5cdFx0RWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XHJcblx0XHRFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxyXG5cdFx0RWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxyXG5cdFx0RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XHJcblx0XHRmdW5jdGlvbihzKSB7XHJcblx0XHRcdHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxyXG5cdFx0XHRcdGkgPSBtYXRjaGVzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge31cclxuXHRcdFx0cmV0dXJuIGkgPiAtMTtcclxuXHRcdH07XHJcbn0iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xyXG5cclxuLyoqXHJcbiAqIEZpbHRlciBwb3J0Zm9saW8gbGlzdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcclxuXHRzdGF0aWMgZGF0YVNldChkYXRhKSB7XHJcblx0XHRjb25zdCBmaWx0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXInKTtcclxuXHRcdGNvbnN0IGZpbHRlckl0ZW1zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZmlsdGVyIC5saW5rJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGVhY3RpdmF0ZUl0ZW1zKCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckl0ZW1zRWwubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRmaWx0ZXJJdGVtc0VsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZpbHRlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcblx0XHRcdGxldCBfdCA9IGV2LnRhcmdldDtcclxuXHRcdFx0XHJcblx0XHRcdHdoaWxlIChfdCAmJiBfdCAhPSBmaWx0ZXIpIHtcclxuXHRcdFx0XHRpZiAoX3QubWF0Y2hlcygnLmxpbmsnKSkge1xyXG5cdFx0XHRcdFx0bGV0IGtleVdvcmQgPSBfdC5kYXRhc2V0LmtleXdvcmQ7XHJcblx0XHRcdFx0XHR2YXIgbmV3QXJyID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIH5pdGVtLmZpbHRlci5pbmRleE9mKGtleVdvcmQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRkZWFjdGl2YXRlSXRlbXMoKTtcclxuXHRcdFx0XHRcdF90LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0Q2FyZC5kYXRhU2V0KG5ld0Fycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChfdCkge1xyXG5cdFx0XHRcdFx0X3QgPSBfdC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnRuIHtcclxuXHRzdGF0aWMgaW5pdCgpIHtcclxuXHRcdGNvbnN0IG5hdkJ0bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWJ0bicpO1xyXG5cdFx0Y29uc3QgYXNpZGVMZWZ0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2lkZS1sZWZ0Jyk7XHJcblxyXG5cdFx0bmF2QnRuRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlzQWN0aXZlID0gbmF2QnRuRWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0YXNpZGVMZWZ0RWxlbS5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVUdW5pbmcge1xyXG5cdHN0YXRpYyBpbml0KCkge1xyXG5cdFx0Y29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nIC5yYW5nZScpO1xyXG5cdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZyAudHVuaW5nLWJ0bicpO1xyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlzQWN0aXZlID0gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRyYW5nZS5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=
