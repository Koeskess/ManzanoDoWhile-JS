do {
    var numero = parseInt(prompt("Digite um numero positivo [numero negativo encerra]: "));
    var contadora = contadora + 1;
    var media = media + numero;
    var soma = soma + numero;
} while (numero >= 0);

var media_final = media / (contadora - 1);


document.write("Foram digitados " +  contadora  + " numeros" + "</br>");
document.write("A media dos numero digitados é" + media_final + "</br>");
document.write("A somatoria dos valores digitados é" + soma + "</br>");