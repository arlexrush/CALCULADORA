var operadora;
var operadorb;
var operacion;
/* EVENTOS OK */
function init() {
    //variables
    var resultado=document.getElementById('resultado');
    var uno=document.getElementById('uno');
    var dos=document.getElementById('dos');
    var tres=document.getElementById('tres');
    var cuatro=document.getElementById('cuatro');
    var cinco=document.getElementById('cinco');
    var seis=document.getElementById('seis');
    var siete=document.getElementById('siete');
    var ocho=document.getElementById('ocho');
    var nueve=document.getElementById('nueve');
    var cero=document.getElementById('cero');
    var clear=document.getElementById('clear');
    var coma=document.getElementById('coma');
    var suma=document.getElementById('suma');
    var resta=document.getElementById('resta');
    var multiplicacion=document.getElementById('multiplicacion');
    var division=document.getElementById('division');
    var igual=document.getElementById('igual');

    resultado.textContent = "0"
//eventos

uno.onclick = function(e) {
    if (resultado.textContent==="0") {
	resultado.textContent = "";
	resultado.textContent = resultado.textContent + "1";
    }
	else {
      resultado.textContent = resultado.textContent + "1";
    }
}


dos.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "2";
        }
    else {
        resultado.textContent = resultado.textContent + "2";
}
}


tres.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "3";
        }
    else {    
    resultado.textContent = resultado.textContent + "3";
}
}


cuatro.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "4";
        }
    else {
    resultado.textContent = resultado.textContent + "4";
}
}


cinco.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "5";
        }
    else {
    resultado.textContent = resultado.textContent + "5";
}
}


seis.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "6";
        }
    else {
    resultado.textContent = resultado.textContent + "6";
}
}


siete.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "7";
        }
    else {
    resultado.textContent = resultado.textContent + "7";
}
}


ocho.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "8";
        }
    else {
    resultado.textContent = resultado.textContent + "8";
}
}


nueve.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "9";
        }
    else {
    resultado.textContent = resultado.textContent + "9";
}
}


cero.onclick = function(e) {
    if (resultado.textContent==="0") {
        resultado.textContent = "";
        resultado.textContent = resultado.textContent + "0";
        }
    else {
    resultado.textContent = resultado.textContent + "0";
}
}


coma.onclick = function(e) {
    if (resultado.textContent.indexOf(".")===-1) {
        resultado.textContent = resultado.textContent + ".";
        }
    else {
        alert("error de doble (,)");
        limpieza();
}
}


clear.onclick = function(e) {
    limpieza();

}

suma.onclick = function(e) {
    operadora = resultado.textContent;
    operacion = "+";
    limpiar();
}

resta.onclick = function(e) {
    operadora = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicacion.onclick = function(e) {
    operadora = resultado.textContent;
    operacion = "*";
    limpiar();
}

division.onclick = function(e) {
    operadora = resultado.textContent;
    operacion = "/";
    limpiar();
}


igual.onclick = function(e) {
    operadorb = resultado.textContent;
    resolver();
    
}

}

function limpiar(){
    resultado.textContent = "";
    
}


function limpieza(){
    resultado.textContent = "0";
    operadora = 0;
    operadorb = 0;
    operacion = "";
    

}
/* HASTA AQUI FUNCIONA*/
function resolver(){
    var res=0;

    switch (operacion) {
        case "+":
            res=parseFloat(operadora) + parseFloat(operadorb);
            break;
        case "-":
            res=parseFloat(operadora) - parseFloat(operadorb);
            break;
        case "*":
            res=parseFloat(operadora) * parseFloat(operadorb);
            break;
        case "/":
            res=parseFloat(operadora) / parseFloat(operadorb);
            break;    
    }

    limpieza(); 
    resultado.textContent = res;

}


