var nome ="Marcelo Eltz";
var cargo ="CTO - Growdev";

var nomeHtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("text-1");
var texto2 = document.getElementById("text-2");

function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml (cargo){
    cargohtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function CliqueNoProjetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function CliqueNoSobre(){
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);
