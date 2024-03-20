let count = 0

function updateCount(){
    document.querySelector(".counter").textContent = `${count}`
}
function increaseCount(){
    count++
    updateCount()
}

function decreaseCount(){
    count--
    updateCount()
}