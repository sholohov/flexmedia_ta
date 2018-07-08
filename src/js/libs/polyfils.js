// Element.matches();

(function(el) {
	el.matches || (el.matches = el.matchesSelector || function(selector) {
		var matches = document.querySelectorAll(selector),
			th = this;
		return Array.prototype.some.call(matches, function(el) {
			return el === th;
		});
	});
})(Element.prototype);

// Element.closest()

(function(el) {
	el.matches = el.matches || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector || el.webkitMatchesSelector;
	el.closest = el.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {
			return null
		} else return this.parentElement.closest(selector)
	};
}(Element.prototype));