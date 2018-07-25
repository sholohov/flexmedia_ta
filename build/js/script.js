(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
				// return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			listElem.innerHTML = data.map(function (item, index) {
				return "<li class=\"item\" data-category=\"" + item.filter + "\" style=\"background-image:url(" + item.img + "?" + index + ")\">\n\t\t\t\t\t<div class=\"details accent\">\n\t\t\t\t\t\t<h3 class=\"title\">" + item.title + "</h3>\n\t\t\t\t\t\t<div class=\"description\">" + item.descr + "</div>\n\t\t\t\t\t\t<a class=\"link icon-right-big\" href=\"" + item.link + "\" title=\"" + item.link + "\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>";
			}).join('');
		}
	}]);

	return Cards;
}();

exports.default = Cards;

},{}],2:[function(require,module,exports){
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

},{"../components/Card":1}],3:[function(require,module,exports){
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
			var themeTuningElem = document.querySelector('#theme-tuning');
			var asideLeftElem = document.querySelector('#aside-left');
			var contentElem = document.querySelector('#content');
			var backdrop = document.querySelector('#backdrop');

			var isOpenMenu = false;

			function menuDrawerToggle() {
				navBtnElem.classList[isOpenMenu ? 'add' : 'remove']('active');
				backdrop.classList[isOpenMenu ? 'add' : 'remove']('active');
				asideLeftElem.classList[isOpenMenu ? 'add' : 'remove']('open');
			}

			navBtnElem.addEventListener('click', function () {
				isOpenMenu = !isOpenMenu;
				menuDrawerToggle();
			});

			backdrop.addEventListener('click', function () {
				isOpenMenu = false;
				menuDrawerToggle();
			});

			/** Width vertical scrollbar */
			function getScrollbarWidth(el) {
				return el.offsetWidth - el.clientWidth;
			}

			window.addEventListener('load', function () {
				navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';
			});

			Tools.onWindowResize(function () {
				navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';
			}, 0);
		}
	}]);

	return NavBtn;
}();

exports.default = NavBtn;

},{"../tools":8}],4:[function(require,module,exports){
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
		value: function init(state) {
			var themeTunungElem = document.querySelector('#theme-tuning');
			var range = document.querySelector('#theme-tuning .range');
			var btn = document.querySelector('#theme-tuning .tuning-btn');
			var contentElem = document.querySelector('#content');
			var accentElementsList = document.querySelectorAll('.accent');
			var storage = window.localStorage;

			var color = {
				hue: 0,
				invert: 0
			};

			if (Tools.localStorageAvailable()) {
				if (storage.getItem('colorAccentHue')) {
					color.hue = +storage.getItem('colorAccentHue');
					hueRotate();
				}
				if (storage.getItem('colorAccentInvert')) {
					color.invert = +storage.getItem('colorAccentInvert');
					invert();
				}
			}

			function hueRotate() {
				var _loop = function _loop(i) {
					var el = accentElementsList[i];
					requestAnimationFrame(function () {
						el.style.filter = 'hue-rotate(' + color.hue + 'deg) invert(' + color.invert + '%)';
					});
				};

				for (var i = 0; i < accentElementsList.length; i++) {
					_loop(i);
				}
			}

			function invert() {
				var _loop2 = function _loop2(i) {
					var el = accentElementsList[i];
					requestAnimationFrame(function () {
						el.style.filter = 'hue-rotate(' + color.hue + 'deg) invert(' + color.invert + '%)';
					});
				};

				for (var i = 0; i < accentElementsList.length; i++) {
					_loop2(i);
				}
			}

			function setAccent(e) {
				var _t = e.target;
				if (_t.id == 'color-hue-rotate') {
					color.hue = _t.value;
					hueRotate();
					storage.setItem('colorAccentHue', _t.value);
				}
				if (_t.id == 'color-invert') {
					color.invert = _t.value;
					invert();
					storage.setItem('colorAccentInvert', _t.value);
				}
			}

			/** Width vertical scrollbar */
			function getScrollbarWidth(el) {
				return el.offsetWidth - el.clientWidth;
			}

			if (state) {
				range.addEventListener('input', setAccent);
				range.addEventListener('change', setAccent);

				btn.addEventListener('click', function () {
					var isActive = btn.classList.toggle('active');
					themeTunungElem.classList[isActive ? 'add' : 'remove']('active');
				});

				window.addEventListener('load', function () {
					themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';
				});

				Tools.onWindowResize(function () {
					themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';
				}, 0);
			}

			if (Tools.IEDetect() >= 11) {
				range.innerHTML = '<span>Sorry, IE11 and the version below do not support this feature</span>';
				return;
			}
		}
	}]);

	return ThemeTuning;
}();

