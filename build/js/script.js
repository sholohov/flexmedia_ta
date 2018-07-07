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
			var portfolioElem = document.querySelector('#portfolio');

			navBtnElem.addEventListener('click', function () {
				var isActive = navBtnElem.classList.toggle('active');
				asideLeftElem.classList[isActive ? 'add' : 'remove']('open');
			});

			/** Width vertical scrollbar */
			function getScrollbarWidth(el) {
				return el.offsetWidth - el.clientWidth;
			}

			navBtnElem.style.right = getScrollbarWidth(portfolioElem) + 'px';

			Tools.onWindowResize(function () {
				navBtnElem.style.right = getScrollbarWidth(portfolioElem) + 'px';
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
			var portfolioElem = document.querySelector('#portfolio');

			btn.addEventListener('click', function () {
				var isActive = btn.classList.toggle('active');
				range.classList[isActive ? 'add' : 'remove']('active');
			});

			/** Width vertical scrollbar */
			function getScrollbarWidth(el) {
				return el.offsetWidth - el.clientWidth;
			}

			themeTunungElem.style.right = getScrollbarWidth(portfolioElem) + 'px';

			Tools.onWindowResize(function () {
				themeTunungElem.style.right = getScrollbarWidth(portfolioElem) + 'px';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS9jYXJkcy5qc29uIiwic3JjL2pzL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNyYy9qcy9pbmRleC5qcyIsInNyYy9qcy9saWJzL3BvbHlmaWxzLmpzIiwic3JjL2pzL2xvZ2ljL0ZpbHRlci5qcyIsInNyYy9qcy9sb2dpYy9OYXZCdG4uanMiLCJzcmMvanMvbG9naWMvVGhlbWVUdW5pbmcuanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNEO0FBQ0Q7QUFDQTtrQkFDYyxlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwiY2FyZHNcIjogW3tcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcInBob3RvZ3JhcGh5LCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGlsbHVzdHJhdGlvblwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiYnJvY2h1cmVzLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgaWxsdXN0cmF0aW9ucywgYnJvY2h1cmVzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJwaG90b2dyYXBoeSwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBpbGx1c3RyYXRpb25cIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImJyb2NodXJlcywgcGhvdG9ncmFwaHlcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgcGhvdG9ncmFwaHlcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGlsbHVzdHJhdGlvbnMsIGJyb2NodXJlc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbFwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgYnJvY2h1cmVzLCBkZXNpZ25cIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fV1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRzIHtcclxuXHRzdGF0aWMgZGF0YVNldChkYXRhKSB7XHJcblx0XHRjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9ydGZvbGlvXCIpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHRcdH1cclxuXHJcblx0XHRsaXN0RWxlbS5pbm5lckhUTUwgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRgPGxpIGNsYXNzPVwiaXRlbVwiIGRhdGEtY2F0ZWdvcnk9XCIke2l0ZW0uZmlsdGVyfVwiPlxyXG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzcz1cInBpY1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtpdGVtLmltZ30/JHtpbmRleH0pXCI+PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3J9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibGluayBpY29uLXJpZ2h0LWJpZ1wiIGhyZWY9XCIke2l0ZW0ubGlua31cIiB0aXRsZT1cIiR7aXRlbS5saW5rfVwiPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59IiwiY29uc29sZS53YXJuKFwiSGVsbG8gcGVvcGxlIVwiKTtcclxuXHJcbi8vIGltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4vdG9vbHMnXHJcbmltcG9ydCAnLi9saWJzL3BvbHlmaWxzJztcclxuaW1wb3J0IGNhcmREYXRhIGZyb20gJy4uL2RhdGEvY2FyZHMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9sb2dpYy9GaWx0ZXInO1xyXG5pbXBvcnQgTmF2QnRuIGZyb20gJy4vbG9naWMvTmF2QnRuJztcclxuaW1wb3J0IFRoZW1lVHVuaW5nIGZyb20gJy4vbG9naWMvVGhlbWVUdW5pbmcnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cdENhcmQuZGF0YVNldChjYXJkRGF0YS5jYXJkcyk7XHJcblx0RmlsdGVyLmRhdGFTZXQoY2FyZERhdGEuY2FyZHMpO1xyXG5cdE5hdkJ0bi5pbml0KCk7XHJcblx0VGhlbWVUdW5pbmcuaW5pdCgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblx0Y29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcblx0cHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmRcIik7XHJcbn0pOyIsImlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxyXG5cdFx0RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yIHx8XHJcblx0XHRFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcclxuXHRcdEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XHJcblx0XHRFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8XHJcblx0XHRFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcclxuXHRcdGZ1bmN0aW9uKHMpIHtcclxuXHRcdFx0dmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXHJcblx0XHRcdFx0aSA9IG1hdGNoZXMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSB0aGlzKSB7fVxyXG5cdFx0XHRyZXR1cm4gaSA+IC0xO1xyXG5cdFx0fTtcclxufSIsImltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XHJcblxyXG4vKipcclxuICogRmlsdGVyIHBvcnRmb2xpbyBsaXN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xyXG5cdHN0YXRpYyBkYXRhU2V0KGRhdGEpIHtcclxuXHRcdGNvbnN0IGZpbHRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcicpO1xyXG5cdFx0Y29uc3QgZmlsdGVySXRlbXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNmaWx0ZXIgLmxpbmsnKTtcclxuXHJcblx0XHRmdW5jdGlvbiBkZWFjdGl2YXRlSXRlbXMoKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVySXRlbXNFbC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGZpbHRlckl0ZW1zRWxbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZmlsdGVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcclxuXHRcdFx0bGV0IF90ID0gZXYudGFyZ2V0O1xyXG5cdFx0XHRcclxuXHRcdFx0d2hpbGUgKF90ICYmIF90ICE9IGZpbHRlcikge1xyXG5cdFx0XHRcdGlmIChfdC5tYXRjaGVzKCcubGluaycpKSB7XHJcblx0XHRcdFx0XHRsZXQga2V5V29yZCA9IF90LmRhdGFzZXQua2V5d29yZDtcclxuXHRcdFx0XHRcdHZhciBuZXdBcnIgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gfml0ZW0uZmlsdGVyLmluZGV4T2Yoa2V5V29yZCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGRlYWN0aXZhdGVJdGVtcygpO1xyXG5cdFx0XHRcdFx0X3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRDYXJkLmRhdGFTZXQobmV3QXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF90KSB7XHJcblx0XHRcdFx0XHRfdCA9IF90LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuLi90b29scyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCdG4ge1xyXG5cdHN0YXRpYyBpbml0KCkge1xyXG5cdFx0Y29uc3QgbmF2QnRuRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtYnRuJyk7XHJcblx0XHRjb25zdCBhc2lkZUxlZnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FzaWRlLWxlZnQnKTtcclxuXHRcdGNvbnN0IHBvcnRmb2xpb0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvJyk7XHJcblxyXG5cdFx0bmF2QnRuRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlzQWN0aXZlID0gbmF2QnRuRWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0YXNpZGVMZWZ0RWxlbS5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqIFdpZHRoIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsLm9mZnNldFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0bmF2QnRuRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKHBvcnRmb2xpb0VsZW0pICsgJ3B4JztcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChwb3J0Zm9saW9FbGVtKSArICdweCc7XHJcblx0XHR9LCAwKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuLi90b29scydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lVHVuaW5nIHtcclxuXHRzdGF0aWMgaW5pdCgpIHtcclxuXHRcdGNvbnN0IHRoZW1lVHVudW5nRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcnKTtcclxuXHRcdGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZyAucmFuZ2UnKTtcclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcgLnR1bmluZy1idG4nKTtcclxuXHRcdGNvbnN0IHBvcnRmb2xpb0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvJyk7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRsZXQgaXNBY3RpdmUgPSBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdHJhbmdlLmNsYXNzTGlzdFtpc0FjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qKiBXaWR0aCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKGVsKSB7XHJcblx0XHRcdHJldHVybiBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoZW1lVHVudW5nRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKHBvcnRmb2xpb0VsZW0pICsgJ3B4JztcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdHRoZW1lVHVudW5nRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKHBvcnRmb2xpb0VsZW0pICsgJ3B4JztcclxuXHRcdH0sIDApO1xyXG5cdH1cclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgb25XaW5kb3dSZXNpemUgfSBmcm9tICcuL29uV2luZG93UmVzaXplJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxQYWdlVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFBhZ2VUb1RvcCc7IiwiLyoqXHJcbiAqINCe0LvQtdC20LjQstCw0LXRgiDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC30LzQtdGA0L7QsiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwINC4INCy0YvQt9GL0LLQsNC10YIgY2Ig0LXRgdC70Lgg0L/RgNC40LLRi9GB0LXQu9C+INCy0YDQtdC80Y8g0YPQutCw0LfQsNC90L3QvtC1INCyIGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiINC60LDQu9C70LHRjdC6XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MzAwXSDQuNC90YLQtdGA0LLQsNC7INCyINC80LjQu9C70LjRgdC40LrRg9C90LTQsNGFXHJcbiAqL1xyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShjYiwgZHVyYXRpb24gPSAzMDApIHtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCIvKipcclxuICog0J/RgNC+0LrRgNGD0YLQutCwINGN0L7QtdC80LXQvdGC0LAg0LLQstC10YDRhVxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsINCa0L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAqL1xyXG5mdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoZWwpIHtcclxuXHRlbCA9IGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcDtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRlbC5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiXX0=
