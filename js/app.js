document.addEventListener("DOMContentLoaded", () => {

    const display = document.querySelector("main > div > p")

    const clearBtn = document.querySelector("#operators > li:last-child"),
        equalBtn = document.querySelector("#operators > li:nth-child(5)"),
        addBtn = document.querySelector("#operators > li:nth-child(4)"),
        subBtn = document.querySelector("#operators > li:nth-child(3)"),
        multBtn = document.querySelector("#operators > li:nth-child(2)"),
        divBtn = document.querySelector("#operators > li:nth-child(1)"),
        numbers = [zero, one, two, three, four, five, six, seven, eight, nine, point] =
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

    let num1 = "", num2 = "", operator = "", result = ""

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", () => {
            if (operator != "") {
                num2 += i
                display.innerHTML = num2
            } else if (result == "") {
                num1 += i
                display.innerHTML = num1
            }
        })
    }

    clearBtn.addEventListener('click', () => {
        num1 = "", num2 = "", operator = "", display.innerHTML = "", result = ""
    })

    const add = (num1, num2) => Number(num1) + Number(num2),
        sub = (num1, num2) => Number(num1) - Number(num2),
        mult = (num1, num2) => Number(num1) * Number(num2),
        div = (num1, num2) => Number(num1) / Number(num2)

    let operate = (num1, num2, operator) => {
        switch (operator) {
            case '+':
                display.innerHTML = add(num1, num2)
                break;
            case '-':
                display.innerHTML = sub(num1, num2)
                break;
            case '*':
                display.innerHTML = mult(num1, num2)
                break;
            case '/':
                display.innerHTML = div(num1, num2)
                break;
            default:
                console.log("Not working")
        }
    }

    // SI num1 et num2 et opérateur son rempli et que j'appui sur + 

    addBtn.addEventListener('click', () => {
        if (operator == "") {
            operator = '+'
        } else if (num1 != "" & num2 != "") {
            operate(num1, num2, operator)
            num1 = display.innerHTML
            result = num1
            num2 = ""
            operator = ''
        }
    })
    subBtn.addEventListener('click', () => {
        if (operator == "") {
            operator = '-'
        } else if (num1 != "" & num2 != "") {
            operate(num1, num2, operator)
            num1 = display.innerHTML
            result = num1
            num2 = ""
            operator = ''
        }
    })
    multBtn.addEventListener('click', () => {
        if (operator == "") {
            operator = '*'
        } else if (num1 != "" & num2 != "") {
            operate(num1, num2, operator)
            num1 = display.innerHTML
            result = num1
            num2 = ""
            operator = ''
        }
    })
    divBtn.addEventListener('click', () => {
        if (operator == "") {
            operator = '/'
        } else if (num1 != "" & num2 != "") {
            operate(num1, num2, operator)
            num1 = display.innerHTML
            result = num1
            num2 = ""
            operator = ''
        }
    })

    equalBtn.addEventListener('click', () => {
        operate(num1, num2, operator)
    })
})