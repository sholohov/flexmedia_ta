(function() {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;
					if (!f && c) return c(i, !0);
					if (u) return u(i, !0);
					var a = new Error("Cannot find module '" + i + "'");
					throw a.code = "MODULE_NOT_FOUND", a
				}
				var p = n[i] = {
					exports: {}
				};
				e[i][0].call(p.exports, function(r) {
					var n = e[i][1][r];
					return o(n || r)
				}, p, p.exports, r, e, n, t)
			}
			return n[i].exports
		}
		for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
		return o
	}
	return r
})()({
	1: [function(require, module, exports) {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function() {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
			return function(Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var Cards = function() {
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

					listElem.innerHTML = data.map(function(item, index) {
						return "<li class=\"item\" data-category=\"" + item.filter + "\" style=\"background-image:url(" + item.img + "?" + index + ")\">\n\t\t\t\t\t<div class=\"details accent\">\n\t\t\t\t\t\t<h3 class=\"title\">" + item.title + "</h3>\n\t\t\t\t\t\t<div class=\"description\">" + item.descr + "</div>\n\t\t\t\t\t\t<a class=\"link icon-right-big\" href=\"" + item.link + "\" title=\"" + item.link + "\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>";
					}).join('');
				}
			}]);

			return Cards;
		}();

		exports.default = Cards;

	}, {}],
	2: [function(require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function() {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
			return function(Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		var _Card = require('../components/Card');

		var _Card2 = _interopRequireDefault(_Card);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		/**
		 * Filter portfolio list
		 */
		var Filter = function() {
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

					filterEl.addEventListener('click', function(ev) {
						var _t = ev.target;

						while (_t && _t != filter) {
							if (_t.matches('.link')) {
								var newArr;

								(function() {
									var keyWord = _t.dataset.keyword;
									newArr = data.filter(function(item) {
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

	}, {
		"../components/Card": 1
	}],
	3: [function(require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function() {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
			return function(Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		var _tools = require('../tools');

		var Tools = _interopRequireWildcard(_tools);

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};
				if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}
				newObj.default = obj;
				return newObj;
			}
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var NavBtn = function() {
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

					navBtnElem.addEventListener('click', function() {
						isOpenMenu = !isOpenMenu;
						menuDrawerToggle();
					});

					backdrop.addEventListener('click', function() {
						isOpenMenu = false;
						menuDrawerToggle();
					});

					/** Width vertical scrollbar */
					function getScrollbarWidth(el) {
						return el.offsetWidth - el.clientWidth;
					}

					navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';

					Tools.onWindowResize(function() {
						navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';
					}, 0);
				}
			}]);

			return NavBtn;
		}();

		exports.default = NavBtn;

	}, {
		"../tools": 8
	}],
	4: [function(require, module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function() {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}
			return function(Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		var _tools = require('../tools');

		var Tools = _interopRequireWildcard(_tools);

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};
				if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}
				newObj.default = obj;
				return newObj;
			}
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var ThemeTuning = function() {
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
						btn.addEventListener('click', function() {
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

					btn.addEventListener('click', function() {
						var isActive = btn.classList.toggle('active');
						themeTunungElem.classList[isActive ? 'add' : 'remove']('active');
					});

					function hueRotate() {
						var _loop = function _loop(i) {
							var el = accentElementsList[i];
							requestAnimationFrame(function() {
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
							requestAnimationFrame(function() {
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

					Tools.onWindowResize(function() {
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

	}, {
		"../tools": 8
	}],
	5: [function(require, module, exports) {
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
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

		function _interopRequireWildcard(obj) {
			if (obj && obj.__esModule) {
				return obj;
			} else {
				var newObj = {};
				if (obj != null) {
					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
					}
				}
				newObj.default = obj;
				return newObj;
			}
		}

		console.warn("Hello people!");
		// import cardData from '../data/cards';


		document.addEventListener("DOMContentLoaded", function() {
			Tools.xhr('cards.json', 'json', function(_ref) {
				var cards = _ref.cards;

				_Card2.default.dataSet(cards);
				_Filter2.default.dataSet(cards);
			});

			_NavBtn2.default.init();
			_ThemeTuning2.default.init();
		});

		window.addEventListener("load", function() {
			var preloader = document.querySelector("#preloader");
			preloader.classList.add("end");
		});

	}, {
		"./components/Card": 1,
		"./core/Filter": 2,
		"./core/NavBtn": 3,
		"./core/ThemeTuning": 4,
		"./libs/polyfils": 6,
		"./tools": 8
	}],
	6: [function(require, module, exports) {
		"use strict";

		// Element.matches();

		(function(el) {
			el.matches || (el.matches = el.matchesSelector || function(selector) {
				var matches = document.querySelectorAll(selector),
					th = this;
				return Array.prototype.some.call(matches, function(el) {
					return el === th;
				});
			});
		})(Element.prototype);

		// Element.closest()

		(function(el) {
			el.matches = el.matches || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector || el.webkitMatchesSelector;
			el.closest = el.closest || function closest(selector) {
				if (!this) return null;
				if (this.matches(selector)) return this;
				if (!this.parentElement) {
					return null;
				} else return this.parentElement.closest(selector);
			};
		})(Element.prototype);

	}, {}],
	7: [function(require, module, exports) {
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
			else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
			else return 0; //It is not IE
		}

	}, {}],
	8: [function(require, module, exports) {
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
			return obj && obj.__esModule ? obj : {
				default: obj
			};
		}

	}, {
		"./IEDetect": 7,
		"./localStorageAvailable": 9,
		"./onWindowResize": 10,
		"./scrollPageToTop": 11,
		"./xhr": 12
	}],
	9: [function(require, module, exports) {
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

	}, {}],
	10: [function(require, module, exports) {
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
			window.addEventListener('resize', function() {
				clearTimeout(timeout);
				timeout = setTimeout(cb, duration);
			});
		}

		exports.default = onWindowResize;

	}, {}],
	11: [function(require, module, exports) {
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

	}, {}],
	12: [function(require, module, exports) {
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
			xhr.onload = function() {
				if (callback) {
					callback(xhr.response);
				}
			};
		}

	}, {}]
}, {}, [5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9DYXJkLmpzIiwic3JjL2pzL2NvcmUvRmlsdGVyLmpzIiwic3JjL2pzL2NvcmUvTmF2QnRuLmpzIiwic3JjL2pzL2NvcmUvVGhlbWVUdW5pbmcuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGlicy9wb2x5Zmlscy5qcyIsInNyYy9qcy90b29scy9JRURldGVjdC5qcyIsInNyYy9qcy90b29scy9pbmRleC5qcyIsInNyYy9qcy90b29scy9sb2NhbFN0b3JhZ2VBdmFpbGFibGUuanMiLCJzcmMvanMvdG9vbHMvb25XaW5kb3dSZXNpemUuanMiLCJzcmMvanMvdG9vbHMvc2Nyb2xsUGFnZVRvVG9wLmpzIiwic3JjL2pzL3Rvb2xzL3hoci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUIsUTs7Ozs7OzswQkFDTCxJLEVBQU07QUFDcEIsT0FBTSxXQUFXLFNBQUEsYUFBQSxDQUFqQixZQUFpQixDQUFqQjs7QUFFQSxZQUFBLFlBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxFQUFnQztBQUMvQjtBQUNBOztBQUVELFlBQUEsU0FBQSxHQUFxQixLQUFBLEdBQUEsQ0FBUyxVQUFBLElBQUEsRUFBQSxLQUFBLEVBQWlCO0FBQzlDLFdBQUEsd0NBQ29DLEtBRHBDLE1BQUEsR0FBQSxrQ0FBQSxHQUNnRixLQURoRixHQUFBLEdBQUEsR0FBQSxHQUFBLEtBQUEsR0FBQSxrRkFBQSxHQUd1QixLQUh2QixLQUFBLEdBQUEsZ0RBQUEsR0FJOEIsS0FKOUIsS0FBQSxHQUFBLDhEQUFBLEdBSzBDLEtBTDFDLElBQUEsR0FBQSxhQUFBLEdBSytELEtBTC9ELElBQUEsR0FBQSwwQ0FBQTtBQURvQixJQUFBLEVBQUEsSUFBQSxDQUFyQixFQUFxQixDQUFyQjtBQVdBOzs7Ozs7a0JBbkJtQixLOzs7Ozs7Ozs7Ozs7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QSxHQUFMLEdBQUs7O0FBQzNDLEtBQUksVUFBQSxLQUFKLENBQUE7QUFDQSxRQUFBLGdCQUFBLENBQUEsUUFBQSxFQUFrQyxZQUFXO0FBQzVDLGVBQUEsT0FBQTtBQUNBLFlBQVUsV0FBQSxFQUFBLEVBQVYsUUFBVSxDQUFWO0FBRkQsRUFBQTtBQUlBOztrQkFFYyxjOzs7Ozs7OztBQ2JmOzs7O0FBSUEsU0FBQSxlQUFBLENBQUEsRUFBQSxFQUE2QjtBQUM1QixNQUFLLE1BQU0sU0FBWCxlQUFBOztBQUVBLFVBQUEsU0FBQSxHQUFxQjtBQUNwQixTQUFPLEdBQVAsU0FBQTtBQUNBOztBQUVELFVBQUEsR0FBQSxHQUFlO0FBQ2QsTUFBSSxjQUFKLENBQUEsRUFBcUI7QUFDcEIsTUFBQSxRQUFBLENBQUEsQ0FBQSxFQUFlLENBQUMsS0FBQSxHQUFBLENBQVUsY0FBVixDQUFBLEVBQWhCLENBQWdCLENBQWhCO0FBQ0EseUJBQUEsR0FBQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO2tCQUNjLGU7Ozs7Ozs7O2tCQ1pTLEc7QUFQeEI7Ozs7Ozs7QUFPZSxTQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLFFBQUEsRUFBa0M7QUFDaEQsS0FBSSxNQUFNLElBQVYsY0FBVSxFQUFWOztBQUVBLEtBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxHQUFBO0FBQ0EsS0FBQSxZQUFBLEdBQUEsSUFBQTtBQUNBLEtBQUEsSUFBQTtBQUNBLEtBQUEsTUFBQSxHQUFhLFlBQVc7QUFDdkIsTUFBQSxRQUFBLEVBQWM7QUFDYixZQUFTLElBQVQsUUFBQTtBQUNBO0FBSEYsRUFBQTtBQUtBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHMge1xyXG5cdHN0YXRpYyBkYXRhU2V0KGRhdGEpIHtcclxuXHRcdGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3J0Zm9saW9cIik7XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcblx0XHRcdC8vIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxpc3RFbGVtLmlubmVySFRNTCA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGA8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1jYXRlZ29yeT1cIiR7aXRlbS5maWx0ZXJ9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybCgke2l0ZW0uaW1nfT8ke2luZGV4fSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxzIGFjY2VudFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3J9PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwibGluayBpY29uLXJpZ2h0LWJpZ1wiIGhyZWY9XCIke2l0ZW0ubGlua31cIiB0aXRsZT1cIiR7aXRlbS5saW5rfVwiPjwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkJztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgcG9ydGZvbGlvIGxpc3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XHJcblx0c3RhdGljIGRhdGFTZXQoZGF0YSkge1xyXG5cdFx0Y29uc3QgZmlsdGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyJyk7XHJcblx0XHRjb25zdCBmaWx0ZXJJdGVtc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ZpbHRlciAubGluaycpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGRlYWN0aXZhdGVJdGVtcygpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJJdGVtc0VsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZmlsdGVySXRlbXNFbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmaWx0ZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG5cdFx0XHRsZXQgX3QgPSBldi50YXJnZXQ7XHJcblx0XHRcdFxyXG5cdFx0XHR3aGlsZSAoX3QgJiYgX3QgIT0gZmlsdGVyKSB7XHJcblx0XHRcdFx0aWYgKF90Lm1hdGNoZXMoJy5saW5rJykpIHtcclxuXHRcdFx0XHRcdGxldCBrZXlXb3JkID0gX3QuZGF0YXNldC5rZXl3b3JkO1xyXG5cdFx0XHRcdFx0dmFyIG5ld0FyciA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB+aXRlbS5maWx0ZXIuaW5kZXhPZihrZXlXb3JkKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGVhY3RpdmF0ZUl0ZW1zKCk7XHJcblx0XHRcdFx0XHRfdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdENhcmQuZGF0YVNldChuZXdBcnIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoX3QpIHtcclxuXHRcdFx0XHRcdF90ID0gX3QucGFyZW50RWxlbWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFRvb2xzIGZyb20gJy4uL3Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ0biB7XHJcblx0c3RhdGljIGluaXQoKSB7XHJcblx0XHRjb25zdCBuYXZCdG5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1idG4nKTtcclxuXHRcdGNvbnN0IGFzaWRlTGVmdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNpZGUtbGVmdCcpO1xyXG5cdFx0Y29uc3QgY29udGVudEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cdFx0Y29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKTtcclxuXHJcblx0XHRsZXQgaXNPcGVuTWVudSA9IGZhbHNlO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1lbnVEcmF3ZXJUb2dnbGUoKSB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uY2xhc3NMaXN0W2lzT3Blbk1lbnUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJyk7XHJcblx0XHRcdGJhY2tkcm9wLmNsYXNzTGlzdFtpc09wZW5NZW51ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xyXG5cdFx0XHRhc2lkZUxlZnRFbGVtLmNsYXNzTGlzdFtpc09wZW5NZW51ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ29wZW4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRuYXZCdG5FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRpc09wZW5NZW51ID0gIWlzT3Blbk1lbnU7XHJcblx0XHRcdG1lbnVEcmF3ZXJUb2dnbGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0aXNPcGVuTWVudSA9IGZhbHNlO1xyXG5cdFx0XHRtZW51RHJhd2VyVG9nZ2xlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKiogV2lkdGggdmVydGljYWwgc2Nyb2xsYmFyICovXHJcblx0XHRmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aChlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRuYXZCdG5FbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHJcblx0XHRUb29scy5vbldpbmRvd1Jlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdG5hdkJ0bkVsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cdFx0fSwgMCk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi4vdG9vbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZVR1bmluZyB7XHJcblx0c3RhdGljIGluaXQoKSB7XHJcblx0XHRjb25zdCB0aGVtZVR1bnVuZ0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nJyk7XHJcblx0XHRjb25zdCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZS10dW5pbmcgLnJhbmdlJyk7XHJcblx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdHVuaW5nIC50dW5pbmctYnRuJyk7XHJcblx0XHRjb25zdCBjb250ZW50RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblx0XHRjb25zdCBhY2NlbnRFbGVtZW50c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjZW50Jyk7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHJcblx0XHRpZiAoISh0aGVtZVR1bnVuZ0VsZW0uc3R5bGUuZmlsdGVyID0gYGh1ZS1yb3RhdGUoMGRlZylgKSkge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5LiBDb2xvciBhZGp1c3Rpbmcgbm90IHdvcmtpbmcgb24gdGhpcyBicm93c2VyLicpXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNvbG9yID0ge1xyXG5cdFx0XHRodWU6IDAsXHJcblx0XHRcdGludmVydDogMFxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChUb29scy5sb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xyXG5cdFx0XHRpZiAoc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEh1ZScpKSB7XHJcblx0XHRcdFx0Y29sb3IuaHVlID0gK3N0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRIdWUnKTtcclxuXHRcdFx0XHRodWVSb3RhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RvcmFnZS5nZXRJdGVtKCdjb2xvckFjY2VudEludmVydCcpKSB7XHJcblx0XHRcdFx0Y29sb3IuaW52ZXJ0ID0gK3N0b3JhZ2UuZ2V0SXRlbSgnY29sb3JBY2NlbnRJbnZlcnQnKTtcclxuXHRcdFx0XHRpbnZlcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlzQWN0aXZlID0gYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR0aGVtZVR1bnVuZ0VsZW0uY2xhc3NMaXN0W2lzQWN0aXZlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaHVlUm90YXRlKCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFjY2VudEVsZW1lbnRzTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsID0gYWNjZW50RWxlbWVudHNMaXN0W2ldO1xyXG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRlbC5zdHlsZS5maWx0ZXIgPSBgaHVlLXJvdGF0ZSgke2NvbG9yLmh1ZX1kZWcpIGludmVydCgke2NvbG9yLmludmVydH0lKWA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBpbnZlcnQoKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZW50RWxlbWVudHNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Y29uc3QgZWwgPSBhY2NlbnRFbGVtZW50c0xpc3RbaV07XHJcblx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuXHRcdFx0XHRcdGVsLnN0eWxlLmZpbHRlciA9IGBodWUtcm90YXRlKCR7Y29sb3IuaHVlfWRlZykgaW52ZXJ0KCR7Y29sb3IuaW52ZXJ0fSUpYDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNldEFjY2VudChlKSB7XHJcblx0XHRcdGxldCBfdCA9IGUudGFyZ2V0O1xyXG5cdFx0XHRpZiAoX3QuaWQgPT0gJ2NvbG9yLWh1ZS1yb3RhdGUnKSB7XHJcblx0XHRcdFx0Y29sb3IuaHVlID0gX3QudmFsdWU7XHJcblx0XHRcdFx0aHVlUm90YXRlKCk7XHJcblx0XHRcdFx0c3RvcmFnZS5zZXRJdGVtKCdjb2xvckFjY2VudEh1ZScsIF90LnZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoX3QuaWQgPT0gJ2NvbG9yLWludmVydCcpIHtcclxuXHRcdFx0XHRjb2xvci5pbnZlcnQgPSBfdC52YWx1ZTtcclxuXHRcdFx0XHRpbnZlcnQoKTtcclxuXHRcdFx0XHRzdG9yYWdlLnNldEl0ZW0oJ2NvbG9yQWNjZW50SW52ZXJ0JywgX3QudmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZXRBY2NlbnQpO1xyXG5cdFx0cmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0QWNjZW50KTtcclxuXHJcblx0XHQvKiogV2lkdGggdmVydGljYWwgc2Nyb2xsYmFyICovXHJcblx0XHRmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aChlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGVtZVR1bnVuZ0VsZW0uc3R5bGUucmlnaHQgPSBnZXRTY3JvbGxiYXJXaWR0aChjb250ZW50RWxlbSkgKyAncHgnO1xyXG5cclxuXHRcdFRvb2xzLm9uV2luZG93UmVzaXplKCgpID0+IHtcclxuXHRcdFx0dGhlbWVUdW51bmdFbGVtLnN0eWxlLnJpZ2h0ID0gZ2V0U2Nyb2xsYmFyV2lkdGgoY29udGVudEVsZW0pICsgJ3B4JztcclxuXHRcdH0sIDApO1xyXG5cclxuXHRcdGlmIChUb29scy5JRURldGVjdCgpID49IDExKSB7XHJcblx0XHRcdHJhbmdlLmlubmVySFRNTCA9IGA8c3Bhbj5Tb3JyeSwgSUUxMSBhbmQgdGhlIHZlcnNpb24gYmVsb3cgZG8gbm90IHN1cHBvcnQgdGhpcyBmZWF0dXJlPC9zcGFuPmA7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJjb25zb2xlLndhcm4oXCJIZWxsbyBwZW9wbGUhXCIpO1xyXG5cclxuaW1wb3J0ICogYXMgVG9vbHMgZnJvbSAnLi90b29scydcclxuaW1wb3J0ICcuL2xpYnMvcG9seWZpbHMnO1xyXG4vLyBpbXBvcnQgY2FyZERhdGEgZnJvbSAnLi4vZGF0YS9jYXJkcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9DYXJkJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2NvcmUvRmlsdGVyJztcclxuaW1wb3J0IE5hdkJ0biBmcm9tICcuL2NvcmUvTmF2QnRuJztcclxuaW1wb3J0IFRoZW1lVHVuaW5nIGZyb20gJy4vY29yZS9UaGVtZVR1bmluZyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0VG9vbHMueGhyKCdjYXJkcy5qc29uJywgJ2pzb24nLCAoe2NhcmRzfSkgPT4ge1xyXG5cdFx0Q2FyZC5kYXRhU2V0KGNhcmRzKTtcclxuXHRcdEZpbHRlci5kYXRhU2V0KGNhcmRzKTtcclxuXHR9KTtcclxuXHJcblx0TmF2QnRuLmluaXQoKTtcclxuXHRUaGVtZVR1bmluZy5pbml0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuXHRjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKTtcclxuXHRwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcImVuZFwiKTtcclxufSk7IiwiLy8gRWxlbWVudC5tYXRjaGVzKCk7XHJcblxyXG4oZnVuY3Rpb24oZWwpIHtcclxuXHRlbC5tYXRjaGVzIHx8IChlbC5tYXRjaGVzID0gZWwubWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgbWF0Y2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxyXG5cdFx0XHR0aCA9IHRoaXM7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChtYXRjaGVzLCBmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWwgPT09IHRoO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pKEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHJcbi8vIEVsZW1lbnQuY2xvc2VzdCgpXHJcblxyXG4oZnVuY3Rpb24oZWwpIHtcclxuXHRlbC5tYXRjaGVzID0gZWwubWF0Y2hlcyB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwub01hdGNoZXNTZWxlY3RvciB8fCBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcblx0ZWwuY2xvc2VzdCA9IGVsLmNsb3Nlc3QgfHwgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xyXG5cdFx0aWYgKCF0aGlzKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICh0aGlzLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gdGhpcztcclxuXHRcdGlmICghdGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBudWxsXHJcblx0XHR9IGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKVxyXG5cdH07XHJcbn0oRWxlbWVudC5wcm90b3R5cGUpKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJRURldGVjdCgpIHtcclxuXHR2YXIgc0FnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcclxuXHJcblx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cclxuXHRpZiAoSWR4ID4gMClcclxuXHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XHJcblxyXG5cdC8vIElmIElFIDExIHRoZW4gbG9vayBmb3IgVXBkYXRlZCB1c2VyIGFnZW50IHN0cmluZy5cclxuXHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpXHJcblx0XHRyZXR1cm4gMTE7XHJcblxyXG5cdGVsc2VcclxuXHRcdHJldHVybiAwOyAvL0l0IGlzIG5vdCBJRVxyXG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBvbldpbmRvd1Jlc2l6ZSB9IGZyb20gJy4vb25XaW5kb3dSZXNpemUnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjcm9sbFBhZ2VUb1RvcCB9IGZyb20gJy4vc2Nyb2xsUGFnZVRvVG9wJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb2NhbFN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUF2YWlsYWJsZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSUVEZXRlY3QgfSBmcm9tICcuL0lFRGV0ZWN0JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB4aHIgfSBmcm9tICcuL3hocic7IiwiLyoqXHJcbiAqINCf0YDQvtCy0LXRgNC60LAg0L/QvtC00LTQtdGA0LbQutC4IGxvY2FsU3RvcmFnZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XHJcblx0bGV0IHN0b3JhZ2U7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcblx0XHRzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcclxuXHRcdHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcclxuXHRcdFx0XHQvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcblx0XHRcdFx0ZS5jb2RlID09PSAyMiB8fFxyXG5cdFx0XHRcdC8vIEZpcmVmb3hcclxuXHRcdFx0XHRlLmNvZGUgPT09IDEwMTQgfHxcclxuXHRcdFx0XHQvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcclxuXHRcdFx0XHQvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XHJcblx0XHRcdFx0ZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxyXG5cdFx0XHRcdC8vIEZpcmVmb3hcclxuXHRcdFx0XHRlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXHJcblx0XHRcdC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXHJcblx0XHRcdHN0b3JhZ2UubGVuZ3RoICE9PSAwO1xyXG5cdH1cclxufSIsIi8qKlxyXG4gKiDQntC70LXQttC40LLQsNC10YIg0LjQt9C80LXQvdC10L3QuNC1INGA0LDQt9C80LXRgNC+0LIg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsCDQuCDQstGL0LfRi9Cy0LDQtdGCIGNiINC10YHQu9C4INC/0YDQuNCy0YvRgdC10LvQviDQstGA0LXQvNGPINGD0LrQsNC30LDQvdC90L7QtSDQsiBkdXJhdGlvblxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiDQutCw0LvQu9Cx0Y3QulxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0g0LjQvdGC0LXRgNCy0LDQuyDQsiDQvNC40LvQu9C40YHQuNC60YPQvdC00LDRhVxyXG4gKi9cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoY2IsIGR1cmF0aW9uID0gMzAwKSB7XHJcblx0bGV0IHRpbWVvdXQ7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0dGltZW91dCA9IHNldFRpbWVvdXQoY2IsIGR1cmF0aW9uKTtcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25XaW5kb3dSZXNpemU7IiwiLyoqXHJcbiAqINCf0YDQvtC60YDRg9GC0LrQsCDRjdC+0LXQvNC10L3RgtCwINCy0LLQtdGA0YVcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbCDQmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINC/0YDQvtC60YDRg9GC0LrQuFxyXG4gKi9cclxuZnVuY3Rpb24gc2Nyb2xsUGFnZVRvVG9wKGVsKSB7XHJcblx0ZWwgPSBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcclxuXHRcdHJldHVybiBlbC5zY3JvbGxUb3A7XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIHJ1bigpIHtcclxuXHRcdGlmIChnZXRTY3JvbGwoKSA+IDApIHtcclxuXHRcdFx0ZWwuc2Nyb2xsQnkoMCwgLU1hdGgubWF4KChnZXRTY3JvbGwoKSAvIDYpLCAxKSk7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShydW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRydW4oKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxQYWdlVG9Ub3A7IiwiLyoqXHJcbiAqIFhNTEh0dHBSZXh1ZXN0XHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcclxuICogQHBhcmFtIHtvYmplY3R9IGNhbGxiYWNrIFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geGhyKHVybCwgdHlwZSwgY2FsbGJhY2spIHtcclxuXHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG5cdHhoci5yZXNwb25zZVR5cGUgPSB0eXBlO1xyXG5cdHhoci5zZW5kKCk7XHJcblx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGNhbGxiYWNrKSB7XHJcblx0XHRcdGNhbGxiYWNrKHhoci5yZXNwb25zZSk7XHJcblx0XHR9XHJcblx0fTtcclxufSJdfQ==