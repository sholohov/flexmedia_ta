export default class Cards {
	static dataSet(data) {
		const listElem = document.querySelector("#portfolio");

		function getRandomInt(min, max) {
			// return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		listElem.innerHTML = data.map((item, index) => {
			return (
				`<li class="item" data-category="${item.filter}" style="background-image:url(?${index})">
					<div class="details accent">
						<h3 class="title">${item.title}</h3>
						<div class="description">${item.descr}</div>
						<a class="link icon-right-big" href="${item.link}" title="${item.link}"></a>
					</div>
				</li>`
			);
		}).join('');
	}
}