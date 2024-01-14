//  fontawesome site de refencia para icones 

var nomeErro = document.getElementById('nome-erro')
var foneErro = document.getElementById('fone-erro');
var emailErro = document.getElementById('email-erro');
var messageErro = document.getElementById('message-erro');
var submitErro = document.getElementById('submit-erro');

function validaNome() {
    var nome = document.getElementById('contato-nome').value;

    if (nome.length == 0) {
        nomeErro.innerHTML = 'Nome eh obrigatorio';
        return false;
    }

    if (!nome.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nomeErro.innerHTML = 'Escreva o nome completo';
        return false;
    }

    // incluindo icone de check se ok
    // site de referencia 
    nomeErro.innerHTML = '<i class="material-icons">check</i>';
    return true;
}

function validaFone() {
    var fone = document.getElementById('contato-fone').value;

    if (fone.length == 0) {
        foneErro.innerHTML = 'fone eh obrigatorio';
        return false;
    }

    if (fone.length !== 10) {
        foneErro.innerHTML = 'Fone deve ter 10 digitos';
        return false;
    }

    if (!fone.match(/^[0-9]{10}$/)) {
        foneErro.innerHTML = 'Apenas numeros';
        return false;
    }
    // incluindo icone de check se ok
    // site de referencia 
    foneErro.innerHTML = '<i class="material-icons">check</i>';
    return true;
}