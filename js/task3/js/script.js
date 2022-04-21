
/* 1 */
function sumArray(){
	const string = document.querySelector('#inputEx1')
	const result = document.getElementById("resultEx1")
	var string_arr = string.value.split(' ')
	var sum = 0;
	string_arr.forEach(function(el){
		if(el != "") sum += parseInt(el, 10)
	})
	result.innerHTML = sum
}


/* 2 */
function getAboveZero(){
	const string = document.querySelector('#inputEx2')
	const result = document.getElementById("resultEx2")
	var string_arr = string.value.split(' ')
	result.innerHTML = ''
	string_arr.forEach(function(el){
		if((parseInt(el, 10)) >= 0) result.innerHTML += parseInt(el, 10) + " "
	})
}


/* 3 */
function getPonies(){
	const ponies = document.querySelector('#inputEx3_ponies')
	const poni = document.querySelector('#inputEx3_poni')
	const result = document.getElementById("resultEx3")
	var string_arr = ponies.value.split(' ')
	var string = poni.value
	result.innerHTML = ''
	string_arr.forEach(function(el){
		if(el === string) result.innerHTML = el
	})
}


/* 4 */
function isTxIncluded(){
	const bk = document.querySelector('#inputEx4_bk')
	const tx = document.querySelector('#inputEx4_tx')
	const result = document.getElementById("resultEx4")
	var string_arr = bk.value.split(' ')
	var string = tx.value
	string_arr.forEach(function(el){
		if(el === string) result.innerHTML = true
			else result.innerHTML = false
	})
}


/* 5 */
function getSizes(){
	const string = document.querySelector('#inputEx5')
	const result = document.getElementById("resultEx5")
	var string_arr = string.value.split(' ')
	result.innerHTML = ''
	string_arr.forEach(function(el){
		result.innerHTML += el.length + " "
	})
}


/* 6 */
function getWithSpaces(){
	const strings = document.querySelector('#inputEx6')
	const text = document.getElementById("resultEx6_text")
	const size = document.getElementById("resultEx6_size")
	var strings_arr = strings.value.split(' ')
	var sum = 0
	text.innerHTML = strings_arr.join(" ")
	strings_arr.forEach(function(el){
		sum += el.length
	})
	size.innerHTML = sum
}


/* 8 */
function getEpisodes(){
	function returnAnime(t = 'title', e = 'episodes'){
		return `Anime: ${t} episodes: ${e}`
	}
	const title = document.getElementById("inputEx8_title")
	const episodes = document.getElementById("inputEx8_episodes")
	const result = document.getElementById("resultEx8")
	result.innerHTML = returnAnime(title.value, episodes.value)
}


/* 9 */
function triple(){
	const num = document.getElementById("inputEx9")
	const result = document.getElementById("resultEx9")
	const calc = (a) => { return a * 3 }
	result.innerHTML = calc(num.value);
}


/* 10 */
function getAvgGlucose(){
	const string = document.querySelector('#inputEx10')
	const result = document.getElementById("resultEx10")
	var string_arr = string.value.split(' ')
	const checks = (arr) => {
		var sum = 0.0;
		arr.forEach(function(el){
			sum += parseFloat(el)
		})
		return sum / arr.length
	}
	result.innerHTML = (checks(string_arr)).toFixed(1)
}