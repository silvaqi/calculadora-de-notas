function calculo(numero1, numero2, numero3, numero4, soma){
	numero1 = Number.parseFloat(nota1.value)
	numero2 = Number.parseFloat(nota2.value)
	numero3 = Number.parseFloat(nota3.value)
	numero4 = Number.parseFloat(nota4.value)
	soma = (numero1 + numero2 + numero3 + numero4)
	if(soma >= 24){
		alert("Voce passou! Sua média final é: " + soma)
	}else{
		alert("Voce não passou! Sua média final é: " + soma)
	}
}