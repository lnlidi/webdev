
/* 1 */
function createUser(f_name, f_email) {
	class User {
		// Привязка параметра конструктора к переменной экземпляра.
		constructor(name, email) {
			this.name = name
			this.email = email
		}
		// Метод
		sayHi() {
			return `Name: ${this.name}, Email: ${this.email}`
		}
	}

	let user = new User(f_name, f_email)
	return user.sayHi()
}

console.log("1.")
console.log(createUser("Bob", "google@gmail.com"))



/* 2 */
class User {
	constructor(id, name) {
		this.id = id
		this.name = name
	}

	getId() {
		return `#${this.id}`
	}

	isAdmin() {
		if(this.name.toLowerCase().includes("admin")) return true
		return false
	}
}

console.log("2.")
const user1 = new User(100, "Admin")
console.log(user1.getId()) // "#100
console.log(user1.isAdmin()) // true
const user2 = new User(217, "SimpleUser")
console.log(user2.getId()) // "#217"
console.log(user2.isAdmin()) // false



/* 3 */
class AreaOfCircle {
	constructor(value) {
		this.radius = value
	}
	get radius() {
		return this._radius
	}

	set radius(value) {
		this._radius = Number.parseFloat((value * 2 * 3.14).toFixed(5), 10)
	}
}

console.log("3.")
const area = new AreaOfCircle(2)
console.log(area.radius) // 12.56
area.radius = 10
console.log(area.radius) // 62.8



/* 4 */
class Course {
	constructor(value) {
		this.value = value
	}

	static getGrade(value) {
		if(value > 3) return true
		return false
	}

	getCertificate() {
		if(Course.getGrade(this.value)) return "Выдать сертификат"
		else return "Курс не пройден"
	}
}

console.log("4.")
const course1 = new Course(5)
console.log(course1.getCertificate()) // Выдать сертификат

const course2 = new Course(3)
console.log(course2.getCertificate()) // Курс не пройден