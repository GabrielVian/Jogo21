var card = document.querySelector('.card')
var res = document.querySelector('#res')
var valor = 0
var pontRes = document.querySelector('#pont')
var carta = document.querySelector('#atras')
var estaVirada = false
var pontuacao = 0

card.addEventListener( 'click', function() {
    estaVirada = estaVirada == false?true:false
    card.classList.toggle('is-flipped')
    if(estaVirada){
        let cartaSorteada = Math.floor(Math.random()*13 +1)
        valor += cartaSorteada
        carta.style.background = `url(baralho/${cartaSorteada}.png) no-repeat`
        carta.style.backgroundPosition = 'center'
        carta.style.backgroundSize = '90%'
    }
    if(valor > 21 && estaVirada == true){
        alert("Você Perdeu!")
        valor = 0
        pontuacao--
    }else if (valor == 21){
        pontuacao++
        valor = 0
        alert("Você ganhou")
    }
    
    pontRes.innerHTML = `Pontuação: ${pontuacao>0?pontuacao:0} pontos`
    res.innerHTML = `Valor: ${valor} pontos`
});

function desistir(){
    alert('Você desistiu!')
    valor = 0
    res.innerHTML = `Valor: ${valor} pontos`
}
