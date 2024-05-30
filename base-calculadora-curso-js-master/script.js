//Esto agrega a la pantalla el valor del boton de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

//Esto borra lo escrito en pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}

//Esto toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    //          el metodo eval, toma un string y lo calcula matematicamente
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}