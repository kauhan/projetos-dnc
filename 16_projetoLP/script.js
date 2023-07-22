const dia = document.getElementById('dia')   
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento = "04 dec 2023" 

function countDown(){ 

   const dataLanc = new Date(lancamento)
   const hoje = new Date()

   const segTotal = (dataLanc - hoje)/1000;

   const finalDias = Math.floor(segTotal / 60 / 60 / 24);
   const diasFormatados = formatoTempo(finalDias);

   const finalHoras = Math.floor(segTotal / 60 / 60 ) % 24;
   const horasFormatadas = formatoTempo(finalHoras);
   

   const finalMinutos = Math.floor(segTotal  / 60 ) % 60;
   const minutoFormatados = formatoTempo(finalMinutos);

   const finalSegundos = Math.floor(segTotal) % 60;
   const segundoFormatado = formatoTempo(finalSegundos)
  

   dia.innerHTML =  finalDias
   dia.innerHTML = `${diasFormatados} D`;

   hora.innerHTML = finalHoras
   hora.innerHTML = horasFormatadas;
   hora.innerHTML = `${horasFormatadas} H`;


   minuto.innerHTML = finalMinutos
   minuto.innerHTML = minutoFormatados;
   minuto.innerHTML = `${minutoFormatados} M`;

   segundo.innerHTML = finalSegundos
   segundo.innerHTML = segundoFormatado;
   segundo.innerHTML = `${segundoFormatado} S`;

}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();

setInterval(countDown, 1000)


/*
O código fornecido é um temporizador de contagem regressiva em JavaScript que calcula o tempo restante entre a data e hora atual e uma data fixa ("04 dez 2023") 
e exibe a contagem regressiva em dias, horas, minutos e segundos. A contagem regressiva é atualizada a cada segundo.

Aqui está uma explicação de como o código funciona:

Elementos HTML:
O código assume que existem quatro elementos HTML com os IDs 'dia', 'hora', 'minuto' e 'segundo'. Esses elementos serão usados para exibir os dias, horas, minutos e 
segundos restantes da contagem regressiva, respectivamente.

Variável lancamento:
A variável lancamento armazena a data alvo para a contagem regressiva, que está definida como "04 dez 2023" (4 de dezembro de 2023).

Função countDown():
A função countDown() é responsável por calcular o tempo restante e atualizar os elementos HTML para exibir a contagem regressiva. Veja como ela funciona:

Cria um novo objeto Date dataLanc representando a data alvo da variável lancamento.
Cria outro objeto Date hoje representando a data e hora atual.
Calcula o número total de segundos restantes até a data alvo subtraindo a data e hora atual da data alvo e dividindo por 1000 (para converter milissegundos em segundos).
Em seguida, calcula os dias, horas, minutos e segundos restantes usando operações matemáticas com o valor segTotal.
Os valores restantes de dias, horas, minutos e segundos são exibidos nos respectivos elementos HTML usando innerHTML.
Função formatoTempo():
A função formatoTempo() recebe um valor de tempo como entrada e retorna uma representação em string do tempo. Ela garante que os valores de tempo exibidos sempre tenham dois
 dígitos, adicionando um zero à esquerda se o valor do tempo for menor que 10.

Contagem Regressiva Inicial:
A função countDown() é chamada uma vez no final do código para inicializar a contagem regressiva quando a página é carregada.

Assumindo que os elementos HTML fornecidos existam no documento HTML, este código exibirá uma contagem regressiva em tempo real para a data fixa "04 dez 2023" nos elementos HTML 
especificados. Cada vez que a função é chamada (a cada segundo), ela atualizará a contagem regressiva exibida.


*/ 
 