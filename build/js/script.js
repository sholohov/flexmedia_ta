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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS9jYXJkcy5qc29uIiwic3JjL2pzL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNyYy9qcy9jb3JlL0ZpbHRlci5qcyIsInNyYy9qcy9jb3JlL05hdkJ0bi5qcyIsInNyYy9qcy9jb3JlL1RoZW1lVHVuaW5nLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL2xpYnMvcG9seWZpbHMuanMiLCJzcmMvanMvdG9vbHMvSUVEZXRlY3QuanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvbG9jYWxTdG9yYWdlQXZhaWxhYmxlLmpzIiwic3JjL2pzL3Rvb2xzL29uV2luZG93UmVzaXplLmpzIiwic3JjL2pzL3Rvb2xzL3Njcm9sbFBhZ2VUb1RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QU0sU0FBWCxlQUFBOztBQUVBLFVBQUEsU0FBQSxHQUFxQjtBQUNwQixTQUFPLEdBQVAsU0FBQTtBQUNBOztBQUVELFVBQUEsR0FBQSxHQUFlO0FBQ2QsTUFBSSxjQUFKLENBQUEsRUFBcUI7QUFDcEIsTUFBQSxRQUFBLENBQUEsQ0FBQSxFQUFlLENBQUMsS0FBQSxHQUFBLENBQVUsY0FBVixDQUFBLEVBQWhCLENBQWdCLENBQWhCO0FBQ0EseUJBQUEsR0FBQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO2tCQUNjLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJjYXJkc1wiOiBbe1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwicGhvdG9ncmFwaHksIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgaWxsdXN0cmF0aW9uXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgYnJvY2h1cmVzLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJicm9jaHVyZXMsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ25cIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBpbGx1c3RyYXRpb25zLCBicm9jaHVyZXNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGxcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcInBob3RvZ3JhcGh5LCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGlsbHVzdHJhdGlvblwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiYnJvY2h1cmVzLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBwaG90b2dyYXBoeVwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgaWxsdXN0cmF0aW9ucywgYnJvY2h1cmVzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9XVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHMge1xyXG5cdHN0YXRpYyBkYXRhU2V0KGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3J0Zm9saW9cIik7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcblx0XHRcdC8vIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1jYXRlZ29yeT1cIiR7aXRlbS5maWx0ZXJ9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgke2l0ZW0uaW1nfT8ke2luZGV4fSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxzIGFjY2VudFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3J9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibGluayBpY29uLXJpZ2h0LWJpZ1wiIGhyZWY9XCIke2l0ZW0ubGlua31cIiB0aXRsZT1cIiR7aXRlbS5saW5rfVwiPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcG9ydGZvbGlvIGxpc3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XHJcblx0c3RhdGljIGRhdGFTZXQoZGF0YSkge1xyXG5cdFx0Y29uc3QgZmlsdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyJyk7XHJcblx0XHRjb25zdCBmaWx0ZXJJdGVtc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ZpbHRlciAubGluaycpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRlYWN0aXZhdGVJdGVtcygpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJJdGVtc0VsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZmlsdGVySXRlbXNFbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmaWx0ZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG5cdFx0XHRsZXQgX3QgPSBldi50YXJnZXQ7XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoX3QgJiYgX3QgIT0gZmlsdGVyKSB7XHJcblx0XHRcdFx0aWYgKF90Lm1hdGNoZXMoJy5saW5rJykpIHtcclxuXHRcdFx0XHRcdGxldCBrZXlXb3JkID0gX3QuZGF0YXNldC5rZXl3b3JkO1xyXG5cdFx0XHRcdFx0dmFyIG5ld0FyciA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB+aXRlbS5maWx0ZXIuaW5kZXhPZihrZXlXb3JkKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZUl0ZW1zKCk7XHJcblx0XHRcdFx0XHRfdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdENhcmQuZGF0YVNldChuZXdBcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoX3QpIHtcclxuXHRcdFx0XHRcdF90ID0gX3QucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4uL3Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ0biB7XHJcblx0c3RhdGljIGluaXQoKSB7XHJcblx0XHRjb25zdCBuYXZCdG5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1idG4nKTtcclxuXHRcdGNvbnN0IGFzaWRlTGVmdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUtbGVmdCcpO1xyXG5cdFx0Y29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cdFx0Y29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKTtcclxuXHJcblx0XHRsZXQgaXNPcGVuTWVudSA9IGZhbHNlO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1lbnVEcmF3ZXJUb2dnbGUoKSB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uY2xhc3NMaXN0W2lzT3Blbk1lbnUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJyk7XHJcblx0XHRcdGJhY2tkcm9wLmNsYXNzTGlzdFtpc09wZW5NZW51ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xyXG5cdFx0XHRhc2lkZUxlZnRFbGVtLmNsYXNzTGlzdFtpc09wZW5NZW51ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29wZW4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRuYXZCdG5FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRpc09wZW5NZW51ID0gIWlzT3Blbk1lbnU7XHJcblx0XHRcdG1lbnVEcmF3ZXJUb2dnbGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0aXNPcGVuTWVudSA9IGZhbHNlO1xyXG5cdFx0XHRtZW51RHJhd2VyVG9nZ2xlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKiogV2lkdGggdmVydGljYWwgc2Nyb2xsYmFyICovXHJcblx0XHRmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aChlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRuYXZCdG5FbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cdFx0fSwgMCk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi4vdG9vbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZVR1bmluZyB7XHJcblx0c3RhdGljIGluaXQoKSB7XHJcblx0XHRjb25zdCB0aGVtZVR1bnVuZ0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nJyk7XHJcblx0XHRjb25zdCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcgLnJhbmdlJyk7XHJcblx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nIC50dW5pbmctYnRuJyk7XHJcblx0XHRjb25zdCBjb250ZW50RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblx0XHRjb25zdCBhY2NlbnRFbGVtZW50c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjZW50Jyk7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHJcblx0XHRpZiAoISh0aGVtZVR1bnVuZ0VsZW0uc3R5bGUuZmlsdGVyID0gYGh1ZS1yb3RhdGUoMGRlZylgKSkge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5LiBDb2xvciBhZGp1c3Rpbmcgbm90IHdvcmtpbmcgb24gdGhpcyBicm93c2VyLicpXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNvbG9yID0ge1xyXG5cdFx0XHRodWU6IDAsXHJcblx0XHRcdGludmVydDogMFxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChUb29scy5sb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xyXG5cdFx0XHRpZiAoc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEh1ZScpKSB7XHJcblx0XHRcdFx0Y29sb3IuaHVlID0gK3N0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnKTtcclxuXHRcdFx0XHRodWVSb3RhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEludmVydCcpKSB7XHJcblx0XHRcdFx0Y29sb3IuaW52ZXJ0ID0gK3N0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRJbnZlcnQnKTtcclxuXHRcdFx0XHRpbnZlcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlzQWN0aXZlID0gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR0aGVtZVR1bnVuZ0VsZW0uY2xhc3NMaXN0W2lzQWN0aXZlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaHVlUm90YXRlKCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFjY2VudEVsZW1lbnRzTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsID0gYWNjZW50RWxlbWVudHNMaXN0W2ldO1xyXG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRlbC5zdHlsZS5maWx0ZXIgPSBgaHVlLXJvdGF0ZSgke2NvbG9yLmh1ZX1kZWcpIGludmVydCgke2NvbG9yLmludmVydH0lKWA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBpbnZlcnQoKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZW50RWxlbWVudHNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Y29uc3QgZWwgPSBhY2NlbnRFbGVtZW50c0xpc3RbaV07XHJcblx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHRcdFx0XHRcdGVsLnN0eWxlLmZpbHRlciA9IGBodWUtcm90YXRlKCR7Y29sb3IuaHVlfWRlZykgaW52ZXJ0KCR7Y29sb3IuaW52ZXJ0fSUpYDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEFjY2VudChlKSB7XHJcblx0XHRcdGxldCBfdCA9IGUudGFyZ2V0O1xyXG5cdFx0XHRpZiAoX3QuaWQgPT0gJ2NvbG9yLWh1ZS1yb3RhdGUnKSB7XHJcblx0XHRcdFx0Y29sb3IuaHVlID0gX3QudmFsdWU7XHJcblx0XHRcdFx0aHVlUm90YXRlKCk7XHJcblx0XHRcdFx0c3RvcmFnZS5zZXRJdGVtKCdjb2xvckFjY2VudEh1ZScsIF90LnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3QuaWQgPT0gJ2NvbG9yLWludmVydCcpIHtcclxuXHRcdFx0XHRjb2xvci5pbnZlcnQgPSBfdC52YWx1ZTtcclxuXHRcdFx0XHRpbnZlcnQoKTtcclxuXHRcdFx0XHRzdG9yYWdlLnNldEl0ZW0oJ2NvbG9yQWNjZW50SW52ZXJ0JywgX3QudmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZXRBY2NlbnQpO1xyXG5cdFx0cmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0QWNjZW50KTtcclxuXHJcblx0XHQvKiogV2lkdGggdmVydGljYWwgc2Nyb2xsYmFyICovXHJcblx0XHRmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aChlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGVtZVR1bnVuZ0VsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cclxuXHRcdFRvb2xzLm9uV2luZG93UmVzaXplKCgpID0+IHtcclxuXHRcdFx0dGhlbWVUdW51bmdFbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHRcdH0sIDApO1xyXG5cclxuXHRcdGlmIChUb29scy5JRURldGVjdCgpID49IDExKSB7XHJcblx0XHRcdHJhbmdlLmlubmVySFRNTCA9IGA8c3Bhbj5Tb3JyeSwgSUUxMSBhbmQgdGhlIHZlcnNpb24gYmVsb3cgZG8gbm90IHN1cHBvcnQgdGhpcyBmZWF0dXJlPC9zcGFuPmA7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJjb25zb2xlLndhcm4oXCJIZWxsbyBwZW9wbGUhXCIpO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi90b29scydcclxuaW1wb3J0ICcuL2xpYnMvcG9seWZpbHMnO1xyXG5pbXBvcnQgY2FyZERhdGEgZnJvbSAnLi4vZGF0YS9jYXJkcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2NvcmUvRmlsdGVyJztcclxuaW1wb3J0IE5hdkJ0biBmcm9tICcuL2NvcmUvTmF2QnRuJztcclxuaW1wb3J0IFRoZW1lVHVuaW5nIGZyb20gJy4vY29yZS9UaGVtZVR1bmluZyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0Q2FyZC5kYXRhU2V0KGNhcmREYXRhLmNhcmRzKTtcclxuXHRGaWx0ZXIuZGF0YVNldChjYXJkRGF0YS5jYXJkcyk7XHJcblx0TmF2QnRuLmluaXQoKTtcclxuXHRUaGVtZVR1bmluZy5pbml0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuXHRwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcclxufSk7XHJcbiIsIi8vIEVsZW1lbnQubWF0Y2hlcygpO1xyXG5cclxuKGZ1bmN0aW9uKGVsKSB7XHJcblx0ZWwubWF0Y2hlcyB8fCAoZWwubWF0Y2hlcyA9IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0dmFyIG1hdGNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcclxuXHRcdFx0dGggPSB0aGlzO1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwobWF0Y2hlcywgZnVuY3Rpb24oZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsID09PSB0aDtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KShFbGVtZW50LnByb3RvdHlwZSk7XHJcblxyXG4vLyBFbGVtZW50LmNsb3Nlc3QoKVxyXG5cclxuKGZ1bmN0aW9uKGVsKSB7XHJcblx0ZWwubWF0Y2hlcyA9IGVsLm1hdGNoZXMgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG5cdGVsLmNsb3Nlc3QgPSBlbC5jbG9zZXN0IHx8IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcclxuXHRcdGlmICghdGhpcykgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XHJcblx0XHRpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0fSBlbHNlIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcilcclxuXHR9O1xyXG59KEVsZW1lbnQucHJvdG90eXBlKSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSUVEZXRlY3QoKSB7XHJcblx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XHJcblxyXG5cdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXHJcblx0aWYgKElkeCA+IDApXHJcblx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xyXG5cclxuXHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXHJcblx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxyXG5cdFx0cmV0dXJuIDExO1xyXG5cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gMDsgLy9JdCBpcyBub3QgSUVcclxufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgb25XaW5kb3dSZXNpemUgfSBmcm9tICcuL29uV2luZG93UmVzaXplJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxQYWdlVG9Ub3AgfSBmcm9tICcuL3Njcm9sbFBhZ2VUb1RvcCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9jYWxTdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VBdmFpbGFibGUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIElFRGV0ZWN0IH0gZnJvbSAnLi9JRURldGVjdCc7IiwiLyoqXHJcbiAqINCf0YDQvtCy0LXRgNC60LAg0L/QvtC00LTQtdGA0LbQutC4IGxvY2FsU3RvcmFnZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XHJcblx0bGV0IHN0b3JhZ2U7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcblx0XHRzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuXHRcdHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcclxuXHRcdFx0XHQvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcblx0XHRcdFx0ZS5jb2RlID09PSAyMiB8fFxyXG5cdFx0XHRcdC8vIEZpcmVmb3hcclxuXHRcdFx0XHRlLmNvZGUgPT09IDEwMTQgfHxcclxuXHRcdFx0XHQvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuXHRcdFx0XHQvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcblx0XHRcdFx0ZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxyXG5cdFx0XHRcdC8vIEZpcmVmb3hcclxuXHRcdFx0XHRlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXHJcblx0XHRcdC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcblx0XHRcdHN0b3JhZ2UubGVuZ3RoICE9PSAwO1xyXG5cdH1cclxufSIsIi8qKlxyXG4gKiDQntC70LXQttC40LLQsNC10YIg0LjQt9C80LXQvdC10L3QuNC1INGA0LDQt9C80LXRgNC+0LIg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsCDQuCDQstGL0LfRi9Cy0LDQtdGCIGNiINC10YHQu9C4INC/0YDQuNCy0YvRgdC10LvQviDQstGA0LXQvNGPINGD0LrQsNC30LDQvdC90L7QtSDQsiBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiDQutCw0LvQu9Cx0Y3QulxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0g0LjQvdGC0LXRgNCy0LDQuyDQsiDQvNC40LvQu9C40YHQuNC60YPQvdC00LDRhVxyXG4gKi9cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoY2IsIGR1cmF0aW9uID0gMzAwKSB7XHJcblx0bGV0IHRpbWVvdXQ7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoY2IsIGR1cmF0aW9uKTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25XaW5kb3dSZXNpemU7IiwiLyoqXHJcbiAqINCf0YDQvtC60YDRg9GC0LrQsCDRjdC+0LXQvNC10L3RgtCwINCy0LLQtdGA0YVcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbCDQmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINC/0YDQvtC60YDRg9GC0LrQuFxyXG4gKi9cclxuZnVuY3Rpb24gc2Nyb2xsUGFnZVRvVG9wKGVsKSB7XHJcblx0ZWwgPSBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcclxuXHRcdHJldHVybiBlbC5zY3JvbGxUb3A7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdGlmIChnZXRTY3JvbGwoKSA+IDApIHtcclxuXHRcdFx0ZWwuc2Nyb2xsQnkoMCwgLU1hdGgubWF4KChnZXRTY3JvbGwoKSAvIDYpLCAxKSk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRydW4oKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxQYWdlVG9Ub3A7Il19
