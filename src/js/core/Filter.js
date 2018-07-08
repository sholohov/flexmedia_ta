import Card from '../components/Card';

/**
 * Filter portfolio list
 */
export default class Filter {
	static dataSet(data) {
		const filterEl = document.querySelector('#filter');
		const filterItemsEl = document.querySelectorAll('#filter .link');

		function deactivateItems() {
			for (let i = 0; i < filterItemsEl.length; i++) {
				filterItemsEl[i].classList.remove('active');
			}
		}
		
		filterEl.addEventListener('click', (ev) => {
			let _t = ev.target;
			
			while (_t && _t != filter) {
				if (_t.matches('.link')) {
					let keyWord = _t.dataset.keyword;
					var newArr = data.filter((item) => {
						return ~item.filter.indexOf(keyWord);
					});
					deactivateItems();
					_t.classList.add('active');
					Card.dataSet(newArr);
				}
				if (_t) {
					_t = _t.parentElement;
				}
			}
		});
	}
}