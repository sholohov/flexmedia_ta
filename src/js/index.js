console.warn("Hello people!");

// import * as Tools from './tools'
import cardData from '../data/cards';
import Card from './components/Card';
import Filter from './logic/Filter';
import NavBtn from './logic/NavBtn';

document.addEventListener("DOMContentLoaded", () => {
	Card.dataSet(cardData.cards);
	Filter.dataSet(cardData.cards);
	NavBtn.init();
});