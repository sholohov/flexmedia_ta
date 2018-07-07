export default class Cards {
	static dataSet(data) {
		const listElem = document.querySelector("#portfolio");

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		listElem.innerHTML = data.map((item, index) => {
			return (
				`<li class="item" data-category="${item.filter}">
					<figure class="pic" style="background-image:url(${item.img}?${index})"></figure>
					<div class="details">
						<h3 class="title">${item.title}</h3>
						<div class="description">${item.descr}</div>
						<a class="link icon-right-big" href="${item.link}" title="${item.link}"></a>
					</div>
				</li>`
			);
		}).join('');
	}
}