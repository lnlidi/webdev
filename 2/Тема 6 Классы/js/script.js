function createUser() {
    class User {
        constructor(name, email) {
            this.name = name
            this.email = email
        }
        getName() {
            return this.name
        }
        getEmail() {
            return this.email
        }
    }

    let user = new User("Tan", "TanYak@gmail.com")
    document.getElementById("ex1").innerHTML = user.getName() + "<br>" 
    document.getElementById("ex1").innerHTML += user.getEmail()
}
createUser()


class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    getId() {
        return "#" + this.id
    }
    isAdmin() {
        if(this.name.toLowerCase().includes("admin")) return true
        return false
    }
}
const user1 = new User(100, "Admin")
document.getElementById("ex2").innerHTML = user1.getId() + "<br>" // "#100"
document.getElementById("ex2").innerHTML += user1.isAdmin() + "<br>" // true
const user2 = new User(217, "SimpleUser")
document.getElementById("ex2").innerHTML += user2.getId() + "<br>" // "#217"
document.getElementById("ex2").innerHTML += user2.isAdmin() // false


class AreaOfCircle {
    constructor(value) {
        this.radius = value
    }
    get radius() {
        return Math.round(parseFloat(this._radius) * 100) / 100;
    }
    set radius(value) {
        this._radius = value * 2 * 3.14
    }
}
const area = new AreaOfCircle(2)
document.getElementById("ex3").innerHTML = area.radius + "<br>" // 12.56
area.radius = 10
document.getElementById("ex3").innerHTML += area.radius // 62.8


class Course {
    constructor(value) {
        this.value = value
    }

    static getGrade(value) {
        if(value >= 4) return true
        return false
    }
    getCertificate() {
        if(Course.getGrade(this.value)) return "Выдать сертификат"
        else return "Курс не пройден"
    }
}
const course5 = new Course(5)
document.getElementById("ex4").innerHTML = course5.getCertificate() + "<br>" // Выдать сертификат
const course3 = new Course(3)
document.getElementById("ex4").innerHTML += course3.getCertificate() // Курс не пройден