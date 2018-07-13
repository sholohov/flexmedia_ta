/**
 * Олеживает изменение размеров окна браузера и вызывает cb если привысело время указанное в duration
 * @param {function} cb каллбэк
 * @param {number} [duration=300] интервал в миллисикундах
 */

let resizeList = [];

function onWindowResize(cb, duration = 300) {
	resizeList.push({cb, duration});
	let timeout;
	window.addEventListener('resize', function() {
		clearTimeout(timeout);
		timeout = setTimeout(cb, duration);
	});
}

export default onWindowResize;