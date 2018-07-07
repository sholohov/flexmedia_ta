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
				return "<li class=\"item\" data-category=\"" + item.filter + "\" style=\"background-image:url(" + item.img + "?" + index + ")\">\n\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t<h3 class=\"title\">" + item.title + "</h3>\n\t\t\t\t\t\t<div class=\"description\">" + item.descr + "</div>\n\t\t\t\t\t\t<a class=\"link icon-right-big\" href=\"" + item.link + "\" title=\"" + item.link + "\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>";
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

window.addEventListener("load", function () {
	var preloader = document.querySelector("#preloader");
	preloader.classList.add("end");
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

var _tools = require('../tools');

var Tools = _interopRequireWildcard(_tools);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

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
			var contentElem = document.querySelector('#content');

			navBtnElem.addEventListener('click', function () {
				var isActive = navBtnElem.classList.toggle('active');
				asideLeftElem.classList[isActive ? 'add' : 'remove']('open');
			});

			/** Width vertical scrollbar */
			function getScrollbarWidth(el) {
				return el.offsetWidth - el.clientWidth;
			}

			navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';

			Tools.onWindowResize(function () {
				navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';
			}, 0);
		}
	}]);

	return NavBtn;
}();

exports.default = NavBtn;

},{"../tools":8}],7:[function(require,module,exports){
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

var _tools = require('../tools');

var Tools = _interopRequireWildcard(_tools);

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
			}
		}newObj.default = obj;return newObj;
	}
}

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
			var themeTunungElem = document.querySelector('#theme-tuning');
			var range = document.querySelector('#theme-tuning .range');
			var btn = document.querySelector('#theme-tuning .tuning-btn');
			var contentElem = document.querySelector('#content');

			btn.addEventListener('click', function () {
				var isActive = btn.classList.toggle('active');
				range.classList[isActive ? 'add' : 'remove']('active');
			});

			/** Width vertical scrollbar */
			function getScrollbarWidth(el) {
				return el.offsetWidth - el.clientWidth;
			}

			themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';

			Tools.onWindowResize(function () {
				themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';
			}, 0);
		}
	}]);

	return ThemeTuning;
}();

exports.default = ThemeTuning;

},{"../tools":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _onWindowResize = require('./onWindowResize');

Object.defineProperty(exports, 'onWindowResize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_onWindowResize).default;
  }
});

var _scrollPageToTop = require('./scrollPageToTop');

Object.defineProperty(exports, 'scrollPageToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollPageToTop).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./onWindowResize":9,"./scrollPageToTop":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Олеживает изменение размеров окна браузера и вызывает cb если привысело время указанное в duration
 * @param {function} cb каллбэк
 * @param {number} [duration=300] интервал в миллисикундах
 */
function onWindowResize(cb) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	var timeout = void 0;
	window.addEventListener('resize', function () {
		clearTimeout(timeout);
		timeout = setTimeout(cb, duration);
	});
}

exports.default = onWindowResize;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Прокрутка эоемента вверх
 * @param {Element} el Контейнер для прокрутки
 */
