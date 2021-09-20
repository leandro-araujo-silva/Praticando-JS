function exibir(linhas) {
  let cont = '';
  for(let i = 1; i <=linhas; i++) {
    cont += '*';
    console.log(cont); 
  }
}

exibir(10)