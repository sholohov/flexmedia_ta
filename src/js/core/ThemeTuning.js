import * as Tools from '../tools'

export default class ThemeTuning {
	static init() {
		const themeTunungElem = document.querySelector('#theme-tuning');
		const range = document.querySelector('#theme-tuning .range');
		const btn = document.querySelector('#theme-tuning .tuning-btn');
		const contentElem = document.querySelector('#content');
		const accentElementsList = document.querySelectorAll('.accent');
		const storage = window.localStorage;

		if (!(themeTunungElem.style.filter = `hue-rotate(0deg)`)) {
			btn.addEventListener('click', () => {
				alert('Sorry. Color adjusting not working on this browser.')
			});
			return;
		}

		let color = {
			hue: 0,
			invert: 0
		}

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

		btn.addEventListener('click', () => {
			let isActive = btn.classList.toggle('active');
			themeTunungElem.classList[isActive ? 'add' : 'remove']('active');
		});

		function hueRotate() {
			for (let i = 0; i < accentElementsList.length; i++) {
				const el = accentElementsList[i];
				requestAnimationFrame(() => {
					el.style.filter = `hue-rotate(${color.hue}deg) invert(${color.invert}%)`;
				});
			}
		}

		function invert() {
			for (let i = 0; i < accentElementsList.length; i++) {
				const el = accentElementsList[i];
				requestAnimationFrame(() => {
					el.style.filter = `hue-rotate(${color.hue}deg) invert(${color.invert}%)`;
				});
			}
		}

		function setAccent(e) {
			let _t = e.target;
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

		Tools.onWindowResize(() => {
			themeTunungElem.style.right = getScrollbarWidth(contentElem) + 'px';
		}, 0);
	}
}