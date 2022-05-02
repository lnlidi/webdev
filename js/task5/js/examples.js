
function Input(name, func, plach) {
	return ` <input type="text" id="${name}" autocomplete="off" onchange="${func}()" onkeyup="${func}()" placeholder="${plach}"> `
}


/* 1 */
function func1() {
	const sel = document.getElementById('select').value
	document.getElementById("result").innerHTML = getRate(sel)
}

function ex1() {
	let func = "getRate"
	document.getElementById("title").innerHTML = "getRate"
	document.getElementById("desc").innerHTML =
	"1. Напишите функцию getRate, чтобы она возвращала стоимость " +
	"эфира в выбранной валюте. Выбор оформить с помощью &lt;select>"
	document.getElementById("examp").innerHTML = "<pre>" +
	"const etherium = {<br>" +
	"  usd: 2811,<br>" +
	"  rub: 200612,<br>" +
	"  eur: 2666<br>" +
	"}</pre>"
	document.getElementById("result").innerHTML = "Select something!"
	document.getElementById('inputs').innerHTML =
	'<select id="select" onchange="func1()">' +
		'<option selected disabled>Выберите валюту</option>' +
		'<option value="usd">USD</option>' +
		'<option value="rub">RUB</option>' +
		'<option value="eur">EUR</option>' +
	'</select>'
}


/* 2 */
function func2() {
	const l = document.getElementById('input1').value
	const c = document.getElementById('input2').value
	document.getElementById("result").innerHTML = getValues({lang: l, course: c})
}

function ex2() {
	let func = "func2"
	document.getElementById("title").innerHTML = "getValues"
	document.getElementById("desc").innerHTML =
	'2. Напишите функцию getValues, чтобы она возвращала массив, ' +
	'из значений входящего объекта, написанные капсом (заглавными буквами)'
	document.getElementById("examp").innerHTML = "<pre>" +
	`getValues({<br>` +
	`  lang: "JavaScript",<br>` +
	`  course: "third"<br>` +
	`})</pre>` + 
	`// ['JAVASCRIPT', 'THIRD']`
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input1", func, "Введите язык")
	document.getElementById('inputs').innerHTML += Input("input2", func, "Введите курс")
}


/* 3 */
function func3() {
	const s = document.getElementById('input1').value
	const b = document.getElementById('input2').value
	const f = document.getElementById('input3').value
	document.getElementById("result").innerHTML = getInfo({street: s, building: b, flat: f})
}

function ex3() {
	let func = "func3"
	document.getElementById("title").innerHTML = "getInfo"
	document.getElementById("desc").innerHTML =
	'3. Напишите функцию getInfo, чтобы она возвращала объект с ' +
	'ключами, используя короткую запись'
	document.getElementById("examp").innerHTML = "<pre>" +
	"const adress = {<br>" +
	"  street: 'Lenina',<br>" +
	"  building: 1,<br>" +
	"  flat: 40<br>" +
	"}</pre>"

	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input1", func, "Улица")
	document.getElementById('inputs').innerHTML += Input("input2", func, "Корпус")
	document.getElementById('inputs').innerHTML += Input("input3", func, "Квартира")
}


/* 4 */
function func4() {
	const i = document.getElementById('input1').value
	const n1 = document.getElementById('input2').value
	const t = document.getElementById('input3').value
	const n2 = document.getElementById('input4').value
	const obj1 = {
		id: i,
		name: n1
	}
	const obj2 = {
		type: t,
		name: n2
	}
	document.getElementById("result").innerHTML = joinArrays({id: i, name1: n1}, {type: t, name2: n2})
	document.getElementById("result").innerHTML += "<br>Version 2: "
	document.getElementById("result").innerHTML += joinArrays2(obj1, obj2)
}

function ex4() {
	let func = "func4"
	document.getElementById("title").innerHTML = "joinArrays"
	document.getElementById("desc").innerHTML =
	"4. Напишите функцию joinArrays, чтобы она возвращала новый " +
	"объект на основе двух входящих"
	document.getElementById("examp").innerHTML = "<pre>" +
	"const obj1 = {<br>" +
	"  id: 1,<br>" +
	"  name: 'object1'<br>" +
	"}<br>" +
	"const obj2 = {<br>" +
	"  type: 'number',<br>" +
	"  name: 'object2'<br>" +
	"}</pre>" +
	"const newObject = (...obj1, ...obj2)<br>" +
	"console.log((newObject)<br>" +
	"// {id: 1, name: 'object2', type: 'number'}"

	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input1", func, "obj1.id")
	document.getElementById('inputs').innerHTML += Input("input2", func, "obj1.name")
	document.getElementById('inputs').innerHTML += Input("input3", func, "obj2.type")
	document.getElementById('inputs').innerHTML += Input("input4", func, "obj2.name")
}