var p1 = document.getElementsByTagName('p')[0];

p1.style.color = 'blue';

document.write(`<p>Está escrito assim: ${p1.innerHTML}</p>`);

var corpo = document.body;

corpo.style.background = 'black';

var mensagem = document.getElementById('msg');

mensagem.style.color = 'green';

mensagem.innerText += ' Estou aguardando...';

var game = document.getElementById('jogo');

game.style.color = 'red';

var atividade = document.querySelector('div#esporte');

atividade.style.backgroundColor = 'blue';