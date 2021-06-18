const a = document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mousemove', entrar);
a.addEventListener('mouseout', sair);

function clicar() {
    //var a = document.getElementById('area');
    a.innerText = 'Clicou!';
    a.style.backgroundColor = 'yellow';
}

function entrar() {
    //var a = document.getElementById('area');
    a.innerText = 'Entrou!';
    a.style.backgroundColor = 'red';
}

function sair() {
    //var a = document.getElementById('area');
    a.innerText = 'Saiu!'
    a.style.backgroundColor = 'white';
}