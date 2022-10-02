// Задание 1
console.log("Задание 1")
const getNickName = nik => { 
    if(nik[0] == '@') return nik
    else return '@' + nik
  }

//проверка
if ((getNickName("@oziaba") === "@oziaba") && (getNickName("python.hub") === "@python.hub")) {
    console.log("Правильно")
    document.getElementById("ex1").innerHTML = "1. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "1. Неправильно"
}

// Задание 2
console.log("Задание 2")
const getCurrency = price => {
    if(price.includes("$")) return "Доллар"
    else
    if(price.includes("€")) return "Евро"
    else return "Недоступно"
}

//проверка
if ((getCurrency("$100") === "Доллар" && getCurrency("5€") === "Евро" && getCurrency("30 USD") === "Недоступно" )) {
    console.log("Правильно")
    document.getElementById("ex2").innerHTML = "2. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "2. Неправильно"
}


// Задание 3
console.log("Задание 3")
const getSlug = title => {
    let t = ''
    for(i = 0; i < 15 && i < title.length; i++) t += title[i];
    return t.replace(' ', '-').toLowerCase()
}

//проверка
if (getSlug("Red Bull Gives You Wings") === "red-bull gives " &&
    getSlug("Maybe it's Maybelline") === "maybe-it's mayb" &&
    getSlug("Just Do It") === "just-do it" &&
    getSlug("Challenge Everything") === "challenge-every") {
    console.log("Правильно")
    document.getElementById("ex3").innerHTML = "3. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "3. Неправильно"
}

// Задание 4
console.log("Задание 4")
const getTodosNumber = todos => { 
    t = todos.split(',')
    return t.length
  }

//проверка
if (getTodosNumber("Купить хлеб,Купить сыр,Приготовить ужин") === 3 &&
    getTodosNumber("Установить кондиционер,Заправить картридж") === 2) {
    console.log("Правильно")
    document.getElementById("ex4").innerHTML = "4. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "4. Неправильно"
}

// Задание 5
console.log("Задание 5")
const data = [["Bitcoin", 40468],
["Ethereum", 3005],
["Solana", 106],
["Tether", 1]]
function renderTableRows(rows) {
    return `<tr>${rows.map(item => `<td>${item}</td>`).join('')}</tr>`.replaceAll(',', "</td><td>")
  }

//проверка
if (renderTableRows(data) === "<tr><td>Bitcoin</td><td>40468</td><td>Ethereum</td><td>3005</td><td>Solana</td><td>106</td><td>Tether</td><td>1</td></tr>") {
    console.log("Правильно")
    document.getElementById("ex5").innerHTML = "5. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "5. Неправильно"
}

// Задание 6
console.log("Задание 6")
const notAnExcellent = grades => { 
    return grades.some(gr => gr < 3)
  }

//проверка
if (notAnExcellent([4, 2, 3, 5]) === true &&
    notAnExcellent([3, 4, 5, 3]) === false) {
    console.log("Правильно")
    document.getElementById("ex6").innerHTML = "6. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "6. Неправильно"
}

// Задание 7
console.log("Задание 7")
const demoteUser = roles => { 
    roles.splice(0, 1)
    return roles
  }

const user = ["Admin", "Moderator", "Editor"]

//проверка
const diff = (a, b) => {
    if (a.length != b.length) return false; // Массивы разной длины не равны

    for(var i = 0; i < a.length; i++) // Цикл по всем элементам
      if (a[i] !== b[i]) return false; // Если хоть один элемент отличается, массивы не равны
   
    return true; // Иначе они равны
}
if (diff(demoteUser(user), ["Moderator", "Editor"]) &&
    diff(demoteUser(user), ["Editor"])) {
    console.log("Правильно")
    document.getElementById("ex7").innerHTML = "7. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "7. Неправильно"
}

// Задание 8
console.log("Задание 8")
const multiply = nums => {
    return nums.reduce(function(sum, current) {
        return sum * current;
    }, 1);
}
//проверка
if (multiply([123, 78]) === 9594 &&
    multiply([504, 503, 807]) === 204584184) {
    console.log("Правильно")
    document.getElementById("ex8").innerHTML = "8. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "8. Неправильно"
}

// Задание 9
console.log("Задание 9")
const getUserInfo = block => {
    const [name, age] = block
    return `Пользователю ${name} - ${age} лет.`
  }


//проверка
if (getUserInfo(["Nina", 25]) === "Пользователю Nina - 25 лет." &&
    getUserInfo(["Anna", 11]) === "Пользователю Anna - 11 лет.") {
    console.log("Правильно")
    document.getElementById("ex9").innerHTML = "9. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "9. Неправильно"
}

// Задание 10
console.log("Задание 10")
const joinArrays = (array1, array2) => {
    return [...array1, ...array2]
  }

//проверка
if (diff(joinArrays(["Save", "Money"], ["Live", "Better"]), ['Save', 'Money', 'Live', 'Better']) &&
diff(joinArrays(['When', 'There'], ['Is', 'No', 'Tomorrow']), ['When', 'There', 'Is', 'No', 'Tomorrow'])){
    console.log("Правильно")
    document.getElementById("ex10").innerHTML = "10. Правильно"
} else {
    console.log("Плохо")
    document.getElementById("ex1").innerHTML = "10. Неправильно"
}
