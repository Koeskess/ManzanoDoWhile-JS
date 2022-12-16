var contador = 15;
var quadrado = 0;

do {
    var quadrado = contador ** 2;
    document.write(contador + " ²" + " = " + quadrado + "</br>")
    var contador = contador + 1;
} while (contador <= 200);