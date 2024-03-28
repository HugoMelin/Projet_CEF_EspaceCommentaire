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

function afficheMessageErreur() {
    let alertMessage = document.getElementById("error-message")
    alertMessage.style.display = ""
}

function supprimeMessageErreur() {
    let alertMessage = document.getElementById("error-message")
    alertMessage.style.display = "none"
}

function testSiNonVide(variable) {
    try {
        if (variable){
            supprimeMessageErreur()
        } else {
            throw new Error("Variable is too small")
        }
    } catch (e) {
        afficheMessageErreur()
    }
}

//Ecoute des champs du formulaire
let firstName = document.getElementById("first-name")
firstName.addEventListener('input', (event) => {
    testSiNonVide(firstName.value)
})

let lastName = document.getElementById("last-name")
lastName.addEventListener('input', (event) => {
    testSiNonVide(lastName.value)
})

let message = document.getElementById("message")
message.addEventListener('input', (event) => {
    testSiNonVide(message.value)
})

//Gestion du click sur le boutton en ajoutant le commentaire
let button = document.querySelector("button")
button.addEventListener('click', (event) => {
    event.preventDefault()
    if (!firstName.value || !lastName.value || !message.value) {
        afficheMessageErreur()
    } else {
        createComment(firstName.value,lastName.value,message.value)
        firstName.value=""
        lastName.value=""  
        message.value=""
    }
})