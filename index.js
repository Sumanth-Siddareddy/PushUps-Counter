let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let setCount = 0
let target = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    setCount += 1
    target += count
    let countStr = "Set - "+setCount + ", reps - " +count+"<br><br>"
    saveEl.innerHTML += countStr
    countEl.textContent = 0
    count = 0

    if(target >= 100){
        console.log("Hit target");
        saveEl.innerHTML += "<strong> You Completed "+target+" Pushups, Well Done!!! </STRONG>"
    }
}
