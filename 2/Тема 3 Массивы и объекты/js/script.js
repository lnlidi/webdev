function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(el){
        sum += el
    })
    return sum;
}
document.getElementById("ex1").innerHTML = sumArray([4, 6, 16, 73, 5])


function getAboveZero(arr) {
    let otv = []
    arr.forEach(function(el){
        if(el >= 0) otv.push(el)
    })
    return otv
}
document.getElementById("ex2").innerHTML = getAboveZero ([1, -3, -2, 4, 10])


function getPonies(arr, search) {
    let t = true
    arr.forEach(function(el){
        if(el === search) {
            t = false
        }
    })
    if(t) return false
    else return search
}
document.getElementById("ex3").innerHTML = getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'], 'AppleJack')
document.getElementById("ex3").innerHTML += "<br>" + getPonies(['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'], 'Spike')


function isTxIncluded(arr, search){
    let t = true
    arr.forEach(function(el){
        if(el === search) {
            t = false
        }
    })
    if(t) return false
    else return true
}
document.getElementById("ex4").innerHTML = isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a")


function getSizes(arr) {
    let otv = []
    arr.forEach(function(el){
        otv.push(el.length)
    })
    return otv
}
document.getElementById("ex5").innerHTML = getSizes(["Moscow", "Coding", "School"]) 


function getWithSpaces(arr) {
    let otv = []
    otv[0] = ''
    otv[1] = 0
    arr.forEach(function(el){
        otv[0] += el + " "
        otv[1] += el.length
    })
    return otv
}
document.getElementById("ex6").innerHTML = getWithSpaces(["Moscow", "never", "sleep"])


function getEpisodes({title, episodes}) {
    return `Аниме ${title} включает ${episodes} серий`
}
document.getElementById("ex8").innerHTML = getEpisodes({title: "Code Geass", episodes: 25})


const triple = (x) => { return x * 3 }
document.getElementById("ex9").innerHTML = triple(2)


const getAvgGlucose = (arr) => {
    let checks = 0
    arr.forEach(function(el){
        checks += el
    })
    return (checks/arr.length).toFixed(1)
}
document.getElementById("ex10").innerHTML = getAvgGlucose([5.4, 8.1, 6.3, 4.9])