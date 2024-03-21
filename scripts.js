var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(event){
    //alert("Voce clicou no botão!!!!");//

    const url = `http://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
    .then(resposta=>resposta.json)
    .then(dados=>alert(dados.bairro))


    saida.innerText = "Nome: " +nome.value + 
    "\n Email " + email.value +
    "\n Telefone " + telefone.value +
    "\n cep " + cep.value +
    "\n logradouro " + logradouro.value +
    "\n numero " + numero.value +
    "\n complemento " + complemento.value +
    "\n bairro " + bairro.value +
    "\n cidade " + cidade.value +
    "\n estado " + estado.value ;

}
