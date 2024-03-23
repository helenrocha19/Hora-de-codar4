function cadastrar() {
  let lista = [];
  while (true) {
    var estudante = prompt("Digite o nome do estudante:");
    if (estudante == "pare") {
      break;
    }
    lista.push(estudante);
  }
  var listaNome = document.getElementById("listaNome");

  if (lista.length > 0) {
    let listaNomeHtml = "<ul>";
    lista.forEach(function (item) {
      listaNomeHtml += `<li> ${item} </li>`;
    });
    listaNomeHtml += "</ul>";
    listaNome.innerHTML = listaNomeHtml;
  }
}

function planetas() {
  var planetas = ["terra", "Marte", "Plutão", "Vênus", "jupiter", "saturno"];
  var digitarPlaneta = prompt("Digite o nome de um planeta:");
  if (planetas.includes(digitarPlaneta)) {
    alert("Seu planeta está na lista");
  } else {
    alert("Seu planeta não está na lista");
  }
}

function criaListaHtml() {

}

var listaDeFrutas = ["Maça", "Banana", "Pera", "Morango", "Tomate"];
function renderizar() {

let lista = document.getElementById("listaDasFrutas");
lista.innerHTML = "";
let ul = document.createElement("ul");

listaDeFrutas.forEach(function (item) {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
lista?.appendChild(ul);
}

function verificarFruta() {
    let frutaDigitada = prompt('fruta: ');
    let index = listaDeFrutas.indexOf(frutaDigitada);
    if (listaDeFrutas.includes(frutaDigitada)) {
        listaDeFrutas.splice(index, 1)
        alert("Fruta foi retirada da lista")
        renderizar();
    } else if (!listaDeFrutas.includes(frutaDigitada)) {
        alert("Fruta indisponível no nosso mercado")
    } 
    else {
        alert("Lista de comprasfinalizada")
    }
    
}

renderizar();