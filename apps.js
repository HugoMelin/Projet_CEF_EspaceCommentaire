function testSiNonVide(variable) {
    if (!variable) {
        throw new Error("Value too small!")
    }
}

function ecouteTryCatch(element) {
    element.addEventListener('change', () => {
        try {
            testSiNonVide(element.value)
            console.log(element.value)
    } catch (error) {
        console.log(element.name + " : " + error.message)
    }
    })
}

let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let message = document.getElementById("message")

ecouteTryCatch(firstName)
ecouteTryCatch(lastName)
ecouteTryCatch(message)