
/* 1 */
function getRate(sel) {
	if(sel === "usd") return 2811 + "$"
	if(sel === "rub") return 200612 + "₽"
	if(sel === "eur") return 2666 + "€"
}

/* 2 */
function getValues({lang, course}) {
	var arr = []
	arr.push(lang.toUpperCase())
	arr.push(course.toUpperCase())
	return arr
}

/* 3 */
function getInfo({street, building, flat}) {
	const adress = {
		street,
		building,
		flat
	}
	return Object.entries(adress)
}

/* 4 */
function joinArrays({id, name1}, {type, name2}) {
	const obj1 = {
		id,
		name: name1
	}
	const obj2 = {
		type,
		name: name2
	}
	const newObject = {...obj1, ...obj2}
	return Object.entries(newObject)
}

/* 4.2 */
function joinArrays2(obj1, obj2) {
	const newObject = {...obj1, ...obj2}
	return Object.entries(newObject)
}