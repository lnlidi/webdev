
function Input(type, name, func, plach, auto) {
	return ` <input type="${type}" id="${name}" autocomplete="${auto}" onchange="${func}()" onkeyup="${func}()" placeholder="${plach}"> `
}


/* 1 */
function func1() {
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	document.getElementById("result").innerHTML = createUser(name, email)
}

function ex1() {
	let func = "func1"
	document.getElementById("title").innerHTML = "createUser"
	document.getElementById("desc").innerHTML =
	"1. Напишите функцию createUser, которая должна возвращать " +
	"новый экземпляр класса User со значениями переменных name " +
	"и email, принятых функцией"
	document.getElementById("examp").innerHTML = ""
	document.getElementById("result").innerHTML = "Input something!"
	document.getElementById('inputs').innerHTML = Input("text", "name", func, "Name", "off")
	document.getElementById('inputs').innerHTML += Input("email", "email", func, "Email", "on")
}


/* 2 */
function func2() {
	const id = document.getElementById('id').value
	const name = document.getElementById('name').value
	const user = new User(id, name)
	document.getElementById("result").innerHTML = "ID: " + user.getId()
	document.getElementById("result").innerHTML += ", isAdmin: " + user.isAdmin()
}

function ex2() {
	let func = "func2"
	document.getElementById("title").innerHTML = "getId, isAdmin"
	document.getElementById("desc").innerHTML =
	'1. Напишите класс User с двумя методами экземпляров: <br>' +
	'- getId, который должен возвращать номер пользователя с приставкой # <br>' +
	'- isAdmin, который должен возвращать true, если переменная ' +
	'экземпляра type имеет значение "isAdmin"'
	document.getElementById("examp").innerHTML = 
	`const user1 = new User(100, "Admin") <br>` +
 	`user1.getId() // "#100 <br>` +
	`user1.isAdmin() // true <br>` +
	`const user2 = new User(217, "SimpleUser") <br>` +
	`user2.getId() // "#217" <br>` +
	`user2.isAdmin() // false <br>`
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("number", "id", func, "ID", "off")
	document.getElementById('inputs').innerHTML += Input("text", "name", func, "Name", "off")
}


/* 3 */
function func3() {
	const r = document.getElementById('number').value
	const area = new AreaOfCircle(r)
	//console.log(area.radius)
	document.getElementById("result").innerHTML = area.radius
	area.radius = r * 2
	//console.log(area.radius)
	document.getElementById("result").innerHTML += ", Raduis * 2: " + area.radius
}

function ex3() {
	let func = "func3"
	document.getElementById("title").innerHTML = "AreaOfCircle"
	document.getElementById("desc").innerHTML =
	'3. Напишите класс AreaOfCircle с геттером и сеттером, который ' +
	'задает внутреннюю переменную экземпляра _area, содержащую ' +
	'площадь круга с входным радиусом'
	document.getElementById("examp").innerHTML =
	"const area = new AreaOfCircle(2) <br>" +
	"console.log(area.radius) // 12.56 <br>" +
	"area.radius = 10 <br>" +
	"console.log(area.radius) // 62.8 <br>"

	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("number", "number", func, "Radius", "off")
}


/* 4 */
function func4() {
	const c = document.getElementById('number').value
	const course = new Course(c)
	document.getElementById("result").innerHTML = course.getCertificate()
}

function ex4() {
	let func = "func4"
	document.getElementById("title").innerHTML = "Course"
	document.getElementById("desc").innerHTML =
	"4. Напишите класс Course, в котором метод getCertificate(), " +
	"выведет ‘Выдать сертификат’, если метод getGrade(), вернет true, " +
	"если оценка 4 или 5, и если false – то ‘Курс не пройден’"
	document.getElementById("examp").innerHTML = 
	"const course = new Course(5) <br>" + 
	"console.log(course.getCertificate()) // Выдать сертификат <br>" +
	"<br>" +
	"const course = new Course(3) <br>" +
	"console.log(course.getCertificate()) // Курс не пройден <br>"

	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("number", "number", func, "Course", "off")
}