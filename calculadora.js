let operador='';
let numero1;
let numero2;
let resultado;

function calculadora(){

    // ENTRADA DO OPERADOR SELECIONADO
    operador = document.querySelector('#slcoperador').value;

    
    // VERIFICA SE É O OPERADOR DE SOMA
    if (operador =='+') {
        //alert ('VOCÊ ESCOLHEU A OPERAÇÃO DE SOMA');
        somar();
    }

    // VERIFICA SE É O OPERADOR DE SUBTRAÇÃO
    if (operador =='-') {
        subtrair();
    }

    // VERIFICA SE É O OPERADOR DE MULTIPLICAÇÃO
    if (operador =='*') {
        multiplicar();
    }
    
    // VERIFICA SE É O OPERADOR DE DIVISÃO
    if (operador =='/') {
        dividir();
    }
}
    function somar(){
    //Entrada de dado do número 1
    
    numero1= parseInt(document.querySelector('#numero1').value);
    //Entrada de dado do número 2
    numero2= parseInt(document.querySelector('#numero2').value);  
    //PROCESSAMENTO (SOMAR)
    resultado = numero1 + numero2;
//SAIDA (VALOR DA SOMA)
    document.querySelector('#resultado').innerHTML = resultado;
    
    //alert('RESULTADO:' + resultado)

    }
    //DECLARAÇÃO DA FUNÇÃO DE SUBTRAIR
    function subtrair(){
        //Entrada de dado do número 1
        
        numero1= parseInt(document.querySelector('#numero1').value);
        //Entrada de dado do número 2
        numero2= parseInt(document.querySelector('#numero2').value);  
        //PROCESSAMENTO (SOMAR)
        resultado = numero1 - numero2;

    //SAIDA (VALOR DA SUBTRAÇÃO)
        document.querySelector('#resultado').innerHTML = resultado;
        
        }

        //DECLARAÇÃO DA FUNÇÃO DE MULTIPLICAR
    function multiplicar(){
        //Entrada de dado do número 1
        
        numero1= parseInt(document.querySelector('#numero1').value);
        //Entrada de dado do número 2
        numero2= parseInt(document.querySelector('#numero2').value);  
        //PROCESSAMENTO (SOMAR)
        resultado = numero1 * numero2;
    //SAIDA (VALOR DA MULTIPLICÃO)
        document.querySelector('#resultado').innerHTML = resultado;
    }

    //DECLARAÇÃO DA FUNÇÃO DE DIVISÂO
    function dividir(){
        //Entrada de dado do número 1
        
        numero1= parseInt(document.querySelector('#numero1').value);
        //Entrada de dado do número 2
        numero2= parseInt(document.querySelector('#numero2').value);  
        //PROCESSAMENTO (DIVISÃO)
        resultado = numero1 / numero2;
    //SAIDA (VALOR DA DIVISÂO)
        document.querySelector('#resultado').innerHTML = resultado;
    }

    //TRATAMENTO DAS IMAGENS DOS OPERADORES

    let select = document.querySelector('#slcoperador');
    select.addEventListener('change',function(){
        
        let imgOperacao = document.querySelector('#imgOperacao');
        let op = select.options[select.selectedIndex].value;
        
        if(op == '+'){
            imgOperacao.setAttribute('src', 'img/adicionar.png');
            
        }

        if(op == '-'){
            imgOperacao.setAttribute('src', 'img/subtracao.png');
            
        }

        if(op == '*'){
            imgOperacao.setAttribute('src', 'img/multiplicacao.png');
            
        }

        if(op == '/'){
            imgOperacao.setAttribute('src', 'img/divisao.png');
            
        }

    });

    //FUNÇÃO DE LIMPAR FORMULÁRIO

    function limpar(){

        document.querySelector('#numero1').value = '';
        document.querySelector('#numero2').value = '';
        document.querySelector('#resultado').innerHTML = '-';
    }
