/*si no selecciona el checkbox de los términos y condiciones, utilizando una estructura de control de flujo, generar un alert que 
indique que le faltó seleccionar el checkbox. Si el cliente si acepta los términos, al hacer CLIC podrá obtener el código*/

let checkbox = document.getElementById('checkCondiciones'); //checkbox
let obtenerCodigo = document.getElementById('obtenerCodigo');//enlace
let codigo = document.getElementById('codigo');

obtenerCodigo.addEventListener('click', function(){
    //verificar q el check esté seleccionado
    if (checkbox.checked == ''){
        alert("Para obtener un código de descuento debes aceptar los términos y condiciones.");

    }else {
        codigo.innerHTML = "MNO123ST";
    }
})