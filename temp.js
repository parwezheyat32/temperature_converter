let fahrenheit = document.getElementById("fahrenheit");
let celsius = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");

celsius.oninput = function() {
// celsius to fahrenheit
let f = ((parseFloat(celsius.value) * 9) / 5) + 32;
fahrenheit.value = parseFloat(f.toFixed(2));
// celsius to kelvin
let k = (parseFloat(celsius.value) + 273.15);
kelvin.value = parseFloat(k.toFixed(2));
};

fahrenheit.oninput = function(){
// fahrenheit to celsius
let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 ;
celsius.value = parseFloat(c.toFixed(2));
// fahrenheit to kelvin
let k = (((parseFloat(fahrenheit.value) - 32) * 5) / 9) + 273.15;
kelvin.value = parseFloat(k.toFixed(2));
};

kelvin.oninput = function(){
// kelvin to celsius
let c = parseFloat(kelvin.value) - 273.15;
celsius.value = parseFloat(c.toFixed(2));
//kelvin to fahrenheit
let f = (((parseFloat(kelvin.value) - 273.15) * 9) / 5) + 32;
fahrenheit.value = parseFloat(f.toFixed(2));
};


