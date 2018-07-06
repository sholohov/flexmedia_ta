export default class NavBtn {
	static init() {
		const navBtnElem = document.querySelector('#nav-btn');
		const asideLeftElem = document.querySelector('#aside-left');

		navBtnElem.addEventListener('click', () => {
			let isActive = navBtnElem.classList.toggle('active');
			asideLeftElem.classList[isActive ? 'add' : 'remove']('open');
		});
	}
}