exports.default = ThemeTuning;

},{"../tools":8}],5:[function(require,module,exports){
'use strict';

var _tools = require('./tools');

var Tools = _interopRequireWildcard(_tools);

require('./libs/polyfils');

var _Card = require('./components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Filter = require('./core/Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _NavBtn = require('./core/NavBtn');

var _NavBtn2 = _interopRequireDefault(_NavBtn);

var _ThemeTuning = require('./core/ThemeTuning');

var _ThemeTuning2 = _interopRequireDefault(_ThemeTuning);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

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

console.warn("Hello people!");

document.addEventListener("DOMContentLoaded", function () {
	_ThemeTuning2.default.init();

	Tools.xhr('cards.json', 'json', function (_ref) {
		var cards = _ref.cards;

		_Card2.default.dataSet(cards);
		_Filter2.default.dataSet(cards);
		_NavBtn2.default.init();
		_ThemeTuning2.default.init(true);
	});
});

window.addEventListener("load", function () {
	var preloader = document.querySelector("#preloader");
	preloader.classList.add("end");
});

},{"./components/Card":1,"./core/Filter":2,"./core/NavBtn":3,"./core/ThemeTuning":4,"./libs/polyfils":6,"./tools":8}],6:[function(require,module,exports){
"use strict";

// Element.matches();

(function (el) {
	el.matches || (el.matches = el.matchesSelector || function (selector) {
		var matches = document.querySelectorAll(selector),
		    th = this;
		return Array.prototype.some.call(matches, function (el) {
			return el === th;
		});
	});
})(Element.prototype);

// Element.closest()

(function (el) {
	el.matches = el.matches || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector || el.webkitMatchesSelector;
	el.closest = el.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {
			return null;
		} else return this.parentElement.closest(selector);
	};
})(Element.prototype);

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = IEDetect;
function IEDetect() {
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");

	// If IE, return version number.
	if (Idx > 0) return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

	// If IE 11 then look for Updated user agent string.
	else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;else return 0; //It is not IE
}

},{}],8:[function(require,module,exports){
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

var _localStorageAvailable = require('./localStorageAvailable');

Object.defineProperty(exports, 'localStorageAvailable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_localStorageAvailable).default;
  }
});

var _IEDetect = require('./IEDetect');

Object.defineProperty(exports, 'IEDetect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_IEDetect).default;
  }
});

var _xhr = require('./xhr');

