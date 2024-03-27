function testSiNonVide(variable) {
    if (!variable) {
        throw new Error("Value too small!")
    }
}

let firstName = document.getElementById("first-name")

firstName.addEventListener("change", () => {
    try {
        testSiNonVide(firstName.value)
    } catch (error) {
        console.log(error.message)
    }
})