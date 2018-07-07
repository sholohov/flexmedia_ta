export default class ThemeTuning {
	static init() {
		const range = document.querySelector('#theme-tuning .range');
		const btn = document.querySelector('#theme-tuning .tuning-btn');

		btn.addEventListener('click', () => {
			let isActive = btn.classList.toggle('active');
			range.classList[isActive ? 'add' : 'remove']('active');
		});
	}
}