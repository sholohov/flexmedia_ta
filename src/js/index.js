console.warn("Hello people!");

// import * as Tools from './tools'
import './libs/polyfils';
import cardData from '../data/cards';
import Card from './components/Card';
import Filter from './logic/Filter';
import NavBtn from './logic/NavBtn';
import ThemeTuning from './logic/ThemeTuning';

document.addEventListener("DOMContentLoaded", () => {
	Card.dataSet(cardData.cards);
	Filter.dataSet(cardData.cards);
	NavBtn.init();
	ThemeTuning.init();
});

window.addEventListener("load", () => {
	const preloader = document.querySelector("#preloader");
	preloader.classList.add("end");
});