import * as Tools from '../tools';

export default class NavBtn {
	static init() {
		const navBtnElem = document.querySelector('#nav-btn');
		const asideLeftElem = document.querySelector('#aside-left');
		const contentElem = document.querySelector('#content');
		const backdrop = document.querySelector('#backdrop');

		let isOpenMenu = false;

		function menuDrawerToggle() {
			navBtnElem.classList[isOpenMenu ? 'add' : 'remove']('active');
			backdrop.classList[isOpenMenu ? 'add' : 'remove']('active');
			asideLeftElem.classList[isOpenMenu ? 'add' : 'remove']('open');
		}

		navBtnElem.addEventListener('click', () => {
			isOpenMenu = !isOpenMenu;
			menuDrawerToggle();
		});
		
		backdrop.addEventListener('click', () => {
			isOpenMenu = false;
			menuDrawerToggle();
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