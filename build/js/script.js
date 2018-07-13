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
		value: function init() {
			var themeTunungElem = document.querySelector('#theme-tuning');
			var range = document.querySelector('#theme-tuning .range');
			var btn = document.querySelector('#theme-tuning .tuning-btn');
			var contentElem = document.querySelector('#content');
			var accentElementsList = document.querySelectorAll('.accent');
			var storage = window.localStorage;

			if (!(themeTunungElem.style.filter = 'hue-rotate(0deg)')) {
				btn.addEventListener('click', function () {
					alert('Sorry. Color adjusting not working on this browser.');
				});
				return;
			}

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

			btn.addEventListener('click', function () {
				var isActive = btn.classList.toggle('active');
				themeTunungElem.classList[isActive ? 'add' : 'remove']('active');
			});

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

			range.addEventListener('input', setAccent);
			range.addEventListener('change', setAccent);

			/** Width vertical scrollbar */
			function getScrollbarWidth(el) {
				return el.offsetWidth - el.clientWidth;
			}

			window.addEventListener('load', function () {
				themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';
			});

			Tools.onWindowResize(function () {
				themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';
			}, 0);

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
// import cardData from '../data/cards';


document.addEventListener("DOMContentLoaded", function () {
	Tools.xhr('cards.json', 'json', function (_ref) {
		var cards = _ref.cards;

		_Card2.default.dataSet(cards);
		_Filter2.default.dataSet(cards);
	});

	_NavBtn2.default.init();
	_ThemeTuning2.default.init();
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

var resizeList = [];

function onWindowResize(cb) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

	resizeList.push({ cb: cb, duration: duration });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9DYXJkLmpzIiwic3JjL2pzL2NvcmUvRmlsdGVyLmpzIiwic3JjL2pzL2NvcmUvTmF2QnRuLmpzIiwic3JjL2pzL2NvcmUvVGhlbWVUdW5pbmcuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGlicy9wb2x5Zmlscy5qcyIsInNyYy9qcy90b29scy9JRURldGVjdC5qcyIsInNyYy9qcy90b29scy9pbmRleC5qcyIsInNyYy9qcy90b29scy9sb2NhbFN0b3JhZ2VBdmFpbGFibGUuanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIiwic3JjL2pzL3Rvb2xzL3hoci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUIsUTs7Ozs7OzswQkFDTCxJLEVBQU07QUFDcEIsT0FBTSxXQUFXLFNBQUEsYUFBQSxDQUFqQixZQUFpQixDQUFqQjs7QUFFQSxZQUFBLFlBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxFQUFnQztBQUMvQjtBQUNBOztBQUVELFlBQUEsU0FBQSxHQUFxQixLQUFBLEdBQUEsQ0FBUyxVQUFBLElBQUEsRUFBQSxLQUFBLEVBQWlCO0FBQzlDLFdBQUEsd0NBQ29DLEtBRHBDLE1BQUEsR0FBQSxrQ0FBQSxHQUNnRixLQURoRixHQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsR0FBQSxrRkFBQSxHQUd1QixLQUh2QixLQUFBLEdBQUEsZ0RBQUEsR0FJOEIsS0FKOUIsS0FBQSxHQUFBLDhEQUFBLEdBSzBDLEtBTDFDLElBQUEsR0FBQSxhQUFBLEdBSytELEtBTC9ELElBQUEsR0FBQSwwQ0FBQTtBQURvQixJQUFBLEVBQUEsSUFBQSxDQUFyQixFQUFxQixDQUFyQjtBQVdBOzs7Ozs7a0JBbkJtQixLOzs7Ozs7Ozs7Ozs7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WUFBUyxJQUFULFFBQUE7QUFDQTtBQUhGLEVBQUE7QUFLQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRzIHtcclxuXHRzdGF0aWMgZGF0YVNldChkYXRhKSB7XHJcblx0XHRjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9ydGZvbGlvXCIpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG5cdFx0XHQvLyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHRcdH1cclxuXHJcblx0XHRsaXN0RWxlbS5pbm5lckhUTUwgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRgPGxpIGNsYXNzPVwiaXRlbVwiIGRhdGEtY2F0ZWdvcnk9XCIke2l0ZW0uZmlsdGVyfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtpdGVtLmltZ30/JHtpbmRleH0pXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlscyBhY2NlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzPVwidGl0bGVcIj4ke2l0ZW0udGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtpdGVtLmRlc2NyfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzcz1cImxpbmsgaWNvbi1yaWdodC1iaWdcIiBocmVmPVwiJHtpdGVtLmxpbmt9XCIgdGl0bGU9XCIke2l0ZW0ubGlua31cIj48L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2xpPmBcclxuXHRcdFx0KTtcclxuXHRcdH0pLmpvaW4oJycpO1xyXG5cdH1cclxufSIsImltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZCc7XHJcblxyXG4vKipcclxuICogRmlsdGVyIHBvcnRmb2xpbyBsaXN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xyXG5cdHN0YXRpYyBkYXRhU2V0KGRhdGEpIHtcclxuXHRcdGNvbnN0IGZpbHRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcicpO1xyXG5cdFx0Y29uc3QgZmlsdGVySXRlbXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNmaWx0ZXIgLmxpbmsnKTtcclxuXHJcblx0XHRmdW5jdGlvbiBkZWFjdGl2YXRlSXRlbXMoKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVySXRlbXNFbC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGZpbHRlckl0ZW1zRWxbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZmlsdGVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcclxuXHRcdFx0bGV0IF90ID0gZXYudGFyZ2V0O1xyXG5cdFx0XHRcclxuXHRcdFx0d2hpbGUgKF90ICYmIF90ICE9IGZpbHRlcikge1xyXG5cdFx0XHRcdGlmIChfdC5tYXRjaGVzKCcubGluaycpKSB7XHJcblx0XHRcdFx0XHRsZXQga2V5V29yZCA9IF90LmRhdGFzZXQua2V5d29yZDtcclxuXHRcdFx0XHRcdHZhciBuZXdBcnIgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gfml0ZW0uZmlsdGVyLmluZGV4T2Yoa2V5V29yZCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGRlYWN0aXZhdGVJdGVtcygpO1xyXG5cdFx0XHRcdFx0X3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRDYXJkLmRhdGFTZXQobmV3QXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKF90KSB7XHJcblx0XHRcdFx0XHRfdCA9IF90LnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuLi90b29scyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCdG4ge1xyXG5cdHN0YXRpYyBpbml0KCkge1xyXG5cdFx0Y29uc3QgbmF2QnRuRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtYnRuJyk7XHJcblx0XHRjb25zdCB0aGVtZVR1bmluZ0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nJyk7XHJcblx0XHRjb25zdCBhc2lkZUxlZnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FzaWRlLWxlZnQnKTtcclxuXHRcdGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHRcdGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tkcm9wJyk7XHJcblxyXG5cdFx0bGV0IGlzT3Blbk1lbnUgPSBmYWxzZTtcclxuXHJcblx0XHRmdW5jdGlvbiBtZW51RHJhd2VyVG9nZ2xlKCkge1xyXG5cdFx0XHRuYXZCdG5FbGVtLmNsYXNzTGlzdFtpc09wZW5NZW51ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xyXG5cdFx0XHRiYWNrZHJvcC5jbGFzc0xpc3RbaXNPcGVuTWVudSA/ICdhZGQnIDogJ3JlbW92ZSddKCdhY3RpdmUnKTtcclxuXHRcdFx0YXNpZGVMZWZ0RWxlbS5jbGFzc0xpc3RbaXNPcGVuTWVudSA/ICdhZGQnIDogJ3JlbW92ZSddKCdvcGVuJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0bmF2QnRuRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0aXNPcGVuTWVudSA9ICFpc09wZW5NZW51O1xyXG5cdFx0XHRtZW51RHJhd2VyVG9nZ2xlKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0YmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGlzT3Blbk1lbnUgPSBmYWxzZTtcclxuXHRcdFx0bWVudURyYXdlclRvZ2dsZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqIFdpZHRoIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsLm9mZnNldFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0VG9vbHMub25XaW5kb3dSZXNpemUoKCkgPT4ge1xyXG5cdFx0XHRuYXZCdG5FbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHRcdH0sIDApO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4uL3Rvb2xzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVUdW5pbmcge1xyXG5cdHN0YXRpYyBpbml0KCkge1xyXG5cdFx0Y29uc3QgdGhlbWVUdW51bmdFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZycpO1xyXG5cdFx0Y29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nIC5yYW5nZScpO1xyXG5cdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZyAudHVuaW5nLWJ0bicpO1xyXG5cdFx0Y29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cdFx0Y29uc3QgYWNjZW50RWxlbWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY2VudCcpO1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblxyXG5cdFx0aWYgKCEodGhlbWVUdW51bmdFbGVtLnN0eWxlLmZpbHRlciA9IGBodWUtcm90YXRlKDBkZWcpYCkpIHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeS4gQ29sb3IgYWRqdXN0aW5nIG5vdCB3b3JraW5nIG9uIHRoaXMgYnJvd3Nlci4nKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb2xvciA9IHtcclxuXHRcdFx0aHVlOiAwLFxyXG5cdFx0XHRpbnZlcnQ6IDBcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoVG9vbHMubG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcclxuXHRcdFx0aWYgKHN0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnKSkge1xyXG5cdFx0XHRcdGNvbG9yLmh1ZSA9ICtzdG9yYWdlLmdldEl0ZW0oJ2NvbG9yQWNjZW50SHVlJyk7XHJcblx0XHRcdFx0aHVlUm90YXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRJbnZlcnQnKSkge1xyXG5cdFx0XHRcdGNvbG9yLmludmVydCA9ICtzdG9yYWdlLmdldEl0ZW0oJ2NvbG9yQWNjZW50SW52ZXJ0Jyk7XHJcblx0XHRcdFx0aW52ZXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGxldCBpc0FjdGl2ZSA9IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0dGhlbWVUdW51bmdFbGVtLmNsYXNzTGlzdFtpc0FjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGh1ZVJvdGF0ZSgpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhY2NlbnRFbGVtZW50c0xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGFjY2VudEVsZW1lbnRzTGlzdFtpXTtcclxuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWwuc3R5bGUuZmlsdGVyID0gYGh1ZS1yb3RhdGUoJHtjb2xvci5odWV9ZGVnKSBpbnZlcnQoJHtjb2xvci5pbnZlcnR9JSlgO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW52ZXJ0KCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFjY2VudEVsZW1lbnRzTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsID0gYWNjZW50RWxlbWVudHNMaXN0W2ldO1xyXG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRlbC5zdHlsZS5maWx0ZXIgPSBgaHVlLXJvdGF0ZSgke2NvbG9yLmh1ZX1kZWcpIGludmVydCgke2NvbG9yLmludmVydH0lKWA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRBY2NlbnQoZSkge1xyXG5cdFx0XHRsZXQgX3QgPSBlLnRhcmdldDtcclxuXHRcdFx0aWYgKF90LmlkID09ICdjb2xvci1odWUtcm90YXRlJykge1xyXG5cdFx0XHRcdGNvbG9yLmh1ZSA9IF90LnZhbHVlO1xyXG5cdFx0XHRcdGh1ZVJvdGF0ZSgpO1xyXG5cdFx0XHRcdHN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnLCBfdC52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90LmlkID09ICdjb2xvci1pbnZlcnQnKSB7XHJcblx0XHRcdFx0Y29sb3IuaW52ZXJ0ID0gX3QudmFsdWU7XHJcblx0XHRcdFx0aW52ZXJ0KCk7XHJcblx0XHRcdFx0c3RvcmFnZS5zZXRJdGVtKCdjb2xvckFjY2VudEludmVydCcsIF90LnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2V0QWNjZW50KTtcclxuXHRcdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldEFjY2VudCk7XHJcblxyXG5cdFx0LyoqIFdpZHRoIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsLm9mZnNldFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRcdHRoZW1lVHVudW5nRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblx0XHR9KTtcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdHRoZW1lVHVudW5nRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblx0XHR9LCAwKTtcclxuXHJcblx0XHRpZiAoVG9vbHMuSUVEZXRlY3QoKSA+PSAxMSkge1xyXG5cdFx0XHRyYW5nZS5pbm5lckhUTUwgPSBgPHNwYW4+U29ycnksIElFMTEgYW5kIHRoZSB2ZXJzaW9uIGJlbG93IGRvIG5vdCBzdXBwb3J0IHRoaXMgZmVhdHVyZTwvc3Bhbj5gO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG59IiwiY29uc29sZS53YXJuKFwiSGVsbG8gcGVvcGxlIVwiKTtcclxuXHJcbmltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4vdG9vbHMnXHJcbmltcG9ydCAnLi9saWJzL3BvbHlmaWxzJztcclxuLy8gaW1wb3J0IGNhcmREYXRhIGZyb20gJy4uL2RhdGEvY2FyZHMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9jb3JlL0ZpbHRlcic7XHJcbmltcG9ydCBOYXZCdG4gZnJvbSAnLi9jb3JlL05hdkJ0bic7XHJcbmltcG9ydCBUaGVtZVR1bmluZyBmcm9tICcuL2NvcmUvVGhlbWVUdW5pbmcnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cdFRvb2xzLnhocignY2FyZHMuanNvbicsICdqc29uJywgKHtjYXJkc30pID0+IHtcclxuXHRcdENhcmQuZGF0YVNldChjYXJkcyk7XHJcblx0XHRGaWx0ZXIuZGF0YVNldChjYXJkcyk7XHJcblx0fSk7XHJcblxyXG5cdE5hdkJ0bi5pbml0KCk7XHJcblx0VGhlbWVUdW5pbmcuaW5pdCgpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblx0Y29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcblx0cHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJlbmRcIik7XHJcbn0pOyIsIi8vIEVsZW1lbnQubWF0Y2hlcygpO1xyXG5cclxuKGZ1bmN0aW9uKGVsKSB7XHJcblx0ZWwubWF0Y2hlcyB8fCAoZWwubWF0Y2hlcyA9IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIG1hdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuXHRcdFx0dGggPSB0aGlzO1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwobWF0Y2hlcywgZnVuY3Rpb24oZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsID09PSB0aDtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KShFbGVtZW50LnByb3RvdHlwZSk7XHJcblxyXG4vLyBFbGVtZW50LmNsb3Nlc3QoKVxyXG5cclxuKGZ1bmN0aW9uKGVsKSB7XHJcblx0ZWwubWF0Y2hlcyA9IGVsLm1hdGNoZXMgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG5cdGVsLmNsb3Nlc3QgPSBlbC5jbG9zZXN0IHx8IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcclxuXHRcdGlmICghdGhpcykgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0fSBlbHNlIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcilcclxuXHR9O1xyXG59KEVsZW1lbnQucHJvdG90eXBlKSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSUVEZXRlY3QoKSB7XHJcblx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XHJcblxyXG5cdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXHJcblx0aWYgKElkeCA+IDApXHJcblx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xyXG5cclxuXHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXHJcblx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxyXG5cdFx0cmV0dXJuIDExO1xyXG5cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gMDsgLy9JdCBpcyBub3QgSUVcclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgb25XaW5kb3dSZXNpemUgfSBmcm9tICcuL29uV2luZG93UmVzaXplJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxQYWdlVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFBhZ2VUb1RvcCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9jYWxTdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VBdmFpbGFibGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIElFRGV0ZWN0IH0gZnJvbSAnLi9JRURldGVjdCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgeGhyIH0gZnJvbSAnLi94aHInOyIsIi8qKlxyXG4gKiDQn9GA0L7QstC10YDQutCwINC/0L7QtNC00LXRgNC20LrQuCBsb2NhbFN0b3JhZ2VcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkge1xyXG5cdGxldCBzdG9yYWdlO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xyXG5cdFx0c3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcblx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXHJcblx0XHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG5cdFx0XHRcdGUuY29kZSA9PT0gMjIgfHxcclxuXHRcdFx0XHQvLyBGaXJlZm94XHJcblx0XHRcdFx0ZS5jb2RlID09PSAxMDE0IHx8XHJcblx0XHRcdFx0Ly8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcblx0XHRcdFx0Ly8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxyXG5cdFx0XHRcdGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcclxuXHRcdFx0XHQvLyBGaXJlZm94XHJcblx0XHRcdFx0ZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxyXG5cdFx0XHQvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxyXG5cdFx0XHRzdG9yYWdlLmxlbmd0aCAhPT0gMDtcclxuXHR9XHJcbn0iLCIvKipcclxuICog0J7Qu9C10LbQuNCy0LDQtdGCINC40LfQvNC10L3QtdC90LjQtSDRgNCw0LfQvNC10YDQvtCyINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LAg0Lgg0LLRi9C30YvQstCw0LXRgiBjYiDQtdGB0LvQuCDQv9GA0LjQstGL0YHQtdC70L4g0LLRgNC10LzRjyDRg9C60LDQt9Cw0L3QvdC+0LUg0LIgZHVyYXRpb25cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2Ig0LrQsNC70LvQsdGN0LpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0zMDBdINC40L3RgtC10YDQstCw0Lsg0LIg0LzQuNC70LvQuNGB0LjQutGD0L3QtNCw0YVcclxuICovXHJcblxyXG5sZXQgcmVzaXplTGlzdCA9IFtdO1xyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoY2IsIGR1cmF0aW9uID0gMzAwKSB7XHJcblx0cmVzaXplTGlzdC5wdXNoKHtjYiwgZHVyYXRpb259KTtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCIvKipcclxuICog0J/RgNC+0LrRgNGD0YLQutCwINGN0L7QtdC80LXQvdGC0LAg0LLQstC10YDRhVxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsINCa0L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAqL1xyXG5mdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoZWwpIHtcclxuXHRlbCA9IGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcDtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRlbC5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiLCIvKipcclxuICogWE1MSHR0cFJleHVlc3RcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxyXG4gKiBAcGFyYW0ge29iamVjdH0gY2FsbGJhY2sgXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB4aHIodXJsLCB0eXBlLCBjYWxsYmFjaykge1xyXG5cdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0eGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcblx0eGhyLnJlc3BvbnNlVHlwZSA9IHR5cGU7XHJcblx0eGhyLnNlbmQoKTtcclxuXHR4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoY2FsbGJhY2spIHtcclxuXHRcdFx0Y2FsbGJhY2soeGhyLnJlc3BvbnNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG59Il19
