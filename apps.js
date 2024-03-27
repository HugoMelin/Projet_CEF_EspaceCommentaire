function testSiNonVide(variable) {
    if (!variable) {
        throw new Error("Value too small!")
    }
}

function ecouteTryCatch(element) {
    element.addEventListener('change', () => {
        let alertMessage = document.getElementById("error-message")
        alertMessage.style.display = "none"
        try {
            testSiNonVide(element.value)
    } catch (error) {
        alertMessage.style.display = ""
        console.log(element.name + " : " + error.message)
    }
    })
}

let firstName = document.getElementById("first-name")
ecouteTryCatch(firstName)

let lastName = document.getElementById("last-name")
ecouteTryCatch(lastName)

let message = document.getElementById("message")
ecouteTryCatch(message)