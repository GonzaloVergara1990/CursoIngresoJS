/* Gonzalo Vergara Div D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var numero1;
	var numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	var restar;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = (numero1 - numero2);

	alert ("la respuesta es: " + resultado);
}

function multiplicar()
{ 
	var numero1;
	var numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	var multiplicar;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = (numero1 * numero2);

	alert ("la respuesta es: " + resultado);
}

function dividir()
{
	var numero1;
	var numero2;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	var dividir;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = (numero1 / numero2);

	alert ("la respuesta es: " + resultado);
}