Object.defineProperty(exports, 'xhr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_xhr).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./IEDetect":7,"./localStorageAvailable":9,"./onWindowResize":10,"./scrollPageToTop":11,"./xhr":12}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = localStorageAvailable;
/**
 * Проверка поддержки localStorage
 * @returns {boolean}
 */

function localStorageAvailable() {
	var storage = void 0;
	try {
		var x = '__storage_test__';
		storage = window.localStorage;
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return e instanceof DOMException && (
		// everything except Firefox
		e.code === 22 ||
		// Firefox
		e.code === 1014 ||
		// test name field too, because code might not be present
		// everything except Firefox
		e.name === 'QuotaExceededError' ||
		// Firefox
		e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
		// acknowledge QuotaExceededError only if there's something already stored
		storage.length !== 0;
	}
}

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = xhr;
/**
 * XMLHttpRexuest
 * 
 * @param {string} url 
 * @param {string} type 
 * @param {object} callback 
 */
function xhr(url, type, callback) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.responseType = type;
	xhr.send();
	xhr.onload = function () {
		if (callback) {
			callback(xhr.response);
		}
	};
}

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9DYXJkLmpzIiwic3JjL2pzL2NvcmUvRmlsdGVyLmpzIiwic3JjL2pzL2NvcmUvTmF2QnRuLmpzIiwic3JjL2pzL2NvcmUvVGhlbWVUdW5pbmcuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGlicy9wb2x5Zmlscy5qcyIsInNyYy9qcy90b29scy9JRURldGVjdC5qcyIsInNyYy9qcy90b29scy9pbmRleC5qcyIsInNyYy9qcy90b29scy9sb2NhbFN0b3JhZ2VBdmFpbGFibGUuanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIiwic3JjL2pzL3Rvb2xzL3hoci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUIsUTs7Ozs7OzswQkFDTCxJLEVBQU07QUFDcEIsT0FBTSxXQUFXLFNBQUEsYUFBQSxDQUFqQixZQUFpQixDQUFqQjs7QUFFQSxZQUFBLFlBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxFQUFnQztBQUMvQjtBQUNBOztBQUVELFlBQUEsU0FBQSxHQUFxQixLQUFBLEdBQUEsQ0FBUyxVQUFBLElBQUEsRUFBQSxLQUFBLEVBQWlCO0FBQzlDLFdBQUEsd0NBQ29DLEtBRHBDLE1BQUEsR0FBQSxrQ0FBQSxHQUNnRixLQURoRixHQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsR0FBQSxrRkFBQSxHQUd1QixLQUh2QixLQUFBLEdBQUEsZ0RBQUEsR0FJOEIsS0FKOUIsS0FBQSxHQUFBLDhEQUFBLEdBSzBDLEtBTDFDLElBQUEsR0FBQSxhQUFBLEdBSytELEtBTC9ELElBQUEsR0FBQSwwQ0FBQTtBQURvQixJQUFBLEVBQUEsSUFBQSxDQUFyQixFQUFxQixDQUFyQjtBQVdBOzs7Ozs7a0JBbkJtQixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCLElBQUEsUUFBQSxRQUFBLG9CQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQixTOzs7Ozs7OzBCQUNMLEksRUFBTTtBQUNwQixPQUFNLFdBQVcsU0FBQSxhQUFBLENBQWpCLFNBQWlCLENBQWpCO0FBQ0EsT0FBTSxnQkFBZ0IsU0FBQSxnQkFBQSxDQUF0QixlQUFzQixDQUF0Qjs7QUFFQSxZQUFBLGVBQUEsR0FBMkI7QUFDMUIsU0FBSyxJQUFJLElBQVQsQ0FBQSxFQUFnQixJQUFJLGNBQXBCLE1BQUEsRUFBQSxHQUFBLEVBQStDO0FBQzlDLG1CQUFBLENBQUEsRUFBQSxTQUFBLENBQUEsTUFBQSxDQUFBLFFBQUE7QUFDQTtBQUNEOztBQUVELFlBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQW1DLFVBQUEsRUFBQSxFQUFRO0FBQzFDLFFBQUksS0FBSyxHQUFULE1BQUE7O0FBRUEsV0FBTyxNQUFNLE1BQWIsTUFBQSxFQUEyQjtBQUMxQixTQUFJLEdBQUEsT0FBQSxDQUFKLE9BQUksQ0FBSixFQUF5QjtBQUFBLFVBQUEsTUFBQTs7QUFBQSxPQUFBLFlBQUE7QUFDeEIsV0FBSSxVQUFVLEdBQUEsT0FBQSxDQUFkLE9BQUE7QUFDSSxnQkFBUyxLQUFBLE1BQUEsQ0FBWSxVQUFBLElBQUEsRUFBVTtBQUNsQyxlQUFPLENBQUMsS0FBQSxNQUFBLENBQUEsT0FBQSxDQUFSLE9BQVEsQ0FBUjtBQUh1QixRQUVYLENBQVQ7O0FBR0o7QUFDQSxVQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsUUFBQTtBQUNBLGNBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBO0FBUHdCLE9BQUE7QUFReEI7QUFDRCxTQUFBLEVBQUEsRUFBUTtBQUNQLFdBQUssR0FBTCxhQUFBO0FBQ0E7QUFDRDtBQWhCRixJQUFBO0FBa0JBOzs7Ozs7a0JBN0JtQixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCLElBQUEsU0FBQSxRQUFBLFVBQUEsQ0FBQTs7SUFBWSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVTLFM7Ozs7Ozs7eUJBQ047QUFDYixPQUFNLGFBQWEsU0FBQSxhQUFBLENBQW5CLFVBQW1CLENBQW5CO0FBQ0EsT0FBTSxrQkFBa0IsU0FBQSxhQUFBLENBQXhCLGVBQXdCLENBQXhCO0FBQ0EsT0FBTSxnQkFBZ0IsU0FBQSxhQUFBLENBQXRCLGFBQXNCLENBQXRCO0FBQ0EsT0FBTSxjQUFjLFNBQUEsYUFBQSxDQUFwQixVQUFvQixDQUFwQjtBQUNBLE9BQU0sV0FBVyxTQUFBLGFBQUEsQ0FBakIsV0FBaUIsQ0FBakI7O0FBRUEsT0FBSSxhQUFKLEtBQUE7O0FBRUEsWUFBQSxnQkFBQSxHQUE0QjtBQUMzQixlQUFBLFNBQUEsQ0FBcUIsYUFBQSxLQUFBLEdBQXJCLFFBQUEsRUFBQSxRQUFBO0FBQ0EsYUFBQSxTQUFBLENBQW1CLGFBQUEsS0FBQSxHQUFuQixRQUFBLEVBQUEsUUFBQTtBQUNBLGtCQUFBLFNBQUEsQ0FBd0IsYUFBQSxLQUFBLEdBQXhCLFFBQUEsRUFBQSxNQUFBO0FBQ0E7O0FBRUQsY0FBQSxnQkFBQSxDQUFBLE9BQUEsRUFBcUMsWUFBTTtBQUMxQyxpQkFBYSxDQUFiLFVBQUE7QUFDQTtBQUZELElBQUE7O0FBS0EsWUFBQSxnQkFBQSxDQUFBLE9BQUEsRUFBbUMsWUFBTTtBQUN4QyxpQkFBQSxLQUFBO0FBQ0E7QUFGRCxJQUFBOztBQUtBO0FBQ0EsWUFBQSxpQkFBQSxDQUFBLEVBQUEsRUFBK0I7QUFDOUIsV0FBTyxHQUFBLFdBQUEsR0FBaUIsR0FBeEIsV0FBQTtBQUNBOztBQUVELFVBQUEsZ0JBQUEsQ0FBQSxNQUFBLEVBQWdDLFlBQU07QUFDckMsZUFBQSxLQUFBLENBQUEsS0FBQSxHQUF5QixrQkFBQSxXQUFBLElBQXpCLElBQUE7QUFERCxJQUFBOztBQUlBLFNBQUEsY0FBQSxDQUFxQixZQUFNO0FBQzFCLGVBQUEsS0FBQSxDQUFBLEtBQUEsR0FBeUIsa0JBQUEsV0FBQSxJQUF6QixJQUFBO0FBREQsSUFBQSxFQUFBLENBQUE7QUFHQTs7Ozs7O2tCQXRDbUIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQixJQUFBLFNBQUEsUUFBQSxVQUFBLENBQUE7O0lBQVksUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTixjOzs7Ozs7O3VCQUNPLEssRUFBTztBQUNsQixPQUFNLGtCQUFrQixTQUFBLGFBQUEsQ0FBeEIsZUFBd0IsQ0FBeEI7QUFDQSxPQUFNLFFBQVEsU0FBQSxhQUFBLENBQWQsc0JBQWMsQ0FBZDtBQUNBLE9BQU0sTUFBTSxTQUFBLGFBQUEsQ0FBWiwyQkFBWSxDQUFaO0FBQ0EsT0FBTSxjQUFjLFNBQUEsYUFBQSxDQUFwQixVQUFvQixDQUFwQjtBQUNBLE9BQU0scUJBQXFCLFNBQUEsZ0JBQUEsQ0FBM0IsU0FBMkIsQ0FBM0I7QUFDQSxPQUFNLFVBQVUsT0FBaEIsWUFBQTs7QUFFQSxPQUFNLFFBQVE7QUFDYixTQURhLENBQUE7QUFFYixZQUFRO0FBRkssSUFBZDs7QUFLQSxPQUFJLE1BQUoscUJBQUksRUFBSixFQUFtQztBQUNsQyxRQUFJLFFBQUEsT0FBQSxDQUFKLGdCQUFJLENBQUosRUFBdUM7QUFDdEMsV0FBQSxHQUFBLEdBQVksQ0FBQyxRQUFBLE9BQUEsQ0FBYixnQkFBYSxDQUFiO0FBQ0E7QUFDQTtBQUNELFFBQUksUUFBQSxPQUFBLENBQUosbUJBQUksQ0FBSixFQUEwQztBQUN6QyxXQUFBLE1BQUEsR0FBZSxDQUFDLFFBQUEsT0FBQSxDQUFoQixtQkFBZ0IsQ0FBaEI7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsWUFBQSxTQUFBLEdBQXFCO0FBQUEsUUFBQSxRQUFBLFNBQUEsS0FBQSxDQUFBLENBQUEsRUFBQTtBQUVuQixTQUFNLEtBQUssbUJBQVgsQ0FBVyxDQUFYO0FBQ0EsMkJBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsTUFBQSxHQUFBLGdCQUFnQyxNQUFoQyxHQUFBLEdBQUEsY0FBQSxHQUF3RCxNQUF4RCxNQUFBLEdBQUEsSUFBQTtBQURELE1BQUE7QUFIbUIsS0FBQTs7QUFDcEIsU0FBSyxJQUFJLElBQVQsQ0FBQSxFQUFnQixJQUFJLG1CQUFwQixNQUFBLEVBQUEsR0FBQSxFQUFvRDtBQUFBLFdBQTNDLENBQTJDO0FBS25EO0FBQ0Q7O0FBRUQsWUFBQSxNQUFBLEdBQWtCO0FBQUEsUUFBQSxTQUFBLFNBQUEsTUFBQSxDQUFBLENBQUEsRUFBQTtBQUVoQixTQUFNLEtBQUssbUJBQVgsQ0FBVyxDQUFYO0FBQ0EsMkJBQXNCLFlBQU07QUFDM0IsU0FBQSxLQUFBLENBQUEsTUFBQSxHQUFBLGdCQUFnQyxNQUFoQyxHQUFBLEdBQUEsY0FBQSxHQUF3RCxNQUF4RCxNQUFBLEdBQUEsSUFBQTtBQURELE1BQUE7QUFIZ0IsS0FBQTs7QUFDakIsU0FBSyxJQUFJLElBQVQsQ0FBQSxFQUFnQixJQUFJLG1CQUFwQixNQUFBLEVBQUEsR0FBQSxFQUFvRDtBQUFBLFlBQTNDLENBQTJDO0FBS25EO0FBQ0Q7O0FBRUQsWUFBQSxTQUFBLENBQUEsQ0FBQSxFQUFzQjtBQUNyQixRQUFJLEtBQUssRUFBVCxNQUFBO0FBQ0EsUUFBSSxHQUFBLEVBQUEsSUFBSixrQkFBQSxFQUFpQztBQUNoQyxXQUFBLEdBQUEsR0FBWSxHQUFaLEtBQUE7QUFDQTtBQUNBLGFBQUEsT0FBQSxDQUFBLGdCQUFBLEVBQWtDLEdBQWxDLEtBQUE7QUFDQTtBQUNELFFBQUksR0FBQSxFQUFBLElBQUosY0FBQSxFQUE2QjtBQUM1QixXQUFBLE1BQUEsR0FBZSxHQUFmLEtBQUE7QUFDQTtBQUNBLGFBQUEsT0FBQSxDQUFBLG1CQUFBLEVBQXFDLEdBQXJDLEtBQUE7QUFDQTtBQUNEOztBQUVEO0FBQ0EsWUFBQSxpQkFBQSxDQUFBLEVBQUEsRUFBK0I7QUFDOUIsV0FBTyxHQUFBLFdBQUEsR0FBaUIsR0FBeEIsV0FBQTtBQUNBOztBQUVELE9BQUEsS0FBQSxFQUFXO0FBQ1YsVUFBQSxnQkFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBO0FBQ0EsVUFBQSxnQkFBQSxDQUFBLFFBQUEsRUFBQSxTQUFBOztBQUVBLFFBQUEsZ0JBQUEsQ0FBQSxPQUFBLEVBQThCLFlBQU07QUFDbkMsU0FBSSxXQUFXLElBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBZixRQUFlLENBQWY7QUFDQSxxQkFBQSxTQUFBLENBQTBCLFdBQUEsS0FBQSxHQUExQixRQUFBLEVBQUEsUUFBQTtBQUZELEtBQUE7O0FBS0EsV0FBQSxnQkFBQSxDQUFBLE1BQUEsRUFBZ0MsWUFBTTtBQUNyQyxxQkFBQSxLQUFBLENBQUEsS0FBQSxHQUE4QixrQkFBQSxXQUFBLElBQTlCLElBQUE7QUFERCxLQUFBOztBQUlBLFVBQUEsY0FBQSxDQUFxQixZQUFNO0FBQzFCLHFCQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQThCLGtCQUFBLFdBQUEsSUFBOUIsSUFBQTtBQURELEtBQUEsRUFBQSxDQUFBO0FBR0E7O0FBRUQsT0FBSSxNQUFBLFFBQUEsTUFBSixFQUFBLEVBQTRCO0FBQzNCLFVBQUEsU0FBQSxHQUFBLDRFQUFBO0FBQ0E7QUFDQTtBQUNEOzs7Ozs7a0JBR2EsVzs7Ozs7QUN2RmYsSUFBQSxTQUFBLFFBQUEsU0FBQSxDQUFBOztJQUFZLFE7O0FBQ1osUUFBQSxpQkFBQTs7QUFDQSxJQUFBLFFBQUEsUUFBQSxtQkFBQSxDQUFBOzs7O0FBQ0EsSUFBQSxVQUFBLFFBQUEsZUFBQSxDQUFBOzs7O0FBQ0EsSUFBQSxVQUFBLFFBQUEsZUFBQSxDQUFBOzs7O0FBQ0EsSUFBQSxlQUFBLFFBQUEsb0JBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQQSxRQUFBLElBQUEsQ0FBQSxlQUFBOztBQVNBLFNBQUEsZ0JBQUEsQ0FBQSxrQkFBQSxFQUE4QyxZQUFNO0FBQ25ELGVBQUEsT0FBQSxDQUFBLElBQUE7O0FBRUEsT0FBQSxHQUFBLENBQUEsWUFBQSxFQUFBLE1BQUEsRUFBZ0MsVUFBQSxJQUFBLEVBQWE7QUFBQSxNQUFYLFFBQVcsS0FBWCxLQUFXOztBQUM1QyxTQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsS0FBQTtBQUNBLFdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBO0FBQ0EsV0FBQSxPQUFBLENBQUEsSUFBQTtBQUNBLGdCQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQTtBQUpELEVBQUE7QUFIRCxDQUFBOztBQVlBLE9BQUEsZ0JBQUEsQ0FBQSxNQUFBLEVBQWdDLFlBQU07QUFDckMsS0FBTSxZQUFZLFNBQUEsYUFBQSxDQUFsQixZQUFrQixDQUFsQjtBQUNBLFdBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBO0FBRkQsQ0FBQTs7Ozs7QUNyQkE7O0FBRUEsQ0FBQyxVQUFBLEVBQUEsRUFBYTtBQUNiLElBQUEsT0FBQSxLQUFlLEdBQUEsT0FBQSxHQUFhLEdBQUEsZUFBQSxJQUFzQixVQUFBLFFBQUEsRUFBbUI7QUFDcEUsTUFBSSxVQUFVLFNBQUEsZ0JBQUEsQ0FBZCxRQUFjLENBQWQ7QUFBQSxNQUNDLEtBREQsSUFBQTtBQUVBLFNBQU8sTUFBQSxTQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLEVBQW1DLFVBQUEsRUFBQSxFQUFhO0FBQ3RELFVBQU8sT0FBUCxFQUFBO0FBREQsR0FBTyxDQUFQO0FBSEQsRUFBQTtBQURELENBQUEsRUFRRyxRQVJILFNBQUE7O0FBVUE7O0FBRUMsQ0FBQSxVQUFBLEVBQUEsRUFBYTtBQUNiLElBQUEsT0FBQSxHQUFhLEdBQUEsT0FBQSxJQUFjLEdBQWQsa0JBQUEsSUFBdUMsR0FBdkMsaUJBQUEsSUFBK0QsR0FBL0QsZ0JBQUEsSUFBc0YsR0FBbkcscUJBQUE7QUFDQSxJQUFBLE9BQUEsR0FBYSxHQUFBLE9BQUEsSUFBYyxTQUFBLE9BQUEsQ0FBQSxRQUFBLEVBQTJCO0FBQ3JELE1BQUksQ0FBSixJQUFBLEVBQVcsT0FBQSxJQUFBO0FBQ1gsTUFBSSxLQUFBLE9BQUEsQ0FBSixRQUFJLENBQUosRUFBNEIsT0FBQSxJQUFBO0FBQzVCLE1BQUksQ0FBQyxLQUFMLGFBQUEsRUFBeUI7QUFDeEIsVUFBQSxJQUFBO0FBREQsR0FBQSxNQUVPLE9BQU8sS0FBQSxhQUFBLENBQUEsT0FBQSxDQUFQLFFBQU8sQ0FBUDtBQUxSLEVBQUE7QUFGQSxDQUFBLEVBU0MsUUFURixTQUFDOzs7Ozs7OztrQkNkdUIsUTtBQUFULFNBQUEsUUFBQSxHQUFvQjtBQUNsQyxLQUFJLFNBQVMsT0FBQSxTQUFBLENBQWIsU0FBQTtBQUNBLEtBQUksTUFBTSxPQUFBLE9BQUEsQ0FBVixNQUFVLENBQVY7O0FBRUE7QUFDQSxLQUFJLE1BQUosQ0FBQSxFQUNDLE9BQU8sU0FBUyxPQUFBLFNBQUEsQ0FBaUIsTUFBakIsQ0FBQSxFQUEwQixPQUFBLE9BQUEsQ0FBQSxHQUFBLEVBQTFDLEdBQTBDLENBQTFCLENBQVQsQ0FBUDs7QUFFRDtBQUhBLE1BSUssSUFBSSxDQUFDLENBQUMsVUFBQSxTQUFBLENBQUEsS0FBQSxDQUFOLGNBQU0sQ0FBTixFQUNKLE9BREksRUFDSixDQURJLEtBSUosT0FiaUMsQ0FhakMsQ0FiaUMsQ0FhdkI7QUFDWDs7Ozs7Ozs7Ozs7Ozs7bURDZFEsTzs7Ozs7Ozs7O29EQUNBLE87Ozs7Ozs7OzswREFDQSxPOzs7Ozs7Ozs7NkNBQ0EsTzs7Ozs7Ozs7O3dDQUNBLE87Ozs7Ozs7Ozs7Ozs7O2tCQ0NlLHFCO0FBTHhCOzs7OztBQUtlLFNBQUEscUJBQUEsR0FBaUM7QUFDL0MsS0FBSSxVQUFBLEtBQUosQ0FBQTtBQUNBLEtBQUk7QUFDSCxNQUFNLElBQU4sa0JBQUE7QUFDQSxZQUFVLE9BQVYsWUFBQTtBQUNBLFVBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQ0EsVUFBQSxVQUFBLENBQUEsQ0FBQTtBQUNBLFNBQUEsSUFBQTtBQUxELEVBQUEsQ0FNRSxPQUFBLENBQUEsRUFBVTtBQUNYLFNBQU8sYUFBQSxZQUFBO0FBQ0w7QUFDQSxJQUFBLElBQUEsS0FBQSxFQUFBO0FBQ0E7QUFDQSxJQUFBLElBQUEsS0FGQSxJQUFBO0FBR0E7QUFDQTtBQUNBLElBQUEsSUFBQSxLQUxBLG9CQUFBO0FBTUE7QUFDQSxJQUFBLElBQUEsS0FUSyw0QkFBQTtBQVVOO0FBQ0EsVUFBQSxNQUFBLEtBWEQsQ0FBQTtBQVlBO0FBQ0Q7Ozs7Ozs7O0FDM0JEOzs7Ozs7QUFNQSxTQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQTRDO0FBQUEsS0FBaEIsV0FBZ0IsVUFBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLFNBQUEsR0FBQSxVQUFBLENBQUEsQ0FBQSxHQUFMLEdBQUs7O0FBQzNDLEtBQUksVUFBQSxLQUFKLENBQUE7QUFDQSxRQUFBLGdCQUFBLENBQUEsUUFBQSxFQUFrQyxZQUFXO0FBQzVDLGVBQUEsT0FBQTtBQUNBLFlBQVUsV0FBQSxFQUFBLEVBQVYsUUFBVSxDQUFWO0FBRkQsRUFBQTtBQUlBOztrQkFFYyxjOzs7Ozs7OztBQ2RmOzs7O0FBSUEsU0FBQSxlQUFBLENBQUEsRUFBQSxFQUE2QjtBQUM1QixNQUFLLE1BQU0sU0FBWCxlQUFBOztBQUVBLFVBQUEsU0FBQSxHQUFxQjtBQUNwQixTQUFPLEdBQVAsU0FBQTtBQUNBOztBQUVELFVBQUEsR0FBQSxHQUFlO0FBQ2QsTUFBSSxjQUFKLENBQUEsRUFBcUI7QUFDcEIsTUFBQSxRQUFBLENBQUEsQ0FBQSxFQUFlLENBQUMsS0FBQSxHQUFBLENBQVUsY0FBVixDQUFBLEVBQWhCLENBQWdCLENBQWhCO0FBQ0EseUJBQUEsR0FBQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO2tCQUNjLGU7Ozs7Ozs7O2tCQ1pTLEc7QUFQeEI7Ozs7Ozs7QUFPZSxTQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFFBQUEsRUFBa0M7QUFDaEQsS0FBSSxNQUFNLElBQVYsY0FBVSxFQUFWOztBQUVBLEtBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxHQUFBO0FBQ0EsS0FBQSxZQUFBLEdBQUEsSUFBQTtBQUNBLEtBQUEsSUFBQTtBQUNBLEtBQUEsTUFBQSxHQUFhLFlBQVc7QUFDdkIsTUFBQSxRQUFBLEVBQWM7QUFDYixZQUFTLElBQVQsUUFBQTtBQUNBO0FBSEYsRUFBQTtBQUtBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHMge1xyXG5cdHN0YXRpYyBkYXRhU2V0KGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3J0Zm9saW9cIik7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcblx0XHRcdC8vIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1jYXRlZ29yeT1cIiR7aXRlbS5maWx0ZXJ9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgke2l0ZW0uaW1nfT8ke2luZGV4fSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxzIGFjY2VudFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3J9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibGluayBpY29uLXJpZ2h0LWJpZ1wiIGhyZWY9XCIke2l0ZW0ubGlua31cIiB0aXRsZT1cIiR7aXRlbS5saW5rfVwiPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcG9ydGZvbGlvIGxpc3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XHJcblx0c3RhdGljIGRhdGFTZXQoZGF0YSkge1xyXG5cdFx0Y29uc3QgZmlsdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyJyk7XHJcblx0XHRjb25zdCBmaWx0ZXJJdGVtc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ZpbHRlciAubGluaycpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRlYWN0aXZhdGVJdGVtcygpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJJdGVtc0VsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZmlsdGVySXRlbXNFbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmaWx0ZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG5cdFx0XHRsZXQgX3QgPSBldi50YXJnZXQ7XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoX3QgJiYgX3QgIT0gZmlsdGVyKSB7XHJcblx0XHRcdFx0aWYgKF90Lm1hdGNoZXMoJy5saW5rJykpIHtcclxuXHRcdFx0XHRcdGxldCBrZXlXb3JkID0gX3QuZGF0YXNldC5rZXl3b3JkO1xyXG5cdFx0XHRcdFx0dmFyIG5ld0FyciA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB+aXRlbS5maWx0ZXIuaW5kZXhPZihrZXlXb3JkKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZUl0ZW1zKCk7XHJcblx0XHRcdFx0XHRfdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdENhcmQuZGF0YVNldChuZXdBcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoX3QpIHtcclxuXHRcdFx0XHRcdF90ID0gX3QucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4uL3Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ0biB7XHJcblx0c3RhdGljIGluaXQoKSB7XHJcblx0XHRjb25zdCBuYXZCdG5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1idG4nKTtcclxuXHRcdGNvbnN0IHRoZW1lVHVuaW5nRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcnKTtcclxuXHRcdGNvbnN0IGFzaWRlTGVmdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUtbGVmdCcpO1xyXG5cdFx0Y29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cdFx0Y29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKTtcclxuXHJcblx0XHRsZXQgaXNPcGVuTWVudSA9IGZhbHNlO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1lbnVEcmF3ZXJUb2dnbGUoKSB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uY2xhc3NMaXN0W2lzT3Blbk1lbnUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJyk7XHJcblx0XHRcdGJhY2tkcm9wLmNsYXNzTGlzdFtpc09wZW5NZW51ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xyXG5cdFx0XHRhc2lkZUxlZnRFbGVtLmNsYXNzTGlzdFtpc09wZW5NZW51ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29wZW4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRuYXZCdG5FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRpc09wZW5NZW51ID0gIWlzT3Blbk1lbnU7XHJcblx0XHRcdG1lbnVEcmF3ZXJUb2dnbGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0aXNPcGVuTWVudSA9IGZhbHNlO1xyXG5cdFx0XHRtZW51RHJhd2VyVG9nZ2xlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKiogV2lkdGggdmVydGljYWwgc2Nyb2xsYmFyICovXHJcblx0XHRmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aChlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHRcdFx0bmF2QnRuRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblx0XHR9KTtcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cdFx0fSwgMCk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi4vdG9vbHMnXHJcblxyXG5jbGFzcyBUaGVtZVR1bmluZyB7XHJcblx0c3RhdGljIGluaXQoc3RhdGUpIHtcclxuXHRcdGNvbnN0IHRoZW1lVHVudW5nRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcnKTtcclxuXHRcdGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZyAucmFuZ2UnKTtcclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcgLnR1bmluZy1idG4nKTtcclxuXHRcdGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHRcdGNvbnN0IGFjY2VudEVsZW1lbnRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NlbnQnKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yID0ge1xyXG5cdFx0XHRodWU6IDAsXHJcblx0XHRcdGludmVydDogMFxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChUb29scy5sb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xyXG5cdFx0XHRpZiAoc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEh1ZScpKSB7XHJcblx0XHRcdFx0Y29sb3IuaHVlID0gK3N0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnKTtcclxuXHRcdFx0XHRodWVSb3RhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEludmVydCcpKSB7XHJcblx0XHRcdFx0Y29sb3IuaW52ZXJ0ID0gK3N0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRJbnZlcnQnKTtcclxuXHRcdFx0XHRpbnZlcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGh1ZVJvdGF0ZSgpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhY2NlbnRFbGVtZW50c0xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGFjY2VudEVsZW1lbnRzTGlzdFtpXTtcclxuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWwuc3R5bGUuZmlsdGVyID0gYGh1ZS1yb3RhdGUoJHtjb2xvci5odWV9ZGVnKSBpbnZlcnQoJHtjb2xvci5pbnZlcnR9JSlgO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW52ZXJ0KCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFjY2VudEVsZW1lbnRzTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsID0gYWNjZW50RWxlbWVudHNMaXN0W2ldO1xyXG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRlbC5zdHlsZS5maWx0ZXIgPSBgaHVlLXJvdGF0ZSgke2NvbG9yLmh1ZX1kZWcpIGludmVydCgke2NvbG9yLmludmVydH0lKWA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRBY2NlbnQoZSkge1xyXG5cdFx0XHRsZXQgX3QgPSBlLnRhcmdldDtcclxuXHRcdFx0aWYgKF90LmlkID09ICdjb2xvci1odWUtcm90YXRlJykge1xyXG5cdFx0XHRcdGNvbG9yLmh1ZSA9IF90LnZhbHVlO1xyXG5cdFx0XHRcdGh1ZVJvdGF0ZSgpO1xyXG5cdFx0XHRcdHN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnLCBfdC52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90LmlkID09ICdjb2xvci1pbnZlcnQnKSB7XHJcblx0XHRcdFx0Y29sb3IuaW52ZXJ0ID0gX3QudmFsdWU7XHJcblx0XHRcdFx0aW52ZXJ0KCk7XHJcblx0XHRcdFx0c3RvcmFnZS5zZXRJdGVtKCdjb2xvckFjY2VudEludmVydCcsIF90LnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiBXaWR0aCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKGVsKSB7XHJcblx0XHRcdHJldHVybiBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdGF0ZSkge1xyXG5cdFx0XHRyYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNldEFjY2VudCk7XHJcblx0XHRcdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldEFjY2VudCk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0bGV0IGlzQWN0aXZlID0gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdHRoZW1lVHVudW5nRWxlbS5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhlbWVUdW51bmdFbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhlbWVUdW51bmdFbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFRvb2xzLklFRGV0ZWN0KCkgPj0gMTEpIHtcclxuXHRcdFx0cmFuZ2UuaW5uZXJIVE1MID0gYDxzcGFuPlNvcnJ5LCBJRTExIGFuZCB0aGUgdmVyc2lvbiBiZWxvdyBkbyBub3Qgc3VwcG9ydCB0aGlzIGZlYXR1cmU8L3NwYW4+YDtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUdW5pbmc7IiwiY29uc29sZS53YXJuKFwiSGVsbG8gcGVvcGxlIVwiKTtcclxuXHJcbmltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4vdG9vbHMnXHJcbmltcG9ydCAnLi9saWJzL3BvbHlmaWxzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL0NhcmQnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vY29yZS9GaWx0ZXInO1xyXG5pbXBvcnQgTmF2QnRuIGZyb20gJy4vY29yZS9OYXZCdG4nO1xyXG5pbXBvcnQgVGhlbWVUdW5pbmcgZnJvbSAnLi9jb3JlL1RoZW1lVHVuaW5nJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHRUaGVtZVR1bmluZy5pbml0KCk7XHJcblx0XHJcblx0VG9vbHMueGhyKCdjYXJkcy5qc29uJywgJ2pzb24nLCAoe2NhcmRzfSkgPT4ge1xyXG5cdFx0Q2FyZC5kYXRhU2V0KGNhcmRzKTtcclxuXHRcdEZpbHRlci5kYXRhU2V0KGNhcmRzKTtcclxuXHRcdE5hdkJ0bi5pbml0KCk7XHJcblx0XHRUaGVtZVR1bmluZy5pbml0KHRydWUpO1xyXG5cdH0pO1xyXG5cdFxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblx0Y29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcblx0cHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmRcIik7XHJcbn0pOyIsIi8vIEVsZW1lbnQubWF0Y2hlcygpO1xyXG5cclxuKGZ1bmN0aW9uKGVsKSB7XHJcblx0ZWwubWF0Y2hlcyB8fCAoZWwubWF0Y2hlcyA9IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIG1hdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuXHRcdFx0dGggPSB0aGlzO1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwobWF0Y2hlcywgZnVuY3Rpb24oZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsID09PSB0aDtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KShFbGVtZW50LnByb3RvdHlwZSk7XHJcblxyXG4vLyBFbGVtZW50LmNsb3Nlc3QoKVxyXG5cclxuKGZ1bmN0aW9uKGVsKSB7XHJcblx0ZWwubWF0Y2hlcyA9IGVsLm1hdGNoZXMgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG5cdGVsLmNsb3Nlc3QgPSBlbC5jbG9zZXN0IHx8IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcclxuXHRcdGlmICghdGhpcykgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0fSBlbHNlIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcilcclxuXHR9O1xyXG59KEVsZW1lbnQucHJvdG90eXBlKSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSUVEZXRlY3QoKSB7XHJcblx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XHJcblxyXG5cdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXHJcblx0aWYgKElkeCA+IDApXHJcblx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xyXG5cclxuXHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXHJcblx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxyXG5cdFx0cmV0dXJuIDExO1xyXG5cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gMDsgLy9JdCBpcyBub3QgSUVcclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgb25XaW5kb3dSZXNpemUgfSBmcm9tICcuL29uV2luZG93UmVzaXplJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxQYWdlVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFBhZ2VUb1RvcCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9jYWxTdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VBdmFpbGFibGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIElFRGV0ZWN0IH0gZnJvbSAnLi9JRURldGVjdCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgeGhyIH0gZnJvbSAnLi94aHInOyIsIi8qKlxyXG4gKiDQn9GA0L7QstC10YDQutCwINC/0L7QtNC00LXRgNC20LrQuCBsb2NhbFN0b3JhZ2VcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkge1xyXG5cdGxldCBzdG9yYWdlO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG5cdFx0c3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcblx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXHJcblx0XHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG5cdFx0XHRcdGUuY29kZSA9PT0gMjIgfHxcclxuXHRcdFx0XHQvLyBGaXJlZm94XHJcblx0XHRcdFx0ZS5jb2RlID09PSAxMDE0IHx8XHJcblx0XHRcdFx0Ly8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcblx0XHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG5cdFx0XHRcdGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcclxuXHRcdFx0XHQvLyBGaXJlZm94XHJcblx0XHRcdFx0ZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxyXG5cdFx0XHQvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG5cdFx0XHRzdG9yYWdlLmxlbmd0aCAhPT0gMDtcclxuXHR9XHJcbn0iLCIvKipcclxuICog0J7Qu9C10LbQuNCy0LDQtdGCINC40LfQvNC10L3QtdC90LjQtSDRgNCw0LfQvNC10YDQvtCyINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LAg0Lgg0LLRi9C30YvQstCw0LXRgiBjYiDQtdGB0LvQuCDQv9GA0LjQstGL0YHQtdC70L4g0LLRgNC10LzRjyDRg9C60LDQt9Cw0L3QvdC+0LUg0LIgZHVyYXRpb25cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2Ig0LrQsNC70LvQsdGN0LpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0zMDBdINC40L3RgtC10YDQstCw0Lsg0LIg0LzQuNC70LvQuNGB0LjQutGD0L3QtNCw0YVcclxuICovXHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShjYiwgZHVyYXRpb24gPSAzMDApIHtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCIvKipcclxuICog0J/RgNC+0LrRgNGD0YLQutCwINGN0L7QtdC80LXQvdGC0LAg0LLQstC10YDRhVxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsINCa0L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAqL1xyXG5mdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoZWwpIHtcclxuXHRlbCA9IGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcDtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRlbC5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiLCIvKipcclxuICogWE1MSHR0cFJleHVlc3RcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gY2FsbGJhY2sgXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB4aHIodXJsLCB0eXBlLCBjYWxsYmFjaykge1xyXG5cdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0eGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcblx0eGhyLnJlc3BvbnNlVHlwZSA9IHR5cGU7XHJcblx0eGhyLnNlbmQoKTtcclxuXHR4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoY2FsbGJhY2spIHtcclxuXHRcdFx0Y2FsbGJhY2soeGhyLnJlc3BvbnNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG59Il19