function scrollPageToTop(el) {
	el = el || document.documentElement;

	function getScroll() {
		return el.scrollTop;
	}

	function run() {
		if (getScroll() > 0) {
			el.scrollBy(0, -Math.max(getScroll() / 6, 1));
			requestAnimationFrame(run);
		}
	}
	run();
}
exports.default = scrollPageToTop;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS9jYXJkcy5qc29uIiwic3JjL2pzL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy9saWJzL3BvbHlmaWxzLmpzIiwic3JjL2pzL2xvZ2ljL0ZpbHRlci5qcyIsInNyYy9qcy9sb2dpYy9OYXZCdG4uanMiLCJzcmMvanMvbG9naWMvVGhlbWVUdW5pbmcuanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0Q7QUFDRDtBQUNBO2tCQUNjLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJjYXJkc1wiOiBbe1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwicGhvdG9ncmFwaHksIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgaWxsdXN0cmF0aW9uXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgYnJvY2h1cmVzLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJicm9jaHVyZXMsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ25cIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBpbGx1c3RyYXRpb25zLCBicm9jaHVyZXNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGxcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcInBob3RvZ3JhcGh5LCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGlsbHVzdHJhdGlvblwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiYnJvY2h1cmVzLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgaWxsdXN0cmF0aW9ucywgYnJvY2h1cmVzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9XVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHMge1xyXG5cdHN0YXRpYyBkYXRhU2V0KGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3J0Zm9saW9cIik7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1jYXRlZ29yeT1cIiR7aXRlbS5maWx0ZXJ9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgke2l0ZW0uaW1nfT8ke2luZGV4fSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzcz1cInRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7aXRlbS5kZXNjcn08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJsaW5rIGljb24tcmlnaHQtYmlnXCIgaHJlZj1cIiR7aXRlbS5saW5rfVwiIHRpdGxlPVwiJHtpdGVtLmxpbmt9XCI+PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9saT5gXHJcblx0XHRcdCk7XHJcblx0XHR9KS5qb2luKCcnKTtcclxuXHR9XHJcbn0iLCJjb25zb2xlLndhcm4oXCJIZWxsbyBwZW9wbGUhXCIpO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi90b29scydcclxuaW1wb3J0ICcuL2xpYnMvcG9seWZpbHMnO1xyXG5pbXBvcnQgY2FyZERhdGEgZnJvbSAnLi4vZGF0YS9jYXJkcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2xvZ2ljL0ZpbHRlcic7XHJcbmltcG9ydCBOYXZCdG4gZnJvbSAnLi9sb2dpYy9OYXZCdG4nO1xyXG5pbXBvcnQgVGhlbWVUdW5pbmcgZnJvbSAnLi9sb2dpYy9UaGVtZVR1bmluZyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0Q2FyZC5kYXRhU2V0KGNhcmREYXRhLmNhcmRzKTtcclxuXHRGaWx0ZXIuZGF0YVNldChjYXJkRGF0YS5jYXJkcyk7XHJcblx0TmF2QnRuLmluaXQoKTtcclxuXHRUaGVtZVR1bmluZy5pbml0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuXHRwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcclxufSk7IiwiaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XHJcblx0RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XHJcblx0XHRFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcclxuXHRcdEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxyXG5cdFx0RWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcclxuXHRcdEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHxcclxuXHRcdEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxyXG5cdFx0ZnVuY3Rpb24ocykge1xyXG5cdFx0XHR2YXIgbWF0Y2hlcyA9ICh0aGlzLmRvY3VtZW50IHx8IHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzKSxcclxuXHRcdFx0XHRpID0gbWF0Y2hlcy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IHRoaXMpIHt9XHJcblx0XHRcdHJldHVybiBpID4gLTE7XHJcblx0XHR9O1xyXG59IiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcG9ydGZvbGlvIGxpc3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XHJcblx0c3RhdGljIGRhdGFTZXQoZGF0YSkge1xyXG5cdFx0Y29uc3QgZmlsdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyJyk7XHJcblx0XHRjb25zdCBmaWx0ZXJJdGVtc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ZpbHRlciAubGluaycpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRlYWN0aXZhdGVJdGVtcygpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJJdGVtc0VsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZmlsdGVySXRlbXNFbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmaWx0ZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG5cdFx0XHRsZXQgX3QgPSBldi50YXJnZXQ7XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoX3QgJiYgX3QgIT0gZmlsdGVyKSB7XHJcblx0XHRcdFx0aWYgKF90Lm1hdGNoZXMoJy5saW5rJykpIHtcclxuXHRcdFx0XHRcdGxldCBrZXlXb3JkID0gX3QuZGF0YXNldC5rZXl3b3JkO1xyXG5cdFx0XHRcdFx0dmFyIG5ld0FyciA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB+aXRlbS5maWx0ZXIuaW5kZXhPZihrZXlXb3JkKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZUl0ZW1zKCk7XHJcblx0XHRcdFx0XHRfdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdENhcmQuZGF0YVNldChuZXdBcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoX3QpIHtcclxuXHRcdFx0XHRcdF90ID0gX3QucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4uL3Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ0biB7XHJcblx0c3RhdGljIGluaXQoKSB7XHJcblx0XHRjb25zdCBuYXZCdG5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1idG4nKTtcclxuXHRcdGNvbnN0IGFzaWRlTGVmdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUtbGVmdCcpO1xyXG5cdFx0Y29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuXHRcdG5hdkJ0bkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGxldCBpc0FjdGl2ZSA9IG5hdkJ0bkVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdGFzaWRlTGVmdEVsZW0uY2xhc3NMaXN0W2lzQWN0aXZlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29wZW4nKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qKiBXaWR0aCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKGVsKSB7XHJcblx0XHRcdHJldHVybiBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5hdkJ0bkVsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cclxuXHRcdFRvb2xzLm9uV2luZG93UmVzaXplKCgpID0+IHtcclxuXHRcdFx0bmF2QnRuRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblx0XHR9LCAwKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuLi90b29scydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lVHVuaW5nIHtcclxuXHRzdGF0aWMgaW5pdCgpIHtcclxuXHRcdGNvbnN0IHRoZW1lVHVudW5nRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcnKTtcclxuXHRcdGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZyAucmFuZ2UnKTtcclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcgLnR1bmluZy1idG4nKTtcclxuXHRcdGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGxldCBpc0FjdGl2ZSA9IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0cmFuZ2UuY2xhc3NMaXN0W2lzQWN0aXZlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqIFdpZHRoIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsLm9mZnNldFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhlbWVUdW51bmdFbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdHRoZW1lVHVudW5nRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblx0XHR9LCAwKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIG9uV2luZG93UmVzaXplIH0gZnJvbSAnLi9vbldpbmRvd1Jlc2l6ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Nyb2xsUGFnZVRvVG9wIH0gZnJvbSAnLi9zY3JvbGxQYWdlVG9Ub3AnOyIsIi8qKlxyXG4gKiDQntC70LXQttC40LLQsNC10YIg0LjQt9C80LXQvdC10L3QuNC1INGA0LDQt9C80LXRgNC+0LIg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsCDQuCDQstGL0LfRi9Cy0LDQtdGCIGNiINC10YHQu9C4INC/0YDQuNCy0YvRgdC10LvQviDQstGA0LXQvNGPINGD0LrQsNC30LDQvdC90L7QtSDQsiBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiDQutCw0LvQu9Cx0Y3QulxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0g0LjQvdGC0LXRgNCy0LDQuyDQsiDQvNC40LvQu9C40YHQuNC60YPQvdC00LDRhVxyXG4gKi9cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoY2IsIGR1cmF0aW9uID0gMzAwKSB7XHJcblx0bGV0IHRpbWVvdXQ7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoY2IsIGR1cmF0aW9uKTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25XaW5kb3dSZXNpemU7IiwiLyoqXHJcbiAqINCf0YDQvtC60YDRg9GC0LrQsCDRjdC+0LXQvNC10L3RgtCwINCy0LLQtdGA0YVcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbCDQmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINC/0YDQvtC60YDRg9GC0LrQuFxyXG4gKi9cclxuZnVuY3Rpb24gc2Nyb2xsUGFnZVRvVG9wKGVsKSB7XHJcblx0ZWwgPSBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcclxuXHRcdHJldHVybiBlbC5zY3JvbGxUb3A7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdGlmIChnZXRTY3JvbGwoKSA+IDApIHtcclxuXHRcdFx0ZWwuc2Nyb2xsQnkoMCwgLU1hdGgubWF4KChnZXRTY3JvbGwoKSAvIDYpLCAxKSk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRydW4oKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxQYWdlVG9Ub3A7Il19
