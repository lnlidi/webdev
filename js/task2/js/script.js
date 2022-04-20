
/* 1 */
function getAge(){
	const num = document.querySelector('#inputEx1')
	const result = document.getElementById("resultEx1")
	let age = Number.parseInt(num.value, 10)
	
	if(age >= 0){
		age++
		result.innerHTML = age
	} else if(num.value === "") result.innerHTML = "Enter age!"
	else {
		num.value = 0
		result.innerHTML = 1
	}
}


/* 2 */
function getRemainder(){
	const in_a = document.querySelector('#inputEx2_a')
	const in_b = document.querySelector('#inputEx2_b')
	const result = document.getElementById("resultEx2")
	
	let a = Number.parseInt(in_a.value, 10)
	let b = Number.parseInt(in_b.value, 10)
	result.innerHTML = a % b

	if(in_a.value === "" && in_b.value === "") result.innerHTML = "No values!"
	else if(in_a.value === "") result.innerHTML = "No first value!"
	else if(in_b.value === "") result.innerHTML = "No second value!"
}


/* 3 */
function faceControl(){
	const num = document.querySelector('#inputEx3')
	const result = document.getElementById("resultEx3")
	let age = Number.parseInt(num.value, 10)
	
	if(age <= 0) num.value = 0

	if(age >= 18) result.innerHTML = "Welcome"
	else result.innerHTML = "Denied!"		

	if(num.value === "") result.innerHTML = "Enter age!"
}


/* 4 */
function getNextAge(){
	const num = document.querySelector('#inputEx4')
	const result = document.getElementById("resultEx4")
	let age = Number.parseInt(num.value, 10)
	
	if(age >= 0){
		age++
		result.innerHTML = age
	} else if(num.value === "") result.innerHTML = 0
	else {
		num.value = 0
		result.innerHTML = 1
	}
}


/* 5 */
function canRide(){
	function heightCheck(height){
		return height >= 140
	}

	const num = document.querySelector('#inputEx5')
	const result = document.getElementById("resultEx5")
	
	result.innerHTML = heightCheck(num.value)
}