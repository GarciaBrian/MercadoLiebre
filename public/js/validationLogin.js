function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', () => {

    let $name = qs('#nombre'),
        $pass = qs('#pass'),
        $nameErrors = qs('#nameErrors'),
        $passErrors = qs('#passErrors')

    $name.addEventListener('blur', function () {
        switch (true) {
            case !$name.value.trim():
                $nameErrors.innerHTML = 'Debes completar el campo nombre';
                $nameErrors.classList.add('msg-error')
                break;
            default:
                $nameErrors.innerHTML = "";
                break
        }
    })
 
    $pass.addEventListener('blur', function () {
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'Debes completar el campo contraseña';
                $passErrors.classList.add('msg-error')
                break;
            default:
                $passErrors.innerHTML = "";
                break
        }
    })

})