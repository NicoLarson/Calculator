document.addEventListener("DOMContentLoaded", () => {

    let display = document.querySelector("main > div > p")

    const clear = document.querySelector("#operators > li:last-child"),
        equal = document.querySelector("#operators > li:nth-child(5)"),
        add = document.querySelector("#operators > li:nth-child(4)"),
        subtract = document.querySelector("#operators > li:nth-child(3)"),
        multiply = document.querySelector("#operators > li:nth-child(2)"),
        divide = document.querySelector("#operators > li:nth-child(1)")

    const numbers = [zero, one, two, three, four, five, six, seven, eight, nine, point] =
        [document.querySelector("#numbers > li:nth-child(10)"),
        document.querySelector("#numbers > li:nth-child(1)"),
        document.querySelector("#numbers > li:nth-child(2)"),
        document.querySelector("#numbers > li:nth-child(3)"),
        document.querySelector("#numbers > li:nth-child(4)"),
        document.querySelector("#numbers > li:nth-child(5)"),
        document.querySelector("#numbers > li:nth-child(6)"),
        document.querySelector("#numbers > li:nth-child(7)"),
        document.querySelector("#numbers > li:nth-child(8)"),
        document.querySelector("#numbers > li:nth-child(9)"),
        document.querySelector("#numbers > li:nth-child(11)")]

    let memo1 = "", memo2 = "", operation = false
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            if (operation == false && display.innerHTML == "") {
                memo1 += i
                display.innerHTML = memo1
            } else {
                memo2 += i
                display.innerHTML = memo2
            }
        })
    }

    //Additionner
    //enrengister 2 nombres differents
    add.addEventListener("click", () => {
        operation = true
    })
    equal.addEventListener("click", () => {
        display.innerHTML = memo1
        operation = false
    })
    let clearDisplay = ()=>{
        memo1 = ""
        memo2 = ""
        display.innerHTML = ""
        operation = false
    
    }
    clear.addEventListener("click", () => {
        memo1 = ""
        memo2 = ""
        display.innerHTML = ""
        operation = false
    })
})