function Ex1(){
	const num = document.querySelector('#numEx1')
	const res = document.querySelector('#resEx1')
	let age = Number.parseInt(num.value, 10)
	age++
	res.innerHTML = age	
}

function Ex2(){
	const num_a = document.querySelector('#numEx2_a')
	const num_b = document.querySelector('#numEx2_b')
	const res = document.querySelector('#resEx3')
	let a = Number.parseInt(num_a.value, 10)
	let b = Number.parseInt(num_b.value, 10)
	res.innerHTML = a % b
}

function Ex3(){
	const num = document.querySelector('#numEx3')
	const res = document.querySelector('#resEx3')
	let age = Number.parseInt(num.value, 10)
	if(age >= 18) res.innerHTML = "Welcome"
	else res.innerHTML = "Отказ"
}

function Ex4(){
	const num = document.querySelector('#numEx4')
	const res = document.querySelector('#resEx4')
	let age = Number.parseInt(num.value, 10)
	age++
	res.innerHTML = age
	if(num.value === ""){
		res.innerHTML = 0
	}
}

function Ex5(){
	function heightCheck(height){
		return height >= 140
	}
	const num = document.querySelector('#numEx5')
	const res = document.querySelector('#resEx5')
	
	res.innerHTML = heightCheck(num.value)
}