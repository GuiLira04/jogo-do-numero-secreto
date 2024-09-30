//Jogo do número secreto
//26/09/2024
//Guilherme Lira




//Variáveis
let campos, tentativa_user, tentativa_qtd, min, max, palavra_tentativa, msg_parabens, randomNumbers_list, randomNumber;

randomNumbers_list = [];
max = 10;
min = 1;
tentativa_qtd = 1



//Funções estéticas
function alterar_texto(tag, texto){
    campos = document.querySelector(tag);
    campos.innerHTML = (texto);
}

function msgStart(){
    alterar_texto("h1", "Jogo do nº secreto!");
    alterar_texto("h2", `Escolha um numero entre ${min} e ${max}`);
}


function limparCampo(){
    tentativa_user = document.querySelector("input");
    tentativa_user.value = "";
}



//Funções do programa

msgStart()

function numero_aleatorio(){
    randomNumber = parseInt(Math.random() * max + 1);
    if(randomNumbers_list.length == max){
        randomNumbers_list = []
    }
    if(randomNumbers_list.includes(randomNumber)){
        return numero_aleatorio();
    } else {
            randomNumbers_list.push(randomNumber);
            return randomNumber;
        }      
    }

numero_aleatorio();
//console.log(`número sereto: ${randomNumber}`);


function verificarTentativa(){
    tentativa_user = document.querySelector("input").value;
    //console.log(`Tentativa do usuário: ${tentativa_user}`);   
    
    if (tentativa_user == randomNumber) {
        
        palavra_tentativa = tentativa_qtd > 1 ? "tentativas" : "tentativa";
        msg_parabens = `Parabéns!!! Você acertou o nº secreto com ${tentativa_qtd} ${palavra_tentativa}.`;
        alterar_texto("h1", "Acertou!!!");
        alterar_texto("h2", msg_parabens);
        document.getElementById("reiniciar").removeAttribute("disabled");   
        
    } else {
        if (tentativa_user > randomNumber){
            
            alterar_texto("h1", "Ops...");
            alterar_texto("h2", `O nº secreto é menor que ${tentativa_user}`);
            
        } else {
            
            alterar_texto("h1", "Ops...");
            alterar_texto("h2", `O nº secreto é maior que ${tentativa_user}`);
            
        }
        tentativa_qtd++;
        limparCampo();
    }
    //console.log(`quantidade de tentativas: ${tentativa_qtd}`);
}


function restart(){
    numero_aleatorio();
    tentativa_qtd = 1;
    limparCampo();
    msgStart();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    //console.log(" ");
    //console.log("Programa reiniciado");
    //console.log(`número secreto: ${randomNumber}`);
    //console.log(randomNumbers_list);
    
}
    
    
    
    
    
    



