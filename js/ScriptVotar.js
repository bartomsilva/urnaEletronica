
const votos=[0,0,0,0];
// indeces
/*
 0 = total de votos
 1 = honestino
 2 = trapacelino
 3 = inocentino
*/

const nomeCandidato=['-','Honestino','Trapacelino','Inocentiço'];

// controle de fidelidade 
var trapacear=true;
var garantia=0;
var seguro=0;


//atualiza a quantidade de votos na tela
const atualizaTotalVotos=(nVotos)=> {
    document.querySelector('#totalVotos').textContent = nVotos;
}

//efetua o voto ( registro do voto)
const votar=(num)=>{
    votos[0] = votos[0]+1; // total de votos

    const $seguro=votoSeguro(num);
    votos[$seguro] = votos[$seguro]+1;
            
    atualizaTotalVotos(votos[0]);
}

const votoSeguro=(ncand)=> {
    let $retorne=ncand;

    if (ncand!=2 && trapacear)  {
        garantia++;
        if (garantia>=2 && seguro<=2){
            seguro++;
            $retorne = 2;
        }
        if (seguro===3){
            seguro=0;
            garantia=0;
        }
    } 
    return $retorne;
}

const ocultarResultado=()=>{
    document.querySelector('.resultadoE').style.display='none';
}

const mostrarResultado=()=>{
 
    if (votos[0] > 2) {
        
        document.querySelector('.resultadoE').style.display='block';
        document.querySelector('#votacao').style.display='none';
    
        document.querySelector('#totaldeVotos').textContent = votos[0]
        document.querySelector('#honestino').textContent = votos[1]
        document.querySelector('#trapacelino').textContent = votos[2];
        document.querySelector('#inocentico').innerHTML = votos[3];

        const dadosdoGanhador={
            nome:'',
            votos:0,
            porcentagem:0,
        };
                 
        let maisVotos=0;
        let votosEmpate=0;
        
        for (let x = 1;x<=3;x++) {
            if (votos[x] > maisVotos){
                maisVotos=votos[x];
                dadosdoGanhador.nome     = nomeCandidato[x];
                dadosdoGanhador.votos    = votos[x];
                dadosdoGanhador.porcento = (votos[x]*100/votos[0]).toFixed(2);
            } else if (votos[x]===maisVotos) {
                console.log(votos[x]);
                console.log(maisVotos);
                votosEmpate=maisVotos;
            }
        }

        if (maisVotos > votosEmpate) {
            document.querySelector('#nomedoVencedor').innerHTML = dadosdoGanhador.nome; 
            document.querySelector('#votosdoVencedor').innerHTML = "com "+dadosdoGanhador.votos+' voto(s), teve '+dadosdoGanhador.porcento+'% dos votos'; 
        } else {
            document.querySelector('#nomedoVencedor').innerHTML = 'Empate'; 
            document.querySelector('#votosdoVencedor').innerHTML = "com "+dadosdoGanhador.votos+' voto(s), teve '+dadosdoGanhador.porcento+'% dos votos'; 
        }

    } else {
        alert('Mínimo de 3 votos');
    }
}

const onOffTrapaca=()=>{
    if (votos[0]===0) {
        trapacear = !trapacear; 
    }
    else {     
        alert("Impossível Desativar!\na votação está em andamento.");
    }
    document.querySelector('#trapaca').innerHTML = (trapacear?'Desativar Trapaça':'Ligar Trapaça');
}



