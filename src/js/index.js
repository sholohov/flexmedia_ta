console.warn("Hello people!");

import * as Tools from './tools'
import './libs/polyfils';
import Card from './components/Card';
import Filter from './core/Filter';
import NavBtn from './core/NavBtn';
import ThemeTuning from './core/ThemeTuning';

document.addEventListener("DOMContentLoaded", () => {
	ThemeTuning.init();
	
	Tools.xhr('cards.json', 'json', ({cards}) => {
		Card.dataSet(cards);
		Filter.dataSet(cards);
		NavBtn.init();
		ThemeTuning.init(true);
	});
	
});

window.addEventListener("load", () => {
	const preloader = document.querySelector("#preloader");
	preloader.classList.add("end");
});