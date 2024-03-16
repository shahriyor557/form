const fields = document.querySelectorAll(".form-group input")
const form = document.querySelector("form")

// input, blur, change

console.log(fields)

fields.forEach((field) => {
    field.addEventListener('input', (e) => {
        let target = e.target

        if(target.name === "name" && target.value.length <= 3){
            setError(target.nextElementSibling, "Ism 3 tadan ko'p")
        }else if(target.name === "surname" && target.value.length <= 4){
            setError(target.nextElementSibling, "Familiya 4 tadan ko'p")
        }else if(target.name === "email" && !target.value.includes("@")){
            setError(target.nextElementSibling, "Email xato kiritildi")
        }
        else{
            clearError(target.nextElementSibling)
        }

    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = new FormData(form)
    let data = Object.fromEntries(formData)
    console.log('submit', data)

})



function setError(errorElem, errorMessage){
    errorElem.innerText = errorMessage
}

function clearError(errorElem){
    errorElem.innerText = ""
}