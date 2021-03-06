let html_vezDoJogador = document.querySelector('#jogador-selecionado');
let vezDeJogar = 'X'
let objSelecionado = [];
let idSelecionado = {x: [], o: []};


// a lista ordenada é validada, verificando todas possibilidades
// 

let placar = (vencedor)=>{

    if(!placar.x && !placar.o){
        placar.x = 0;
        placar.o = 0;
    }

    if(vencedor==='x'){
        placar.x += 1;
        document.getElementById('x').innerText = placar.x
    }else if(vencedor==='o'){
        placar.o += 1;
        document.getElementById('o').innerText = placar.o
    }else{
        console.log('[!] erro ao tentar detectar vencedor')
    }
}

function* mudarCor(ids){
    this.ids = ids;
    vezDeJogar ==='X'?placar('o'):placar('x');

    this.ids.map(valor=>{
        document.getElementById(valor).classList.add('quadrado_vencedor');
    })

    yield;
    this.ids.map(valor=>{
        document.getElementById(valor).classList.remove('quadrado_vencedor');
    })

}

function validarVencedor(arr){ 
    
    if([1, 2, 3].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([1, 2, 3]);
        mudarCor.step.next();
    }
    if([4, 5, 6].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([4, 5, 6]);
        mudarCor.step.next();
    }
    if([7, 8, 9].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([7, 8, 9]);
        mudarCor.step.next();
    }
    if([1, 4, 7].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([1, 4, 7]);
        mudarCor.step.next();
    }
    if([2, 5, 8].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([2, 5, 8]);
        mudarCor.step.next();
    }
    if([3, 6, 9].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([3, 6, 9]);
        mudarCor.step.next();
    }
    if([1, 5, 9].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([1, 5, 9]);
        mudarCor.step.next();
    }
    if([3, 5, 7].every(value=>arr.includes(value))){
        mudarCor.step = mudarCor([3, 5, 7]);
        mudarCor.step.next();
    }
    
}

// remover clicajem, verificar vencedor, mudar status da vez do jogador
function validarJogo(quadrado, arr){
    quadrado.innerHTML = vezDeJogar;
    vezDeJogar==='X'?vezDeJogar='O':vezDeJogar='X';
    html_vezDoJogador.innerText = vezDeJogar;
    quadrado.removeAttribute('onclick');
    validarVencedor(arr)
}


function escolherQuadrado(quadrado){
    //console.log(idSelecionado);
    objSelecionado.push(quadrado)

    if (vezDeJogar === 'X'){
        idSelecionado.x.push(+quadrado.id)
        validarJogo(quadrado, idSelecionado.x)
        

    } else if (vezDeJogar === 'O'){
        idSelecionado.o.push(+quadrado.id)
        validarJogo(quadrado, idSelecionado.o)
        

    } else {
        document.alert("erro boy")
    }

}

function restart(){
    for(let i of objSelecionado){
        i.innerText = "-"
        console.log(i.setAttribute('onclick', 'escolherQuadrado(this)'))
    }
    objSelecionado = [];
    idSelecionado.o = [];
    idSelecionado.x = [];
    mudarCor.step.next();
}
