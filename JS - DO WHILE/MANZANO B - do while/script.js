var contadora = 1;
var somadora = 0;

do {
    if (contadora % 2 == 0) {
        somadora = somadora + contadora;
        
    }
    contadora++;
} while (contadora <= 500);

alert("A soma dos valores pares entre 1 e 500 é igual a: " + somadora);