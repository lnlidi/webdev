
/* 1 */
function getNickName(nick) {
	const result = document.getElementById("result")
	if(nick[0] != '@') return '@' + nick
	return nick
}

/* 2 */
function getCurrency(string) {
	if(string.includes("$")) return "Доллар"
	if(string.includes("€")) return "Евро"
	return "Недоступно"
}

/* 3 */
function getSlug(string) {
	var sum = ''
	b = true
	s = string
	for(i = 0; i < s.length && i < 15; i++) {
		if(s[i] == ' ' && b == true){
			b = false
			sum += '-'
		}
		else sum += s[i].toLowerCase()
	}
	return sum
}


/* 4 */
function getTodosNumber(string) {
	arr = string.split(',')
	return arr.length
}

/* 5 */
function renderTableRows(arr) {
	const code = `<tr>${arr.map(item => `<td>${item}</td>`).join('')}</tr>`;
	return code.replaceAll(',', '</td><td>')
}


/* 6 */
function notAnExcellent(arr) {
	for(i = 0; i < arr.length; i++){
		if(arr[i] <= 2) return true
	}
	return false
}


/* 7 */
function deleteUserRole(user) {
	user.splice(0, 1)
	return user
}


/* 8 */
function multiply(arr) {
	let sum = 1
	arr.forEach(function (el){
		sum *= el
	})
	return sum
}


/* 9 */
function getUserInfo(user) {
	let [name, age] = user
	return `Пользователю ${name} - ${age} лет.`
}


/* 10 */
function joinArrays(arr1, arr2) {
	var arr = [...arr1, ...arr2] 
	return arr
}