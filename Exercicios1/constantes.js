/* DevAprender

let valor_ingreso = 20;
alert('Hello word!');
let nome = 'Rafael'
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionado = null;

let pessoa = {
    nome: 'Leandro',
    idade: 22,
    estaAprovado: true,
    sobrenome: 'Araújo da Silva'
};

// Arrays 

let familia = [true, 45, 'Jhonatan', 17];

alert(familia[2]);
console.log(familia.length);

*/

// Perguntas 
// window.confirm('Está gostando de JS?');

let nome = window.prompt('Qual é o seu nome?');

alert(`É um prazer, ${nome}!`);

let n1 = Number(window.prompt('Digite um valor:'));
let n2 = Number(window.prompt('Digite outro valor:'));
let media = (n1 + n2) / 2;
alert(`A média dos números é ${media}`);
document.writeln(`<h2>A média dos números é ${media}</h2>`);