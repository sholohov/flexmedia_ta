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

},{"../tools":8}],5:[function(require,module,exports){
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
		}
	}]);

	return ThemeTuning;
}();

exports.default = ThemeTuning;

},{"../tools":8}],6:[function(require,module,exports){
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./localStorageAvailable":9,"./onWindowResize":10,"./scrollPageToTop":11}],9:[function(require,module,exports){
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

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YS9jYXJkcy5qc29uIiwic3JjL2pzL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNyYy9qcy9jb3JlL0ZpbHRlci5qcyIsInNyYy9qcy9jb3JlL05hdkJ0bi5qcyIsInNyYy9qcy9jb3JlL1RoZW1lVHVuaW5nLmpzIiwic3JjL2pzL2luZGV4LmpzIiwic3JjL2pzL2xpYnMvcG9seWZpbHMuanMiLCJzcmMvanMvdG9vbHMvaW5kZXguanMiLCJzcmMvanMvdG9vbHMvbG9jYWxTdG9yYWdlQXZhaWxhYmxlLmpzIiwic3JjL2pzL3Rvb2xzL29uV2luZG93UmVzaXplLmpzIiwic3JjL2pzL3Rvb2xzL3Njcm9sbFBhZ2VUb1RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFBLEtBQUosQ0FBQTtBQUNBLFFBQUEsZ0JBQUEsQ0FBQSxRQUFBLEVBQWtDLFlBQVc7QUFDNUMsZUFBQSxPQUFBO0FBQ0EsWUFBVSxXQUFBLEVBQUEsRUFBVixRQUFVLENBQVY7QUFGRCxFQUFBO0FBSUE7O2tCQUVjLGM7Ozs7Ozs7O0FDYmY7Ozs7QUFJQSxTQUFBLGVBQUEsQ0FBQSxFQUFBLEVBQTZCO0FBQzVCLE1BQUssTUFBTSxTQUFYLGVBQUE7O0FBRUEsVUFBQSxTQUFBLEdBQXFCO0FBQ3BCLFNBQU8sR0FBUCxTQUFBO0FBQ0E7O0FBRUQsVUFBQSxHQUFBLEdBQWU7QUFDZCxNQUFJLGNBQUosQ0FBQSxFQUFxQjtBQUNwQixNQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQWUsQ0FBQyxLQUFBLEdBQUEsQ0FBVSxjQUFWLENBQUEsRUFBaEIsQ0FBZ0IsQ0FBaEI7QUFDQSx5QkFBQSxHQUFBO0FBQ0E7QUFDRDtBQUNEO0FBQ0E7a0JBQ2MsZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPXtcclxuXHRcImNhcmRzXCI6IFt7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJwaG90b2dyYXBoeSwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBpbGx1c3RyYXRpb25cIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBicm9jaHVyZXMsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImJyb2NodXJlcywgcGhvdG9ncmFwaHlcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnblwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgcGhvdG9ncmFwaHlcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGlsbHVzdHJhdGlvbnMsIGJyb2NodXJlc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbFwiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgYnJvY2h1cmVzLCBkZXNpZ25cIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGRlc2lnbiwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwiZGVzaWduLCBhbmltYXRpb25zXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgd2FsbHBhcGVyc1wiLFxyXG5cdFx0XCJsaW5rXCI6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG5cclxuXHR9LCB7XHJcblx0XHRcImltZ1wiOiBcImh0dHBzOi8vcGxhY2VpbWcuY29tLzgxMC82MjIvYW55XCIsXHJcblx0XHRcInRpdGxlXCI6IFwiQ29vbCBhcHAgZGVzaWduXCIsXHJcblx0XHRcImRlc2NyXCI6IFwicGhvdG9ncmFwaHksIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ24sIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgaWxsdXN0cmF0aW9uXCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgYnJvY2h1cmVzLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJicm9jaHVyZXMsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImZpbHRlclwiOiBcImFsbCwgZGVzaWduLCB3YWxscGFwZXJzXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBkZXNpZ25cIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHBob3RvZ3JhcGh5XCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH0sIHtcclxuXHRcdFwiaW1nXCI6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vODEwLzYyMi9hbnlcIixcclxuXHRcdFwidGl0bGVcIjogXCJDb29sIGFwcCBkZXNpZ25cIixcclxuXHRcdFwiZGVzY3JcIjogXCJkZXNpZ24sIGFuaW1hdGlvbnNcIixcclxuXHRcdFwiZmlsdGVyXCI6IFwiYWxsLCBpbGx1c3RyYXRpb25zLCBicm9jaHVyZXNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGxcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIHdhbGxwYXBlcnNcIixcclxuXHRcdFwibGlua1wiOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuXHJcblx0fSwge1xyXG5cdFx0XCJpbWdcIjogXCJodHRwczovL3BsYWNlaW1nLmNvbS84MTAvNjIyL2FueVwiLFxyXG5cdFx0XCJ0aXRsZVwiOiBcIkNvb2wgYXBwIGRlc2lnblwiLFxyXG5cdFx0XCJkZXNjclwiOiBcImRlc2lnbiwgYW5pbWF0aW9uc1wiLFxyXG5cdFx0XCJmaWx0ZXJcIjogXCJhbGwsIGJyb2NodXJlcywgZGVzaWduXCIsXHJcblx0XHRcImxpbmtcIjogXCJodHRwOi8vZ29vZ2xlLmNvbVwiXHJcblxyXG5cdH1dXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkcyB7XHJcblx0c3RhdGljIGRhdGFTZXQoZGF0YSkge1xyXG5cdFx0Y29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcnRmb2xpb1wiKTtcclxuXHJcblx0XHRmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuXHRcdFx0Ly8gcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0XHR9XHJcblxyXG5cdFx0bGlzdEVsZW0uaW5uZXJIVE1MID0gZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0YDxsaSBjbGFzcz1cIml0ZW1cIiBkYXRhLWNhdGVnb3J5PVwiJHtpdGVtLmZpbHRlcn1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKCR7aXRlbS5pbWd9PyR7aW5kZXh9KVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbHMgYWNjZW50XCI+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzcz1cInRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7aXRlbS5kZXNjcn08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJsaW5rIGljb24tcmlnaHQtYmlnXCIgaHJlZj1cIiR7aXRlbS5saW5rfVwiIHRpdGxlPVwiJHtpdGVtLmxpbmt9XCI+PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9saT5gXHJcblx0XHRcdCk7XHJcblx0XHR9KS5qb2luKCcnKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xyXG5cclxuLyoqXHJcbiAqIEZpbHRlciBwb3J0Zm9saW8gbGlzdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcclxuXHRzdGF0aWMgZGF0YVNldChkYXRhKSB7XHJcblx0XHRjb25zdCBmaWx0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXInKTtcclxuXHRcdGNvbnN0IGZpbHRlckl0ZW1zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZmlsdGVyIC5saW5rJyk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZGVhY3RpdmF0ZUl0ZW1zKCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlckl0ZW1zRWwubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRmaWx0ZXJJdGVtc0VsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZpbHRlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcblx0XHRcdGxldCBfdCA9IGV2LnRhcmdldDtcclxuXHRcdFx0XHJcblx0XHRcdHdoaWxlIChfdCAmJiBfdCAhPSBmaWx0ZXIpIHtcclxuXHRcdFx0XHRpZiAoX3QubWF0Y2hlcygnLmxpbmsnKSkge1xyXG5cdFx0XHRcdFx0bGV0IGtleVdvcmQgPSBfdC5kYXRhc2V0LmtleXdvcmQ7XHJcblx0XHRcdFx0XHR2YXIgbmV3QXJyID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIH5pdGVtLmZpbHRlci5pbmRleE9mKGtleVdvcmQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRkZWFjdGl2YXRlSXRlbXMoKTtcclxuXHRcdFx0XHRcdF90LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0Q2FyZC5kYXRhU2V0KG5ld0Fycik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChfdCkge1xyXG5cdFx0XHRcdFx0X3QgPSBfdC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi4vdG9vbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnRuIHtcclxuXHRzdGF0aWMgaW5pdCgpIHtcclxuXHRcdGNvbnN0IG5hdkJ0bkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWJ0bicpO1xyXG5cdFx0Y29uc3QgYXNpZGVMZWZ0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2lkZS1sZWZ0Jyk7XHJcblx0XHRjb25zdCBjb250ZW50RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG5cdFx0bmF2QnRuRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlzQWN0aXZlID0gbmF2QnRuRWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0YXNpZGVMZWZ0RWxlbS5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqIFdpZHRoIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsLm9mZnNldFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0bmF2QnRuRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblxyXG5cdFx0VG9vbHMub25XaW5kb3dSZXNpemUoKCkgPT4ge1xyXG5cdFx0XHRuYXZCdG5FbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHRcdH0sIDApO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4uL3Rvb2xzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVUdW5pbmcge1xyXG5cdHN0YXRpYyBpbml0KCkge1xyXG5cdFx0Y29uc3QgdGhlbWVUdW51bmdFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZycpO1xyXG5cdFx0Y29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nIC5yYW5nZScpO1xyXG5cdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXR1bmluZyAudHVuaW5nLWJ0bicpO1xyXG5cdFx0Y29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cdFx0Y29uc3QgYWNjZW50RWxlbWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY2VudCcpO1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblxyXG5cdFx0aWYgKCEodGhlbWVUdW51bmdFbGVtLnN0eWxlLmZpbHRlciA9IGBodWUtcm90YXRlKDBkZWcpYCkpIHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeS4gQ29sb3IgYWRqdXN0aW5nIG5vdCB3b3JraW5nIG9uIHRoaXMgYnJvd3Nlci4nKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjb2xvciA9IHtcclxuXHRcdFx0aHVlOiAwLFxyXG5cdFx0XHRpbnZlcnQ6IDBcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoVG9vbHMubG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcclxuXHRcdFx0aWYgKHN0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnKSkge1xyXG5cdFx0XHRcdGNvbG9yLmh1ZSA9ICtzdG9yYWdlLmdldEl0ZW0oJ2NvbG9yQWNjZW50SHVlJyk7XHJcblx0XHRcdFx0aHVlUm90YXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRJbnZlcnQnKSkge1xyXG5cdFx0XHRcdGNvbG9yLmludmVydCA9ICtzdG9yYWdlLmdldEl0ZW0oJ2NvbG9yQWNjZW50SW52ZXJ0Jyk7XHJcblx0XHRcdFx0aW52ZXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGxldCBpc0FjdGl2ZSA9IGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0dGhlbWVUdW51bmdFbGVtLmNsYXNzTGlzdFtpc0FjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdhY3RpdmUnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGh1ZVJvdGF0ZSgpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhY2NlbnRFbGVtZW50c0xpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGFjY2VudEVsZW1lbnRzTGlzdFtpXTtcclxuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWwuc3R5bGUuZmlsdGVyID0gYGh1ZS1yb3RhdGUoJHtjb2xvci5odWV9ZGVnKSBpbnZlcnQoJHtjb2xvci5pbnZlcnR9JSlgO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW52ZXJ0KCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFjY2VudEVsZW1lbnRzTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsID0gYWNjZW50RWxlbWVudHNMaXN0W2ldO1xyXG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRlbC5zdHlsZS5maWx0ZXIgPSBgaHVlLXJvdGF0ZSgke2NvbG9yLmh1ZX1kZWcpIGludmVydCgke2NvbG9yLmludmVydH0lKWA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzZXRBY2NlbnQoZSkge1xyXG5cdFx0XHRsZXQgX3QgPSBlLnRhcmdldDtcclxuXHRcdFx0aWYgKF90LmlkID09ICdjb2xvci1odWUtcm90YXRlJykge1xyXG5cdFx0XHRcdGNvbG9yLmh1ZSA9IF90LnZhbHVlO1xyXG5cdFx0XHRcdGh1ZVJvdGF0ZSgpO1xyXG5cdFx0XHRcdHN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnLCBfdC52YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF90LmlkID09ICdjb2xvci1pbnZlcnQnKSB7XHJcblx0XHRcdFx0Y29sb3IuaW52ZXJ0ID0gX3QudmFsdWU7XHJcblx0XHRcdFx0aW52ZXJ0KCk7XHJcblx0XHRcdFx0c3RvcmFnZS5zZXRJdGVtKCdjb2xvckFjY2VudEludmVydCcsIF90LnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2V0QWNjZW50KTtcclxuXHRcdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldEFjY2VudCk7XHJcblxyXG5cdFx0LyoqIFdpZHRoIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xyXG5cdFx0ZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoZWwpIHtcclxuXHRcdFx0cmV0dXJuIGVsLm9mZnNldFdpZHRoIC0gZWwuY2xpZW50V2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhlbWVUdW51bmdFbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdHRoZW1lVHVudW5nRWxlbS5zdHlsZS5yaWdodCA9IGdldFNjcm9sbGJhcldpZHRoKGNvbnRlbnRFbGVtKSArICdweCc7XHJcblx0XHR9LCAwKTtcclxuXHR9XHJcbn0iLCJjb25zb2xlLndhcm4oXCJIZWxsbyBwZW9wbGUhXCIpO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi90b29scydcclxuaW1wb3J0ICcuL2xpYnMvcG9seWZpbHMnO1xyXG5pbXBvcnQgY2FyZERhdGEgZnJvbSAnLi4vZGF0YS9jYXJkcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2NvcmUvRmlsdGVyJztcclxuaW1wb3J0IE5hdkJ0biBmcm9tICcuL2NvcmUvTmF2QnRuJztcclxuaW1wb3J0IFRoZW1lVHVuaW5nIGZyb20gJy4vY29yZS9UaGVtZVR1bmluZyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0Q2FyZC5kYXRhU2V0KGNhcmREYXRhLmNhcmRzKTtcclxuXHRGaWx0ZXIuZGF0YVNldChjYXJkRGF0YS5jYXJkcyk7XHJcblx0TmF2QnRuLmluaXQoKTtcclxuXHRUaGVtZVR1bmluZy5pbml0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuXHRwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcclxufSk7IiwiLy8gRWxlbWVudC5tYXRjaGVzKCk7XHJcblxyXG4oZnVuY3Rpb24oZWwpIHtcclxuXHRlbC5tYXRjaGVzIHx8IChlbC5tYXRjaGVzID0gZWwubWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgbWF0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG5cdFx0XHR0aCA9IHRoaXM7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChtYXRjaGVzLCBmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwgPT09IHRoO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pKEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHJcbi8vIEVsZW1lbnQuY2xvc2VzdCgpXHJcblxyXG4oZnVuY3Rpb24oZWwpIHtcclxuXHRlbC5tYXRjaGVzID0gZWwubWF0Y2hlcyB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwub01hdGNoZXNTZWxlY3RvciB8fCBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcblx0ZWwuY2xvc2VzdCA9IGVsLmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xyXG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICh0aGlzLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gdGhpcztcclxuXHRcdGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBudWxsXHJcblx0XHR9IGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxyXG5cdH07XHJcbn0oRWxlbWVudC5wcm90b3R5cGUpKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIG9uV2luZG93UmVzaXplIH0gZnJvbSAnLi9vbldpbmRvd1Jlc2l6ZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Nyb2xsUGFnZVRvVG9wIH0gZnJvbSAnLi9zY3JvbGxQYWdlVG9Ub3AnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlQXZhaWxhYmxlJzsiLCIvKipcclxuICog0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LTQtNC10YDQttC60LggbG9jYWxTdG9yYWdlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcclxuXHRsZXQgc3RvcmFnZTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuXHRcdHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0c3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xyXG5cdFx0c3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxyXG5cdFx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuXHRcdFx0XHRlLmNvZGUgPT09IDIyIHx8XHJcblx0XHRcdFx0Ly8gRmlyZWZveFxyXG5cdFx0XHRcdGUuY29kZSA9PT0gMTAxNCB8fFxyXG5cdFx0XHRcdC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxyXG5cdFx0XHRcdC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcclxuXHRcdFx0XHRlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XHJcblx0XHRcdFx0Ly8gRmlyZWZveFxyXG5cdFx0XHRcdGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcclxuXHRcdFx0Ly8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcclxuXHRcdFx0c3RvcmFnZS5sZW5ndGggIT09IDA7XHJcblx0fVxyXG59IiwiLyoqXHJcbiAqINCe0LvQtdC20LjQstCw0LXRgiDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC30LzQtdGA0L7QsiDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwINC4INCy0YvQt9GL0LLQsNC10YIgY2Ig0LXRgdC70Lgg0L/RgNC40LLRi9GB0LXQu9C+INCy0YDQtdC80Y8g0YPQutCw0LfQsNC90L3QvtC1INCyIGR1cmF0aW9uXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiINC60LDQu9C70LHRjdC6XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MzAwXSDQuNC90YLQtdGA0LLQsNC7INCyINC80LjQu9C70LjRgdC40LrRg9C90LTQsNGFXHJcbiAqL1xyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShjYiwgZHVyYXRpb24gPSAzMDApIHtcclxuXHRsZXQgdGltZW91dDtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChjYiwgZHVyYXRpb24pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvbldpbmRvd1Jlc2l6ZTsiLCIvKipcclxuICog0J/RgNC+0LrRgNGD0YLQutCwINGN0L7QtdC80LXQvdGC0LAg0LLQstC10YDRhVxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsINCa0L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAqL1xyXG5mdW5jdGlvbiBzY3JvbGxQYWdlVG9Ub3AoZWwpIHtcclxuXHRlbCA9IGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG5cdFx0cmV0dXJuIGVsLnNjcm9sbFRvcDtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gcnVuKCkge1xyXG5cdFx0aWYgKGdldFNjcm9sbCgpID4gMCkge1xyXG5cdFx0XHRlbC5zY3JvbGxCeSgwLCAtTWF0aC5tYXgoKGdldFNjcm9sbCgpIC8gNiksIDEpKTtcclxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJ1bigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFBhZ2VUb1RvcDsiXX0=
