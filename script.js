const firstName = document.querySelector('#firstName')
const form = document.querySelector('#form')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const user = document.querySelector('#user')
const password = document.querySelector('#password')
const confirmPassword  = document.querySelector('#confirmPassword')
const submit = document.querySelector('#submit')

form.addEventListener('submit', () => {
    const res = {
        name: firstName.value,
        lastName: lastName.value,
        userName: user.value,
        email: email.value,
        password: password.value,
    }

    if (firstName.value.length === 0
        || lastName.value.length === 0
        || email.value.length === 0
        || user.value.length === 0
        || password.value.length === 0
        || confirmPassword.value.length === 0
    ){
        alert('Заполните все поля')
    } else if (password.value.length < 3) {
        alert("Пароль должен быть не меньше 3 символов")
    } else if (password.value.length > 8) {
        alert("Пароль должен быть не больше 8 символов")
    } else if (password.value !== confirmPassword.value) {
        alert('Пароли должны совпадать')
    } else {
        alert(`${JSON.stringify(res,null,2)}`)
    }
})