function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<h3>Sua velocidade atual é de ${vel}km/h.</h3>`
    if (vel > 60) {
        res.innerHTML += `<h3><br>Você ultrapassou a velocidade permitida. <strong>MULTADO!</strong></h3>`
    }
    res.innerHTML += `<h3><br>Dirija sempre usando cinto de segurança!</h3>`
}