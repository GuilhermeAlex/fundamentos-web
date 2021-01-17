/* ACESSO AO DOM
Linguagem javascript usa o CASE SENSITIVE = reconhece letras maiusculas e minusculas

por tag = getElementByTagName()
por Id = getElementById()
por Nome = getElementsByName()
por Classe = getElementsByClassName()
por Seletor = querySelector()
*/
/*Abaixo a parte de validação--- Acessando o DOM*/
let nome = window.document.getElementById("txtNome") /*acessando o elemento com id nome--- Para chamar precisa do window nesse primeiro*/
let telefone = document.querySelector("#txtTelefone") /* Puxando o email para aplicar a validação*/
/*Informando ao Usuario o envio do formulário ou seugerindo ajuste--- seuindo o raciocinio de cima */
let nomeOk = false /* O false é para informar uma variavel boolean*/
let telefoneOk = false
let mapa = document.querySelector("#mapa")



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
/*Função da parte do Telefone */
function validaTelefone() {
    let txtTelefone = document.querySelector("#txtTelefone") /*Recebendo o Id Telefone */

    if (telefone.value.length < 11) {
        txtTelefone.innerHTML = "Telefone Inválido"
        txtTelefone.style.color = "red"
    } else {
        txtTelefone.innerHTML = "Telefone Válido"
        txtTelefone.style.color = "green"
         telefoneOk = true /* Da linha 42 até 45 o Telefone está valido*/
    }
} 

/*Função da parte do envio */
/*Essa função vai verificar se tudo ta ok e dar uma mensagem de envio ou alerta caso o usuario coloque algo incorreto */

function enviar() {
    if (nomeOk == true && telefoneOK == true) {
        alert ("Formulario enviado com sucesso, dentro de 24 horas entraremos em contao!")
    } else {
        alert("Preencha o formmulario corretamente...")
    }
}

/*function enviar() {
    if (nomeOk == true && telefoneOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }
*/
/*FUNÇÃO ZOOM NO MAPA */
function mapaZoom() {
mapa.style.width = "800px"
mapa.style.height = "550px"
}

function mapaNormal() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}