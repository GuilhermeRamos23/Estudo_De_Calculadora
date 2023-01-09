/*funções na tela*/
function insert (num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero+num;
}
function clean () {
    document.getElementById('resultado').innerHTML="";
}
function back(){
    var resultado=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= resultado.substring(0, resultado.length -1);
}/*funções de soma*/

const display = document.getElementById('resultado')
const numero= document.querySelectorAll('[id=tecla]')
console.log(numero)

if (
    action === 'adicao' ||
    action === 'subtracao' ||
    action === 'multiplicacao' ||
    action === 'divisao'
    action ==='porcentagem'
  ) 
  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'igual') {
    console.log('equal key!')
  }