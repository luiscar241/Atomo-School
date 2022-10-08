Proceso ConversorTemperaturas
	Definir  cel, fah, kel Como Real;
	
	Escribir "Conversor de Unidades de Temperaturas";
	Escribir "Ingresa la temperatura en Grados Celsius";
	Leer cel;
	
	fah <- (cel*1.8)+32;
	kel <- cel + 273.15;
	
	Escribir "-------------------";
	Escribir "Celsius: ",cel, "�C";
	Escribir "Fahrenheit: ",fah, "�F";
	Escribir "Kelvin: ",kel, "�K";
	Escribir "-------------------";
	
	Escribir "Preciona cualquier tecla para Salir";
	
FinProceso



