/* Gonzalo Vergara Div D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var numero1;
	var numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	var sumar;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = (numero1 + numero2);

	alert ("la respuesta es: " + resultado);

}

