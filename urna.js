var urna = console.log("-------CANDIDATOS-------")
var candidato = console.log ("(13) Lula")
var candidato = console.log ("(14) Bolsonaro")
var candidato = console.log ("(15) Ciro")
var candidato = console.log ("(0) Branco ou Nulo")
var urna = console.log("--------URNA--------")

var voto = prompt("Informe seu candidato")

let votosLula=0
let votosBolsonaro=0
let votosCiro=0
let votosBrancoNulo=0
let votoTotal=0



while(voto >=0){
    if(voto === 13){
        votosLula++
        console.log('Você votou em Lula')
    }else if(voto === 14){
        votosBolsonaro++
        console.log('Você votou em Bolsonaro')
    }else if(voto === 15){
        votosCiro++
        console.log('Voce votou em Ciro')
    }else if(voto === 0){
        votosBrancoNulo++
        console.log("Você votou Branco ou Nulo, tente novamente.")
    }    
}if(voto===12 || voto ===13 || voto === 14 || voto ===0){
    votoTotal++
    console.log()
}
