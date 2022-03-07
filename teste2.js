let verificarVelocidade = velocidade => {
  let pontos = 0  
    if(velocidade > 70){
        pontos = Math.floor((velocidade - 70)/5)
        if(pontos > 12){
            console.log("Carteira Suspendida")
        }else{
            console.log("Você perdeu "+ pontos+" pontos(s) da carteira")
        }
    }else{
        console.log("Você não utrapassou o limite")
    }
}
verificarVelocidade(135)