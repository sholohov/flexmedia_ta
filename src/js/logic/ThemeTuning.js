import * as Tools from '../tools'

export default class ThemeTuning {
	static init() {
		const themeTunungElem = document.querySelector('#theme-tuning');
		const range = document.querySelector('#theme-tuning .range');
		const btn = document.querySelector('#theme-tuning .tuning-btn');
		const portfolioElem = document.querySelector('#portfolio');

		btn.addEventListener('click', () => {
			let isActive = btn.classList.toggle('active');
			range.classList[isActive ? 'add' : 'remove']('active');
		});

		/** Width vertical scrollbar */
		function getScrollbarWidth(el) {
			return el.offsetWidth - el.clientWidth;
		}

		themeTunungElem.style.right = getScrollbarWidth(portfolioElem) + 'px';

		Tools.onWindowResize(() => {
			themeTunungElem.style.right = getScrollbarWidth(portfolioElem) + 'px';
		}, 0);
	}
}