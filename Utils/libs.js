export const getRandomInt = function (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const shuffle = function (a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

export const getObjByName = function (a, name) {
	for (let i = a.length - 1; i >= 0; i--) {
		if (a[i].name === name) return a[i];
	}
	return false;
}
export const capitalize = function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
export const booleanToString = function (string) {
	return string === 'true' ? true : false
}