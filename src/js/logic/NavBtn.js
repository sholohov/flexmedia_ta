import * as Tools from '../tools';

export default class NavBtn {
	static init() {
		const navBtnElem = document.querySelector('#nav-btn');
		const asideLeftElem = document.querySelector('#aside-left');
		const contentElem = document.querySelector('#content');

		navBtnElem.addEventListener('click', () => {
			let isActive = navBtnElem.classList.toggle('active');
			asideLeftElem.classList[isActive ? 'add' : 'remove']('open');
		});

		/** Width vertical scrollbar */
		function getScrollbarWidth(el) {
			return el.offsetWidth - el.clientWidth;
		}

		navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';

		Tools.onWindowResize(() => {
			navBtnElem.style.right = getScrollbarWidth(contentElem) + 'px';
		}, 0);
	}
}