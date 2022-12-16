var numero;
var contadora = 1;
var soma = 0;
var fatorial = 1;

do {
    numero = parseInt(prompt("Digite o " + contadora + "º valor:"));
    do {
        fatorial = fatorial * numero;
        numero--;
    } while (numero > 1);
    
    soma = soma + fatorial;
    contadora++;
    fatorial = 1;
} while (contadora <= 15);
alert("O somatório do fatorial dos 15 valores é igual a: " + soma);