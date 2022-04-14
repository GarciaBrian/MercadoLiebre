let qs = function (elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', () => {
    let $inputName = qs('#nombre-completo'),
        $nameErrors = qs('#nameErrors'),
        $nickName = qs('#nick-name'),
        $nickNameErrors = qs('#nickNameErrors'),
        $date = qs('#fecha-nacimiento'),
        $dateErrors = qs('#dateErrors'),
        $domicilio = qs('#domicilio'),
        $domicilioErrors = qs('#domicilioErrors'),
        $email = qs('#inputEmail'),
        $emailErrors = qs('#emailErrors'),
        $password = qs('#contraseña'),
        $passwordErrors = qs('#passwordErrors'),
        $password2 = qs('#password'),
        $passwordErrors2 = qs('#passwordErrors2'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    let validationsErrors = false;

    $inputName.addEventListener('blur', function () {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'Debes colocar tu nombre';
                $nameErrors.classList.add('msg-error');
                validationsErrors = true
                break;
            case $inputName.value.length < 2:
                $nameErrors.innerHTML = "Tiene que tener al menos 2 caracteres";
                $nameErrors.classList.add('msg-error');
                validationsErrors = true;
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = 'Ingrese un nombre válido';
                $nameErrors.classList.add('msg-error');
                validationsErrors = true
                break;       
            default:
                $nameErrors.innerHTML = "";
                validationsErrors = false;
                break;
        }
    })

    $nickName.addEventListener('blur', function () {
        switch (true) {
            case !$nickName.value.trim():
                $nickNameErrors.innerHTML = 'Debes colocar el nombre de usuario';
                $nickNameErrors.classList.add('msg-error');
                validationsErrors = true
                break;
            case $nickName.value.length < 2:
                $nickNameErrors.innerHTML = "Tiene que tener al menos 2 caracteres";
                $nickNameErrors.classList.add('msg-error');
                validationsErrors = true;
                break;    
            default:
                $nickNameErrors.innerHTML = "";
                validationsErrors = false;
                break;
        }
    })

    $date.addEventListener('blur', function () {
        switch (true) {
            case !$date.value.trim():
                $dateErrors.innerHTML = 'Debes seleccionar tu fecha de nacimiento';
                $dateErrors.classList.add('msg-error');
                validationsErrors = true
                break;   
            default:
                $dateErrors.innerHTML = "";
                validationsErrors = false;
                break;
        }
    })

    $domicilio.addEventListener('blur', function () {
        switch (true) {
            case !$domicilio.value.trim():
                $domicilioErrors.innerHTML = 'Debes colocar tu domicilio';
                $domicilioErrors.classList.add('msg-error');
                validationsErrors = true
                break;    
            default:
                $domicilioErrors.innerHTML = "";
                validationsErrors = false;
                break;
        }
    })

    $email.addEventListener('blur', function () {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'Coloca tu email';
                $emailErrors.classList.add('msg-error')
                validationsErrors = true
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Coloca un email valido';
                $emailErrors.classList.add('msg-error')
                validationsErrors = true
                break
            default:
                $emailErrors.innerHTML = ''
                validationsErrors = false
                break;
        }
    })

    $password.addEventListener('blur', function () {
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = 'Coloca una contraseña';
                $passwordErrors.classList.add('msg-error')
                validationsErrors = true
                break;
            case $password.value.length < 8 :
                $passwordErrors.innerHTML = 'Tu contraseña debe tener al menos 8 caracteres';
                $passwordErrors.classList.add('msg-error')
                validationsErrors = true
                break;
            default:
                $passwordErrors.innerHTML = ''
                validationsErrors = false
                break;
        }
    })

    $password2.addEventListener('blur', function () {
        if ($password.value !== $password2.value) {
            $passwordErrors2.innerHTML = 'Las contraseñas no coinciden';
            $passwordErrors2.classList.add('msg-error')
        }else{
            $passwordErrors2.innerHTML = ''
        }
    })
})