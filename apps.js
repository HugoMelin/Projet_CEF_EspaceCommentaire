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

function createComment(firstName, lastName, message) {
    let div1 = document.createElement("div")
    div1.innerHTML = `<div class="flex space-x-4 text-sm text-gray-500">
    <div class="flex-1 py-10 border-t border-gray-200">
    <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
    <p>${message}</p>
    </div>
    </div>
    </div>`

    let commentList = document.getElementById("comment-list")
    commentList.appendChild(div1)
}

let firstName = document.getElementById("first-name")
ecouteTryCatch(firstName)

let lastName = document.getElementById("last-name")
ecouteTryCatch(lastName)

let message = document.getElementById("message")
ecouteTryCatch(message)