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

},{}],3:[function(require,module,exports){
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

},{"../components/Card":2}],4:[function(require,module,exports){
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

},{"../tools":9}],5:[function(require,module,exports){
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

			themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';

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

},{"../tools":9}],6:[function(require,module,exports){
'use strict';

require('./libs/polyfils');

var _cards = require('../data/cards');

var _cards2 = _interopRequireDefault(_cards);

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

},{"../data/cards":1,"./components/Card":2,"./core/Filter":3,"./core/NavBtn":4,"./core/ThemeTuning":5,"./libs/polyfils":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./IEDetect":8,"./localStorageAvailable":10,"./onWindowResize":11,"./scrollPageToTop":12}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS9jYXJkcy5qc29uIiwic3JjL2pzL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNyYy9qcy9jb3JlL0ZpbHRlci5qcyIsInNyYy9qcy9jb3JlL05hdkJ0bi5qcyIsInNyYy9qcy9jb3JlL1RoZW1lVHVuaW5nLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL2xpYnMvcG9seWZpbHMuanMiLCJzcmMvanMvdG9vbHMvSUVEZXRlY3QuanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvbG9jYWxTdG9yYWdlQXZhaWxhYmxlLmpzIiwic3JjL2pzL3Rvb2xzL29uV2luZG93UmVzaXplLmpzIiwic3JjL2pzL3Rvb2xzL3Njcm9sbFBhZ2VUb1RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJjYXJkc1wiOiBbe1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwicGhvdG9ncmFwaHksIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgaWxsdXN0cmF0aW9uXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgYnJvY2h1cmVzLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJicm9jaHVyZXMsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ25cIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBpbGx1c3RyYXRpb25zLCBicm9jaHVyZXNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGxcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcInBob3RvZ3JhcGh5LCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGlsbHVzdHJhdGlvblwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiYnJvY2h1cmVzLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgaWxsdXN0cmF0aW9ucywgYnJvY2h1cmVzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9XVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHMge1xyXG5cdHN0YXRpYyBkYXRhU2V0KGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3J0Zm9saW9cIik7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcblx0XHRcdC8vIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1jYXRlZ29yeT1cIiR7aXRlbS5maWx0ZXJ9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgke2l0ZW0uaW1nfT8ke2luZGV4fSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxzIGFjY2VudFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3J9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibGluayBpY29uLXJpZ2h0LWJpZ1wiIGhyZWY9XCIke2l0ZW0ubGlua31cIiB0aXRsZT1cIiR7aXRlbS5saW5rfVwiPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcG9ydGZvbGlvIGxpc3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XHJcblx0c3RhdGljIGRhdGFTZXQoZGF0YSkge1xyXG5cdFx0Y29uc3QgZmlsdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyJyk7XHJcblx0XHRjb25zdCBmaWx0ZXJJdGVtc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ZpbHRlciAubGluaycpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRlYWN0aXZhdGVJdGVtcygpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJJdGVtc0VsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZmlsdGVySXRlbXNFbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmaWx0ZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG5cdFx0XHRsZXQgX3QgPSBldi50YXJnZXQ7XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoX3QgJiYgX3QgIT0gZmlsdGVyKSB7XHJcblx0XHRcdFx0aWYgKF90Lm1hdGNoZXMoJy5saW5rJykpIHtcclxuXHRcdFx0XHRcdGxldCBrZXlXb3JkID0gX3QuZGF0YXNldC5rZXl3b3JkO1xyXG5cdFx0XHRcdFx0dmFyIG5ld0FyciA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB+aXRlbS5maWx0ZXIuaW5kZXhPZihrZXlXb3JkKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZUl0ZW1zKCk7XHJcblx0XHRcdFx0XHRfdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdENhcmQuZGF0YVNldChuZXdBcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoX3QpIHtcclxuXHRcdFx0XHRcdF90ID0gX3QucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4uL3Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ0biB7XHJcblx0c3RhdGljIGluaXQoKSB7XHJcblx0XHRjb25zdCBuYXZCdG5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1idG4nKTtcclxuXHRcdGNvbnN0IGFzaWRlTGVmdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUtbGVmdCcpO1xyXG5cdFx0Y29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuXHRcdG5hdkJ0bkVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGxldCBpc0FjdGl2ZSA9IG5hdkJ0bkVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdGFzaWRlTGVmdEVsZW0uY2xhc3NMaXN0W2lzQWN0aXZlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29wZW4nKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qKiBXaWR0aCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKGVsKSB7XHJcblx0XHRcdHJldHVybiBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5hdkJ0bkVsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cclxuXHRcdFRvb2xzLm9uV2luZG93UmVzaXplKCgpID0+IHtcclxuXHRcdFx0bmF2QnRuRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblx0XHR9LCAwKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuLi90b29scydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoZW1lVHVuaW5nIHtcclxuXHRzdGF0aWMgaW5pdCgpIHtcclxuXHRcdGNvbnN0IHRoZW1lVHVudW5nRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcnKTtcclxuXHRcdGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZyAucmFuZ2UnKTtcclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcgLnR1bmluZy1idG4nKTtcclxuXHRcdGNvbnN0IGNvbnRlbnRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHRcdGNvbnN0IGFjY2VudEVsZW1lbnRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NlbnQnKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cclxuXHRcdGlmICghKHRoZW1lVHVudW5nRWxlbS5zdHlsZS5maWx0ZXIgPSBgaHVlLXJvdGF0ZSgwZGVnKWApKSB7XHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkuIENvbG9yIGFkanVzdGluZyBub3Qgd29ya2luZyBvbiB0aGlzIGJyb3dzZXIuJylcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgY29sb3IgPSB7XHJcblx0XHRcdGh1ZTogMCxcclxuXHRcdFx0aW52ZXJ0OiAwXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFRvb2xzLmxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpKSB7XHJcblx0XHRcdGlmIChzdG9yYWdlLmdldEl0ZW0oJ2NvbG9yQWNjZW50SHVlJykpIHtcclxuXHRcdFx0XHRjb2xvci5odWUgPSArc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEh1ZScpO1xyXG5cdFx0XHRcdGh1ZVJvdGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzdG9yYWdlLmdldEl0ZW0oJ2NvbG9yQWNjZW50SW52ZXJ0JykpIHtcclxuXHRcdFx0XHRjb2xvci5pbnZlcnQgPSArc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEludmVydCcpO1xyXG5cdFx0XHRcdGludmVydCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRsZXQgaXNBY3RpdmUgPSBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdHRoZW1lVHVudW5nRWxlbS5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmdW5jdGlvbiBodWVSb3RhdGUoKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZW50RWxlbWVudHNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Y29uc3QgZWwgPSBhY2NlbnRFbGVtZW50c0xpc3RbaV07XHJcblx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHRcdFx0XHRcdGVsLnN0eWxlLmZpbHRlciA9IGBodWUtcm90YXRlKCR7Y29sb3IuaHVlfWRlZykgaW52ZXJ0KCR7Y29sb3IuaW52ZXJ0fSUpYDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGludmVydCgpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhY2NlbnRFbGVtZW50c0xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGFjY2VudEVsZW1lbnRzTGlzdFtpXTtcclxuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWwuc3R5bGUuZmlsdGVyID0gYGh1ZS1yb3RhdGUoJHtjb2xvci5odWV9ZGVnKSBpbnZlcnQoJHtjb2xvci5pbnZlcnR9JSlgO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0QWNjZW50KGUpIHtcclxuXHRcdFx0bGV0IF90ID0gZS50YXJnZXQ7XHJcblx0XHRcdGlmIChfdC5pZCA9PSAnY29sb3ItaHVlLXJvdGF0ZScpIHtcclxuXHRcdFx0XHRjb2xvci5odWUgPSBfdC52YWx1ZTtcclxuXHRcdFx0XHRodWVSb3RhdGUoKTtcclxuXHRcdFx0XHRzdG9yYWdlLnNldEl0ZW0oJ2NvbG9yQWNjZW50SHVlJywgX3QudmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChfdC5pZCA9PSAnY29sb3ItaW52ZXJ0Jykge1xyXG5cdFx0XHRcdGNvbG9yLmludmVydCA9IF90LnZhbHVlO1xyXG5cdFx0XHRcdGludmVydCgpO1xyXG5cdFx0XHRcdHN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JBY2NlbnRJbnZlcnQnLCBfdC52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNldEFjY2VudCk7XHJcblx0XHRyYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRBY2NlbnQpO1xyXG5cclxuXHRcdC8qKiBXaWR0aCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuXHRcdGZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKGVsKSB7XHJcblx0XHRcdHJldHVybiBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoZW1lVHVudW5nRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblxyXG5cdFx0VG9vbHMub25XaW5kb3dSZXNpemUoKCkgPT4ge1xyXG5cdFx0XHR0aGVtZVR1bnVuZ0VsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cdFx0fSwgMCk7XHJcblxyXG5cdFx0aWYgKFRvb2xzLklFRGV0ZWN0KCkgPj0gMTEpIHtcclxuXHRcdFx0cmFuZ2UuaW5uZXJIVE1MID0gYDxzcGFuPlNvcnJ5LCBJRTExIGFuZCB0aGUgdmVyc2lvbiBiZWxvdyBkbyBub3Qgc3VwcG9ydCB0aGlzIGZlYXR1cmU8L3NwYW4+YDtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImNvbnNvbGUud2FybihcIkhlbGxvIHBlb3BsZSFcIik7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyBUb29scyBmcm9tICcuL3Rvb2xzJ1xyXG5pbXBvcnQgJy4vbGlicy9wb2x5Zmlscyc7XHJcbmltcG9ydCBjYXJkRGF0YSBmcm9tICcuLi9kYXRhL2NhcmRzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL0NhcmQnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vY29yZS9GaWx0ZXInO1xyXG5pbXBvcnQgTmF2QnRuIGZyb20gJy4vY29yZS9OYXZCdG4nO1xyXG5pbXBvcnQgVGhlbWVUdW5pbmcgZnJvbSAnLi9jb3JlL1RoZW1lVHVuaW5nJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHRDYXJkLmRhdGFTZXQoY2FyZERhdGEuY2FyZHMpO1xyXG5cdEZpbHRlci5kYXRhU2V0KGNhcmREYXRhLmNhcmRzKTtcclxuXHROYXZCdG4uaW5pdCgpO1xyXG5cdFRoZW1lVHVuaW5nLmluaXQoKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cdGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpO1xyXG5cdHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwiZW5kXCIpO1xyXG59KTtcclxuIiwiLy8gRWxlbWVudC5tYXRjaGVzKCk7XHJcblxyXG4oZnVuY3Rpb24oZWwpIHtcclxuXHRlbC5tYXRjaGVzIHx8IChlbC5tYXRjaGVzID0gZWwubWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgbWF0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG5cdFx0XHR0aCA9IHRoaXM7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChtYXRjaGVzLCBmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwgPT09IHRoO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pKEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHJcbi8vIEVsZW1lbnQuY2xvc2VzdCgpXHJcblxyXG4oZnVuY3Rpb24oZWwpIHtcclxuXHRlbC5tYXRjaGVzID0gZWwubWF0Y2hlcyB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwub01hdGNoZXNTZWxlY3RvciB8fCBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcblx0ZWwuY2xvc2VzdCA9IGVsLmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xyXG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICh0aGlzLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gdGhpcztcclxuXHRcdGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBudWxsXHJcblx0XHR9IGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxyXG5cdH07XHJcbn0oRWxlbWVudC5wcm90b3R5cGUpKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJRURldGVjdCgpIHtcclxuXHR2YXIgc0FnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcclxuXHJcblx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cclxuXHRpZiAoSWR4ID4gMClcclxuXHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XHJcblxyXG5cdC8vIElmIElFIDExIHRoZW4gbG9vayBmb3IgVXBkYXRlZCB1c2VyIGFnZW50IHN0cmluZy5cclxuXHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpXHJcblx0XHRyZXR1cm4gMTE7XHJcblxyXG5cdGVsc2VcclxuXHRcdHJldHVybiAwOyAvL0l0IGlzIG5vdCBJRVxyXG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBvbldpbmRvd1Jlc2l6ZSB9IGZyb20gJy4vb25XaW5kb3dSZXNpemUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjcm9sbFBhZ2VUb1RvcCB9IGZyb20gJy4vc2Nyb2xsUGFnZVRvVG9wJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb2NhbFN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUF2YWlsYWJsZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSUVEZXRlY3QgfSBmcm9tICcuL0lFRGV0ZWN0JzsiLCIvKipcclxuICog0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LTQtNC10YDQttC60LggbG9jYWxTdG9yYWdlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcclxuXHRsZXQgc3RvcmFnZTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuXHRcdHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0c3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG5cdFx0c3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxyXG5cdFx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuXHRcdFx0XHRlLmNvZGUgPT09IDIyIHx8XHJcblx0XHRcdFx0Ly8gRmlyZWZveFxyXG5cdFx0XHRcdGUuY29kZSA9PT0gMTAxNCB8fFxyXG5cdFx0XHRcdC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxyXG5cdFx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuXHRcdFx0XHRlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XHJcblx0XHRcdFx0Ly8gRmlyZWZveFxyXG5cdFx0XHRcdGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcclxuXHRcdFx0Ly8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuXHRcdFx0c3RvcmFnZS5sZW5ndGggIT09IDA7XHJcblx0fVxyXG59IiwiLyoqXHJcbiAqINCe0LvQtdC20LjQstCw0LXRgiDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC30LzQtdGA0L7QsiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwINC4INCy0YvQt9GL0LLQsNC10YIgY2Ig0LXRgdC70Lgg0L/RgNC40LLRi9GB0LXQu9C+INCy0YDQtdC80Y8g0YPQutCw0LfQsNC90L3QvtC1INCyIGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiINC60LDQu9C70LHRjdC6XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MzAwXSDQuNC90YLQtdGA0LLQsNC7INCyINC80LjQu9C70LjRgdC40LrRg9C90LTQsNGFXHJcbiAqL1xyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShjYiwgZHVyYXRpb24gPSAzMDApIHtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCIvKipcclxuICog0J/RgNC+0LrRgNGD0YLQutCwINGN0L7QtdC80LXQvdGC0LAg0LLQstC10YDRhVxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsINCa0L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAqL1xyXG5mdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoZWwpIHtcclxuXHRlbCA9IGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcDtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRlbC5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiXX0=
