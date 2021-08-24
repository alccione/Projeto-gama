var formulario = document.getElementById("faleConosco");
formulario.onsubmit = validarDados;
function validarDados() {
    var nomeCompleto = document.getElementById("campo1");
    var email = document.getElementById("campo2");
    var telefone = document.getElementById("campo3");
    var mensagem = document.getElementById("campo4");
    var dados = document.getElementById("msg");
    if (nomeCompleto.value == "") {
        alert("O campo Nome não pode ficar vazio...");
        nomeCompleto.focus();
        return false;
    }
    if (email.value == "") {
        alert("O campo E-mail não pode ficar vazio...");
        email.focus();
        return false;
    }
    if (mensagem.value == "") {
        alert("O campo Mensagem não pode ficar vazio...");
        mensagem.focus();
        return false;
    }
    dados.innerHTML = "<h2>Agradecemos pelo contato e embreve retornaremos!</h2> <p>Nome: " + nomeCompleto.value + "<br> E-mail: " + email.value + "<br> Celular: " + telefone.value + "<br> Mensagem: " + mensagem.value + ".</p>";
    return false;
}