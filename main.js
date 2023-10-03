let registroEmail = document.querySelector('#registroEmail')
let registroSenha = document.querySelector('#registroSenha')
let botaoDeRegistro = document.querySelector('#registrar')
let senhaCheck01 = document.querySelector('#senhaCheck01')
let senhaCheck02 = document.querySelector('#senhaCheck02')
let senhaCheck03 = document.querySelector('#senhaCheck03')
let senhaCheck04 = document.querySelector('#senhaCheck04')
let emailError = document.querySelector('#emailError')
let senhaRequisitos = document.querySelector('#senhaRequisitos')



function verificarInput() {
    if (registroEmail.value == '' || registroSenha.value == '') {
        botaoDeRegistro.classList.add('opacity-50', 'cursor-not-allowed')
    } else {
        botaoDeRegistro.classList.remove('opacity-50', 'cursor-not-allowed')
    }
}

function verificarEmail() {
    let email = registroEmail.value

    if (email.indexOf('@', '.') !== -1) {
        return true
    } else {
        emailError.innerHTML = 'E-mail inválido'
        emailError.classList.add('text-raspberry', 'text-sm')
        return false
    }
}

function verificarSenha() {
    const senha = registroSenha.value
    const caracteresEspeciais = /[~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]/

    let senhaValida = false

    if (/[a-z]/.test(senha)) {
        senhaCheck01.classList.add('text-raspberry')
        senhaValida = true
    } else {
        senhaCheck01.classList.remove('text-raspberry')
        senhaValida = false
    }
    if (/[A-Z]/.test(senha)) {
        senhaCheck02.classList.add('text-raspberry')
    } else {
        senhaCheck02.classList.remove('text-raspberry')
        senhaValida = false
    }
    if (caracteresEspeciais.test(senha)) {
        senhaCheck03.classList.add('text-raspberry')
    } else {
        senhaCheck03.classList.remove('text-raspberry')
        senhaValida = false
    }
    if (senha.length >= 8 && senha.length <= 12) {
        senhaCheck04.classList.add('text-raspberry')
    } else {
        senhaCheck04.classList.remove('text-raspberry')
        senhaValida = false
    }
    return senhaValida
}

function validarRegistro() {
    let emailValido = verificarEmail()
    let senhaValida = verificarSenha()

    if(emailValido && senhaValida){
        emailError.innerHTML = ''
        senhaError.innerHTML = ''
        senhaRequisitos.innerHTML = `<div class="text-center"><box-icon name='balloon' type='solid' animation='fade-up' color='#d81e5b'></box-icon>
        <p class="text-xl">Sua conta foi criada com sucesso!</div>`

    } else {
        if (senhaValida == false){
            senhaError.innerHTML = 'E-mail ou senha inválidos.'
            senhaError.classList.add('text-raspberry', 'text-sm')
    }
}
}

window.addEventListener('load', verificarInput)
window.addEventListener('input', verificarInput)
registroSenha.addEventListener('input', verificarSenha)
botaoDeRegistro.addEventListener('click', validarRegistro)
