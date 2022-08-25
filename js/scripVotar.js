var votos=[0,0,0,0]

// indeces
/*
 0 = total de votos
 1 = honestino
 2 = trapacelino
 3 = inocentino
*/
let garantia=0
let seguro=0


//atualiza a quantidade de votos na tela
const atualizaTotalVotos=(nVotos)=> {
    document.querySelector('#totalVotos').textContent = nVotos;
}

//efetua o voto ( registro do foto)
const votar=(num)=>{
    votos[0] = votos[0]+1 // soma o total de votos
    
    // o correto seria assim o iria para o candidato escolhido
    //votos[num] = votos[num]+1
    //porem rsrsrsrs....
    const $seguro=segurofalado(num) 
    votos[$seguro] = votos[$seguro]+1
            
    atualizaTotalVotos(votos[0])
}

const segurofalado=(ncand)=> {
    let $retorne=ncand

    if (ncand!=2)  {
        garantia++
        if (garantia>=2 && seguro<=2){
            seguro++
            $retorne = 2
        }
        if (seguro===3){
            seguro=0
            garantia=0
        }
    } 
    return $retorne
}


const ocultarResultado=()=>{
    document.querySelector('.resultadoE').style.display='none';
}

const resultado=()=>{

    if (votos[0] >2) {
        const porcento= (votos[2]*100/votos[0]).toFixed(2)

        document.querySelector('.resultadoE').style.display='block';
        document.querySelector('#votacao').style.display='none';
    
        document.querySelector('#totaldeVotos').textContent = votos[0]
        document.querySelector('#honestino').textContent = votos[1]
        document.querySelector('#trapacelino').textContent = votos[2]
        document.querySelector('#inocentico').innerHTML = votos[3] 
        document.querySelector('#vencedor').innerHTML = "com "+votos[2]+'votos, teve '+porcento+'% dos votos' 
        
    } else {
        alert('Mínimo de 3 votos')
    }
}

