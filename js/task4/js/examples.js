
function Input(name, func) {
	return " <input type=\"text\" id=\"" + name + "\" autocomplete=\"off\" onchange=\"" + func + "()\" onkeyup=\"" + func + "()\"> "
}


/* 1 */

function func1() {
	const string = document.getElementById('input')
	document.getElementById("result").innerHTML = getNickName(string.value)
}

function ex1() {
	let func = "func1"
	document.getElementById("title").innerHTML = "getNickName"
	document.getElementById("desc").innerHTML = " " +
	"1. Напишите функцию getNickName, чтобы она возвращала " +
	"принятый ник. Ник должен начинаться с символа @, даже если " +
	"его нет в принятом параметре."
	document.getElementById("examp").innerHTML = " " +
	"getNickName(\"@oziaba\") // \"@oziaba\"<br>" +
	"getNickName(\"python.hub\") // \"@python.hub \""
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 2 */

function func2() {
	const string = document.getElementById('input')
	document.getElementById("result").innerHTML = getCurrency(string.value)
}

function ex2() {
	let func = "func2"
	document.getElementById("title").innerHTML = "getCurrency"
	document.getElementById("desc").innerHTML = " " +
	"2. Напишите функцию getCurrency, чтобы она возвращала " +
	"\"Доллар\", если в принятой строке price есть знак доллара ($), " +
	"\"Евро\", если в параметре обнаружен значок евро (€), и " +
	"\"Недоступно\" в остальных случаях."
	document.getElementById("examp").innerHTML = " " +
	"getCurrency(\"$100\") // \"Доллар\"<br>"+
	"getCurrency(\"5€\") // \"Евро\"<br>"+
	"getCurrency(\"30 USD\") // \"Недоступно\""
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 3 */

function func3() {
	const string = document.getElementById('input')
	document.getElementById("result").innerHTML = getSlug(string.value)
}

function ex3() {
	let func = "func3"
	document.getElementById("title").innerHTML = "getSlug"
	document.getElementById("desc").innerHTML = " " +
	"3. Напишите функцию getSlug, чтобы она возвращала слаг, " +
	"составленный на основе принятой строки title. Слаг не должен " +
	"быть длиннее 15 символов (символы сверх лимита игнорируются), " +
	"не может содержать заглавных букв и первый пробел должен быть " +
	"заменен на дефис -."
	document.getElementById("examp").innerHTML = " " +
	"getSlug(\"Red Bull Gives You Wings\") // \"red-bull gives \"<br>"+
	"getSlug(\"Maybe it's Maybelline\") // \"maybe-it's mayb\"<br>"+
	"getSlug(\"Just Do It\") // \"just-do it\"<br>"+
	"getSlug(\"Challenge Everything\") // \"challenge-every\""
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 4 */

function func4() {
	const string = document.getElementById('input')
	document.getElementById("result").innerHTML = getTodosNumber(string.value)
}

function ex4() {
	let func = "func4"
	document.getElementById("title").innerHTML = "getTodosNumber"
	document.getElementById("desc").innerHTML = " " +
	"4. Напишите функцию getTodosNumber, чтобы она возвращала количество " +
	"пунктов туду-листа в строке в формате значений, разделенных запятыми, из " +
	"параметра. Пример строки в формате \"первая задача,вторая задача\"."
	document.getElementById("examp").innerHTML = " " +
	"getTodosNumber(\"Купить хлеб,Купить сыр,Приготовить ужин\") // 3<br>"+
	"getTodosNumber(\"Установить кондиционер,Заправить картридж\") // 2"
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 5 */

function func5() {
	const string = document.getElementById('input')
	var string_arr = string.value.split(' ')
	var arr = []
	var j = 0
	for(i = 0; i < string_arr.length; i++){
		if(i % 2 == 0) {
			arr[j] = []
			arr[j][0] = string_arr[i]
		}
		else {
			arr[j][1] = parseInt(string_arr[i])
			j++
		}
	}
	document.getElementById("result").innerHTML = renderTableRows(arr)
}

function ex5() {
	let func = "func5"
	document.getElementById("title").innerHTML = "renderTableRows"
	document.getElementById("desc").innerHTML = " " +
	"5. Напишите функцию renderTableRows, которая на основе параметра rows, " +
	"представляющего из себя массив массивов, для каждого его элемента будет " +
	"рендерить такой HTML."
	document.getElementById("examp").innerHTML = " " +
	"const data = [<br>" +
	"[\"Bitcoin\", 40468],<br>"+
	"[\"Ethereum\", 3005],<br>"+
	"[\"Solana\", 106],<br>"+
	"[\"Tether\", 1]<br>"+
	"]<br>"+
	"const html = renderTableRows(data)<br>"+
	"console.log(html)<br>"+
	"<pre>" +
	"&lt;tr><br>" +
	" &lt;td>Bitcoin&lt;/td> &lt;td>40468&lt;/td><br>" +
	" &lt;td>Ethereum&lt;/td> &lt;td>3005&lt;/td><br>" +
	" &lt;td>Solana&lt;/td> &lt;td>106&lt;/td><br>" +
	" &lt;td>Tether&lt;/td> &lt;td>1&lt;td><br>" +
	"&lt;/tr></pre>"
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 6 */

function func6() {
	const string = document.getElementById('input')
	var string_arr = string.value.split(' ')
	var arr = []
	string_arr.forEach(function(el){
		arr.push(parseInt(el, 10))
	})
	document.getElementById("result").innerHTML = notAnExcellent(arr)
}

function ex6() {
	let func = "func6"
	document.getElementById("title").innerHTML = "notAnExcellent"
	document.getElementById("desc").innerHTML = " " +
	"6. Напишите функцию notAnExcellent, чтобы она возвращала true, " +
	"если хотя бы одна из оценок ниже трех."
	document.getElementById("examp").innerHTML = " " +
	"notAnExcellent([3, 4, 5, 3]) // false<br>" +
	"notAnExcellent([4, 2, 3, 5]) // true"
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 7 */

function func7() {
	const string = document.getElementById('input')
	var user = string.value.split(' ')
	document.getElementById("result").innerHTML = deleteUserRole(user)
}

function ex7() {
	let func = "func7"
	document.getElementById("title").innerHTML = "deleteUserRole"
	document.getElementById("desc").innerHTML = " " +
	"7. Напишите функцию deleteUserRole, чтобы она удаляла первый " +
	"элемент в массиве ролей. Функция должна возвращать новую " +
	"редакцию массива, не содержащую удаленную роль."
	document.getElementById("examp").innerHTML = " " +
	"\"const user = [\"Admin\", \"Moderator\", \"Editor\"]<br>" +
	"deleteUserRole(user) // [\"Moderator\", \"Editor\"]<br>" +
	"deleteUserRole(user) // [\"Editor\"]"
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 8 */

function func8() {
	const string = document.getElementById('input')
	var string_arr = string.value.split(' ')
	var arr = []
	string_arr.forEach(function(el){
		arr.push(parseInt(el, 10))
	})
	document.getElementById("result").innerHTML = multiply(arr)
}

function ex8() {
	let func = "func8"
	document.getElementById("title").innerHTML = "multiply"
	document.getElementById("desc").innerHTML = " " +
	"8. Напишите функцию multiply, которая будет умножать числа из " +
	"массива и возвращать результат."
	document.getElementById("examp").innerHTML = " " +
	"multiply([123, 78]) // 9594<br>" +
	"multiply([504, 503, 807]) // 204584184"
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 9 */

function func9() {
	const string = document.getElementById('input')
	var string_arr = string.value.split(' ')
	string_arr[1] = parseInt(string_arr[1])	
	document.getElementById("result").innerHTML = getUserInfo(string_arr)
}

function ex9() {
	let func = "func9"
	document.getElementById("title").innerHTML = "getUserInfo"
	document.getElementById("desc").innerHTML = " " +
	"9. Напишите функцию getUserInfo, которая будет " +
	"деструктурировать переменные name и age из параметра user и " +
	"возвращать сообщение, информирующее имя пользователя и его " +
	"возраст."
	document.getElementById("examp").innerHTML = " " +
	"getUserInfo([\"Nina\", 25]) // \"Пользователю Nina - 25 лет.\"<br>" +
	"getUserInfo([\"Anna\", 11]) // \"Пользователю Anna - 11 лет.\""
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input", func)
}


/* 10 */

function func10() {
	const string1 = document.getElementById('input1')
	const string2 = document.getElementById('input2')
	var arr1 = string1.value.split(' ')
	var arr2 = string2.value.split(' ')
	
	document.getElementById("result").innerHTML = joinArrays(arr1, arr2)
}

function ex10() {
	let func = "func10"
	document.getElementById("title").innerHTML = "joinArrays"
	document.getElementById("desc").innerHTML = " " +
	"10. Напишите функцию joinArrays, чтобы она возвращала новый " +
	"массив, содержащий элементы array1 и array2, принятых в " +
	"параметрах."
	document.getElementById("examp").innerHTML = " " +
	"joinArrays([\"Save\", \"Money\"], [\"Live\", \"Better\"])<br>" +
	"// [\"Save\", \"Money\", \"Live\", \"Better\"]<br>" +
	"joinArrays([\"When\", \"There\"], [\"Is\", \"No\", \"Tomorrow\"])<br>" +
	"// [\"When\", \"There\", \"Is\", \"No\", \"Tomorrow\"]"
	document.getElementById("result").innerHTML = "Enter something!"
	document.getElementById('inputs').innerHTML = Input("input1", func) + Input("input2", func)
}