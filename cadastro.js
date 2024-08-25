document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.cadastro-form');
    const senha = document.querySelector('#senha');
    const confirmaSenha = document.querySelector('#confirma-senha');
    const showPassword = document.querySelector('#show-password');
    const showConfirmaSenha = document.querySelector('#show-confirma-senha');


    showPassword.addEventListener('change', function() {
        if (this.checked) {
            senha.type = 'text';
        } else {
            senha.type = 'password';
        }
    });

    showConfirmaSenha.addEventListener('change', function() {
        if (this.checked) {
            confirmaSenha.type = 'text';
        } else {
            confirmaSenha.type = 'password';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (senha.value === confirmaSenha.value) {
            alert('Cadastro concluído!');
            window.location.href = 'index.html'; 

        } else {
            alert('As senhas não coincidem. Por favor, tente novamente.');
        }
    });
});
