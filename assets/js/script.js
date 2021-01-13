/* ACESSO AO DOM
Linguagem javascript usa o CASE SENSITIVE = reconhece letras maiusculas e minusculas

por tag = getElementByTagName()
por Id = getElementById()
por Nome = getElementsByName()
por Classe = getElementsByClassName()
por Seletor = querySelector()
*/
/*Abaixo a parte de validação--- Acessando o DOM*/
let nome = window.document.getElementById("nome") /*acessando o elemento com id nome--- Para chamar precisa do window nesse primeiro*/
let email = document.querySelector("#email") /* Puxando o email para aplicar a validação*/
let assunto = document.querySelector("#assunto") /* Puxando o assunto para aplicar a validação*/
/*Informando ao Usuario o envio do formulário ou seugerindo ajuste--- seuindo o raciocinio de cima */
let nomeOk = false /* O false é para informar uma variavel boolean*/
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%" /* aumentando o tamanho do campo nome */
email.style.width = "100%" /* aumentando o tamanho do campo email */

/*----FUNÇÕES---- */
/* Função da parte do nome*/
function validaNome() {
    let txtNome = document.querySelector("#txtNome") /*Recebendo o Id Nome */
    if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido"
    txtNome.style.color = "red"
} else {
    txtNome.innerHTML = "Nome Válido"
    txtNome.style.color = "green"
    nomeOk = true /* Da linha 29 até 32 o nome está valido*/
}
}
/*Função da parte do Email */
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail") /*Recebendo o Id Email */

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
         emailOk = true /* Da linha 42 até 45 o email está valido*/
    }
} 
/*Função da parte do Assunto */
function validaAssunto () {
let txtAssunto = document.querySelector("#txtAssunto")

if(assunto.value.length >= 100) {
    txtAssunto.innerHTML = "O texto inserido é maior que 100 caracteres, digite novamente!"
    txtAssunto.style.color = "red"
    txtAssunto.style.display = "block"
} else {
    txtAssunto.style.display = "none"
    assuntoOk = true /* Da linha 56 até 58 o assunto está valido*/
}
}
/*Função da parte do envio */
/*Essa função vai verificar se tudo ta ok e dar uma mensagem de envio ou alerta caso o usuario coloque algo incorreto */

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }

function mapaZoom() {
mapa.style.width = "700px"
mapa.style.height = "500px"
}

function mapaNormal() {
    mapa.style.width = "500px"
    mapa.style.height = "350px"
}