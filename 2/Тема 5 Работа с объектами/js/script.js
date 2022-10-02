function getRate(eth, value) {
    const key = value
    return eth[value]
}

function selfunc() {
    const etherium = {
        usd: 2811,
        rub: 200612,
        eur: 2666
    }
    document.getElementById("ex1").innerHTML = getRate(etherium, document.getElementById("select").value)
}


function getValues({lang, course}) {
    const obj = {
        lang,
        course
    }
    let arr = []
    for (let key in obj) {
        arr.push(obj[key].toUpperCase());
    }
    return arr
}
document.getElementById("ex2").innerHTML = getValues({lang: "JavaScript", course: "third"})


function getInfo({street, building, flat}) {
    const adress = {
        street,
        building,
        flat
    }
    return Object.entries(adress)
}
document.getElementById("ex3").innerHTML = getInfo({street: 'Lenina', building: 1, flat: 40})


function joinArrays(obj1, obj2){
    const newObject = {...obj1, ...obj2}
    return Object.values(newObject)
}
document.getElementById("ex4").innerHTML = joinArrays({id: 1, name: "Tan"}, {course: 3, semestr: 6, name: "Yak"})